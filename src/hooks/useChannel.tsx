import { useEffect, useState } from 'react';

export interface Channel {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: { url: string };
    };
  };
  statistics: {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  };
  contentDetails: {
    relatedPlaylists: {
      uploads: string;
    };
  };
  brandingSettings: {
    image: {
      bannerExternalUrl: string;
    };
  };
}

interface ChannelApiResponse {
  items: Channel[];
}

export const useChannel = (channelId: string | null) => {
  const [channel, setChannel] = useState<Channel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [uploadsPlaylistId, setUploadsPlaylistId] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (!channelId) return;

    const fetchChannel = async () => {
      setLoading(true);
      setError(null);

      try {
        const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
        const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,contentDetails,brandingSettings&id=${channelId}&key=${API_KEY}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const json: ChannelApiResponse = await response.json();

        if (!json.items || json.items.length === 0) {
          throw new Error('No channel found');
        }

        setChannel(json.items[0]);
        setUploadsPlaylistId(
          json.items[0].contentDetails.relatedPlaylists.uploads
        );
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

    fetchChannel();
  }, [channelId]);

  return { channel, uploadsPlaylistId, loading, error };
};
