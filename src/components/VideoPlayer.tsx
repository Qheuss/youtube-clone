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
        <div className={style.video_info}>
          <h2>Video Title</h2>
          <div className='flex justify-between'>
            <div className={style.channel_info}>
              <img
                src={user_profile}
                alt='Channel'
                className={style.channel_avatar}
              />
              <div className={style.channel_details}>
                <h3>Channel Name</h3>
                <p>1M subscribers</p>
              </div>
              <button className={style.subscribe_button}>Subscribe</button>
            </div>

            <div className={style.video_actions}>
              <button>
                <img src={likeIcon} alt='Like' />
                123K
              </button>
              <button>
                <img src={dislikeIcon} alt='Dislike' />
                Dislike
              </button>
              <button>
                <img src={shareIcon} alt='Share' />
                Share
              </button>
              <button>
                <img src={saveIcon} alt='Save' />
                Save
              </button>
            </div>
          </div>
        </div>

        <div className={style.video_description}>
          <h4>1,234,567 views &bull; Jan 1, 2023</h4>
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
