import { useEffect, useState } from 'react';

interface Video {
  id: string;
  snippet: {
    title: string;
    channelTitle: string;
    publishedAt: string;
    categoryId: string;
    thumbnails: {
      medium: { url: string };
      high: { url: string };
    };
  };
  statistics: {
    viewCount: string;
  };
  contentDetails: {
    duration: string;
  };
}

export function useVideos(category: string) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=48&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch recommendations');
        const json = await res.json();

        setVideos(json.items || []);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { videos, loading, error };
}
