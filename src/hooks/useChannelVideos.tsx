import { useEffect, useState } from 'react';

export interface Video {
  id: string;
  snippet: {
    title: string;
    publishedAt: string;
    categoryId: string;
    channelTitle: string;
    thumbnails: {
      medium: { url: string };
    };
  };
  statistics: {
    viewCount: string;
  };
}

interface PlaylistItemsResponse {
  items: {
    snippet: {
      resourceId: { videoId: string };
      title: string;
      publishedAt: string;
      thumbnails: { medium: { url: string } };
    };
  }[];
}

interface VideosResponse {
  items: Video[];
}

export const useChannelVideos = (uploadsPlaylistId: string) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!uploadsPlaylistId) return;

    const fetchVideos = async () => {
      setLoading(true);
      setError(null);

      try {
        const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

        const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=48&key=${API_KEY}`;
        const playlistRes = await fetch(playlistUrl);
        if (!playlistRes.ok) throw new Error(`HTTP ${playlistRes.status}`);
        const playlistJson: PlaylistItemsResponse = await playlistRes.json();

        const videoIds = playlistJson.items
          .map((item) => item.snippet.resourceId.videoId)
          .join(',');

        if (!videoIds) {
          setVideos([]);
          return;
        }

        const videosUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${API_KEY}`;
        const videosRes = await fetch(videosUrl);
        if (!videosRes.ok) throw new Error(`HTTP ${videosRes.status}`);
        const videosJson: VideosResponse = await videosRes.json();

        setVideos(videosJson.items);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [uploadsPlaylistId]);

  return { videos, loading, error };
};
