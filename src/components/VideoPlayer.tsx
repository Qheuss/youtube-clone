import style from './VideoPlayer.module.scss';
import video1 from '../assets/video.mp4';
import likeIcon from '../assets/like.png';
import dislikeIcon from '../assets/dislike.png';
import shareIcon from '../assets/share.png';
import saveIcon from '../assets/save.png';
import user_profile from '../assets/user_profile.jpg';

const VideoPlayer = () => {
  return (
    <div className={style.video_player}>
      <video src={video1} controls autoPlay={false} />
      <section className={style.video_details}>
        <h1>Video Title</h1>
        <div className={style.video_info}>
          <div className={style.channel_info}>
            <button className={style.channel_button}>
              <img
                src={user_profile}
                alt='Channel'
                className={style.channel_avatar}
              />
              <div className={style.channel_details}>
                <h3>Channel Name</h3>
                <p>1M subscribers</p>
              </div>
            </button>
            <button className={style.subscribe_button}>Subscribe</button>
          </div>

          <div className={style.video_actions}>
            <div className={style.like_buttons}>
              <button>
                <img src={likeIcon} alt='Like' />
                <span>123K</span>
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
          <span>1,234,567 views &bull; Jan 1, 2023</span>
          <p>
            This is a sample video description. It provides information about
            the video content, links, and other relevant details.
          </p>
        </div>
      </section>
    </div>
  );
};

export default VideoPlayer;
