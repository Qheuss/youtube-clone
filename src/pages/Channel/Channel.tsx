import { useParams } from 'react-router-dom';
import ChannelInfos from '../../components/ChannelInfos';
import ChannelVideos from '../../components/ChannelVideos';
import { useChannel } from '../../hooks/useChannel';

const Channel = () => {
  const { channelId } = useParams<{ channelId: string }>();
  const { channel, uploadsPlaylistId, loading } = useChannel(channelId ?? '');

  if (loading) return <p>Loading…</p>;
  if (!channel) return <p>Unknown channel</p>;

  return (
    <>
      <ChannelInfos channel={channel} />
      <ChannelVideos uploadsPlaylistId={uploadsPlaylistId} />
    </>
  );
};

export default Channel;
