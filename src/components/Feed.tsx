import style from './Feed.module.scss';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useVideos } from '../hooks/useVideos';

interface FeedProps {
  sidebarOpen: boolean;
  category: number;
}

const Feed = ({ sidebarOpen, category }: FeedProps) => {
  const { videos, loading, error } = useVideos(category.toString());

  if (loading) return <p>Loading videos</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={style.feed}>
      <div
        style={{ minWidth: sidebarOpen ? '240px' : '0' }}
        className={style.sidebar}
      ></div>
      <ul
        className={
          style.feedContainer +
          ' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'
        }
      >
        {videos.map((video) => (
          <li key={video.id} className={style.feedItem}>
            <Link to={`/video/${video.snippet.categoryId}/${video.id}`}>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={`thumbnail${video.id}`}
              />
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

export default Feed;
