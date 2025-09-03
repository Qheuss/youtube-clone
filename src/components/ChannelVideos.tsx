import moment from 'moment';
import style from './Feed.module.scss';
import { useChannelVideos } from '../hooks/useChannelVideos';
import { Link } from 'react-router-dom';

interface ChannelVideosProps {
  uploadsPlaylistId: string | null;
}

const ChannelVideos = ({ uploadsPlaylistId }: ChannelVideosProps) => {
  const { videos, loading, error } = useChannelVideos(uploadsPlaylistId ?? '');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!videos || videos.length === 0) return <div>No videos found</div>;

  return (
    <div className={style.feed}>
      <ul
        className={
          style.feedContainer +
          ' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'
        }
      >
        {videos.map((video) => (
          <li key={video.id} className={style.feedItem}>
            <Link to={`/${video.snippet.categoryId}/${video.id}`}>
              <div className='relative'>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={`thumbnail${video.id}`}
                />
                <span className='absolute bottom-2 right-2 bg-black/60  text-white text-xs rounded !py-1 !px-2 shadow-md'>
                  {Math.floor(
                    moment.duration(video.contentDetails.duration).asMinutes() /
                      60
                  ) > 0 &&
                    Math.floor(
                      moment
                        .duration(video.contentDetails.duration)
                        .asMinutes() / 60
                    ) + ':'}
                  {Math.floor(
                    moment.duration(video.contentDetails.duration).asMinutes() %
                      60
                  )}
                  :
                  {moment.duration(video.contentDetails.duration).seconds() <= 9
                    ? '0' +
                      moment.duration(video.contentDetails.duration).seconds()
                    : moment.duration(video.contentDetails.duration).seconds()}
                </span>
              </div>
              <div className={style.videoInfo}>
                <h2>
                  {video.snippet.title.length > 35
                    ? video.snippet.title.trim().substring(0, 35) + '...'
                    : video.snippet.title}
                </h2>
                <h3>{video.snippet.channelTitle}</h3>
                <span>
                  {parseInt(video.statistics.viewCount).toLocaleString()} views
                  &bull; {moment(video.snippet.publishedAt).fromNow()}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelVideos;
