import { Link, useParams } from 'react-router-dom';
import style from './VideoRecommendations.module.scss';
import { useVideos } from '../hooks/useVideos';
import moment from 'moment';

const VideoRecommendations = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { videos, loading, error } = useVideos(categoryId!.toString());

  if (loading) return <p>Loading videos</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={style.recommendations}>
      {videos.map((video) => (
        <Link
          to={`/${video.snippet.categoryId}/${video.id}`}
          key={video.id}
          className={style.videoCard}
        >
          <div className={style.videoThumbnail}>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={`thumbnail${video.id}`}
            />
            <span className='absolute bottom-2 right-2 bg-black/60  text-white text-xs rounded !py-1 !px-2 shadow-md'>
              {Math.floor(
                moment.duration(video.contentDetails.duration).asMinutes() / 60
              ) > 0 &&
                Math.floor(
                  moment.duration(video.contentDetails.duration).asMinutes() /
                    60
                ) + ':'}
              {Math.floor(
                moment.duration(video.contentDetails.duration).asMinutes() % 60
              )}
              :
              {moment.duration(video.contentDetails.duration).seconds() <= 9
                ? '0' + moment.duration(video.contentDetails.duration).seconds()
                : moment.duration(video.contentDetails.duration).seconds()}
            </span>
          </div>
          <div className={style.videoInfo}>
            <h2 className={style.videoTitle}>
              {video.snippet.title.length > 25
                ? video.snippet.title.trim().substring(0, 25) + '...'
                : video.snippet.title}
            </h2>
            <h3 className={style.channelName}>{video.snippet.channelTitle}</h3>
            <span className={style.videoStats}>{`${
              Number(video.statistics.viewCount) >= 1000000
                ? (Number(video.statistics.viewCount) / 1000000).toFixed(0) +
                  'M'
                : Number(video.statistics.viewCount) >= 1000
                ? (Number(video.statistics.viewCount) / 1000).toFixed(0) + 'K'
                : Number(video.statistics.viewCount)
            } views • ${moment(video.snippet.publishedAt).fromNow()}`}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoRecommendations;
