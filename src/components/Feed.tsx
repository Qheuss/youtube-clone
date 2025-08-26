import style from './Feed.module.scss';
import thumbnail1 from '../assets/thumbnail1.png';
import thumbnail2 from '../assets/thumbnail2.png';
import thumbnail3 from '../assets/thumbnail3.png';
import thumbnail4 from '../assets/thumbnail4.png';
import thumbnail5 from '../assets/thumbnail5.png';
import thumbnail6 from '../assets/thumbnail6.png';
import thumbnail7 from '../assets/thumbnail7.png';
import thumbnail8 from '../assets/thumbnail8.png';
import { Link } from 'react-router-dom';

interface FeedProps {
  sidebarOpen: boolean;
}

const Feed = ({ sidebarOpen }: FeedProps) => {
  const videos = [
    {
      id: 1,
      thumbnail: thumbnail1,
      title: 'Thumbnail 1',
      channel: 'Thumbnail 1 channel',
      views: '15k views',
      date: '2 days ago',
    },
    {
      id: 2,
      thumbnail: thumbnail2,
      title: 'Thumbnail 2',
      channel: 'Thumbnail 2 channel',
      views: '20k views',
      date: '1 week ago',
    },
    {
      id: 3,
      thumbnail: thumbnail3,
      title: 'Thumbnail 3',
      channel: 'Thumbnail 3 channel',
      views: '25k views',
      date: '2 weeks ago',
    },
    {
      id: 4,
      thumbnail: thumbnail4,
      title: 'Thumbnail 4',
      channel: 'Thumbnail 4 channel',
      views: '30k views',
      date: '3 weeks ago',
    },
    {
      id: 5,
      thumbnail: thumbnail5,
      title: 'Thumbnail 5',
      channel: 'Thumbnail 5 channel',
      views: '35k views',
      date: '4 weeks ago',
    },
    {
      id: 6,
      thumbnail: thumbnail6,
      title: 'Thumbnail 6',
      channel: 'Thumbnail 6 channel',
      views: '40k views',
      date: '5 weeks ago',
    },
    {
      id: 7,
      thumbnail: thumbnail7,
      title: 'Thumbnail 7',
      channel: 'Thumbnail 7 channel',
      views: '45k views',
      date: '6 weeks ago',
    },
    {
      id: 8,
      thumbnail: thumbnail8,
      title: 'Thumbnail 8',
      channel: 'Thumbnail 8 channel',
      views: '50k views',
      date: '7 weeks ago',
    },
  ];

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
            <Link to={`/video/20/${video.id}`}>
              <img src={video.thumbnail} alt={`thumbnail${video.id}`} />
              <div className={style.videoInfo}>
                <h2>{video.title}</h2>
                <h3>{video.channel}</h3>
                <span>
                  {video.views} &bull; {video.date}
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
