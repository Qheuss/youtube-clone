import { useEffect, useState } from 'react';

interface Video {
  id: string;
  snippet: {
    title: string;
    channelId: string;
    subscriberCount: string;
    publishedAt: string;
    description: string;
    thumbnails: {
      medium: { url: string };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    commentCount: string;
  };
  contentDetails: {
    duration: string;
  };
}

export function useVideo(videoId: string) {
  const [video, setVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const json = await response.json();
        setVideo(json.items?.[0] || null);
      } catch (err) {
        console.error('Fetch video error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [videoId]);

  return { video, loading };
}
