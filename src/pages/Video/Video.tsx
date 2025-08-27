import VideoPlayer from '../../components/VideoPlayer';
import VideoRecommendations from '../../components/VideoRecommendations';
import style from './Video.module.scss';

interface VideoProps {
  sidebarOpen: boolean;
}

const Video = ({ sidebarOpen }: VideoProps) => {
  return (
    <>
      <div
        style={{ minWidth: sidebarOpen ? '240px' : '0' }}
        className={style.sidebar}
      ></div>
      <div className={style.video + ' !container !mx-auto'}>
        <VideoPlayer />
        <VideoRecommendations />
      </div>
    </>
  );
};

export default Video;
