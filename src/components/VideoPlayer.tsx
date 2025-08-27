import style from './VideoPlayer.module.scss';
import likeIcon from '../assets/like.png';
import dislikeIcon from '../assets/dislike.png';
import shareIcon from '../assets/share.png';
import saveIcon from '../assets/save.png';
import user_profile from '../assets/user_profile.jpg';
import { useParams } from 'react-router-dom';
import { useVideo } from '../hooks/useVideo';
import moment from 'moment';

const VideoPlayer = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const { video, loading } = useVideo(videoId!.toString());

  if (loading) return <p>Loading…</p>;
  if (!video) return <p>Unknown video</p>;

  return (
    <div className={style.video_player}>
      {/* <video src={video1} controls autoPlay={false} /> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
      ></iframe>
      <section className={style.video_details}>
        <h1>{video.snippet.title}</h1>
        <div className={style.video_info}>
          <div className={style.channel_info}>
            <button className={style.channel_button}>
              <img
                src={user_profile}
                alt='Channel'
                className={style.channel_avatar}
              />
              <div className={style.channel_details}>
                <h3>{video.snippet.channelTitle}</h3>
                {/* <p>{video.statistics.subscriberCount} subs</p> */}
              </div>
            </button>
            <button className={style.subscribe_button}>Subscribe</button>
          </div>

          <div className={style.video_actions}>
            <div className={style.like_buttons}>
              <button>
                <img src={likeIcon} alt='Like' />
                <span>
                  {Number(video.statistics.likeCount) >= 1000
                    ? (Number(video.statistics.likeCount) / 1000).toFixed(0) +
                      'k'
                    : Number(video.statistics.likeCount) >= 1000000
                    ? (Number(video.statistics.likeCount) / 1000000).toFixed(
                        0
                      ) + 'm'
                    : Number(video.statistics.likeCount)}
                </span>
              </button>
              <hr />
              <button>
                <img src={dislikeIcon} alt='Dislike' />
              </button>
            </div>
            <button className={style.share_button}>
              <img src={shareIcon} alt='Share' />
              Share
            </button>
            <button className={style.save_button}>
              <img src={saveIcon} alt='Save' />
              Save
            </button>
          </div>
        </div>

        <div className={style.video_description}>
          <span>
            {parseInt(video.statistics.viewCount).toLocaleString()} views &bull;{' '}
            {moment(video.snippet.publishedAt).format('MMM D, YYYY')}
          </span>
          <p>{video.snippet.description}</p>
        </div>
      </section>
    </div>
  );
};

export default VideoPlayer;
