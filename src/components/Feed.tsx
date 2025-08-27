import style from './Feed.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from 'moment';

interface FeedProps {
  sidebarOpen: boolean;
  category: number;
}

interface Video {
  id: string;
  snippet: {
    title: string;
    channelTitle: string;
    publishedAt: string;
    categoryId: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
  };
}

const Feed = ({ sidebarOpen, category }: FeedProps) => {
  const [data, setData] = useState<Video[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
      const response = await fetch(videoList_url);
      const json = await response.json();
      setData(json.items || []);
    };

    fetchData();
  }, [category]);

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
        {data.map((video) => (
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
