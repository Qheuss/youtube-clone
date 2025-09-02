import VideoPlayer from '../../components/VideoPlayer';
import VideoRecommendations from '../../components/VideoRecommendations';
import style from './Video.module.scss';

const Video = () => {
  return (
    <>
      <div className={style.video}>
        <VideoPlayer />
        <VideoRecommendations />
      </div>
    </>
  );
};

export default Video;
