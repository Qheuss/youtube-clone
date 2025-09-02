import { useState, useEffect } from 'react';

export interface Video {
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

interface SearchItem {
  id: { videoId: string };
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
}

interface VideosApiResponse {
  items: Video[];
}

export const useSearchSuggestions = (query: string) => {
  const [suggestions, setSuggestions] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return setSuggestions([]);

    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

        const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          query
        )}&type=video&maxResults=8&key=${API_KEY}`;
        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();

        const items: SearchItem[] = searchData.items || [];
        const videoIds = items.map((i) => i.id.videoId).join(',');

        if (!videoIds) {
          setSuggestions([]);
          return;
        }

        const videosUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIds}&key=${API_KEY}`;
        const videosRes = await fetch(videosUrl);
        const videosData: VideosApiResponse = await videosRes.json();

        setSuggestions(videosData.items || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  return { suggestions, loading };
};
