import style from './VideoPlayer.module.scss';
import likeIcon from '../assets/like.png';
import dislikeIcon from '../assets/dislike.png';
import shareIcon from '../assets/share.png';
import saveIcon from '../assets/save.png';
import { Link, useParams } from 'react-router-dom';
import { useVideo } from '../hooks/useVideo';
import moment from 'moment';
import { useChannel } from '../hooks/useChannel';

const VideoPlayer = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const { video, loading } = useVideo(videoId!.toString());
  const { channel, loading: channelLoading } = useChannel(
    video?.snippet.channelId ?? ''
  );

  if (loading || channelLoading) return <p>Loading…</p>;
  if (!video) return <p>Unknown video</p>;

  return (
    <div className={style.video_player}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
      ></iframe>
      <section className={style.video_details}>
        <h1>{video.snippet.title}</h1>
        <div className={style.video_info}>
          <div className={style.channel_info}>
            <Link
              to={`/${video.snippet.channelId}`}
              className={style.channel_button}
            >
              <img
                src={channel?.snippet.thumbnails.medium.url}
                alt='Channel'
                className={style.channel_avatar}
              />
              <div className={style.channel_details}>
                <h3>{channel?.snippet.title}</h3>
                <p>
                  {Number(channel?.statistics.subscriberCount) >= 1000000
                    ? (
                        Number(channel?.statistics.subscriberCount) / 1000000
                      ).toFixed(0) + 'M'
                    : Number(channel?.statistics.subscriberCount) >= 1000
                    ? (
                        Number(channel?.statistics.subscriberCount) / 1000
                      ).toFixed(0) + 'K'
                    : Number(channel?.statistics.subscriberCount)}{' '}
                  subscribers
                </p>
              </div>
            </Link>
            <a
              href={`https://www.youtube.com/channel/${channel?.id}`}
              target='_blank'
              className={style.subscribe_button}
            >
              Subscribe
            </a>
          </div>

          <div className={style.video_actions}>
            <div className={style.like_buttons}>
              <button>
                <img src={likeIcon} alt='Like' />
                <span>
                  {Number(video.statistics.likeCount) >= 1000000
                    ? (Number(video.statistics.likeCount) / 1000000).toFixed(
                        0
                      ) + 'M'
                    : Number(video.statistics.likeCount) >= 1000
                    ? (Number(video.statistics.likeCount) / 1000).toFixed(0) +
                      'K'
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
          <p>{video.snippet.description.slice(0, 250)}...</p>
        </div>
        <div className={style.comments_section}>
          <span className={style.comment_count}>
            {parseInt(video.statistics.commentCount).toLocaleString()} comments
          </span>
        </div>
      </section>
    </div>
  );
};

export default VideoPlayer;
