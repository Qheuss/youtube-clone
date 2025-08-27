import Feed from '../../components/Feed';
import style from './Home.module.scss';

interface HomeProps {
  sidebarOpen: boolean;
  category: number;
}

const Home = ({ sidebarOpen, category }: HomeProps) => {
  return (
    <div className={style.homePage}>
      <div
        className={
          style.feedContainer + (sidebarOpen ? style.largeContainer : '')
        }
      >
        <Feed sidebarOpen={sidebarOpen} category={category} />
      </div>
    </div>
  );
};

export default Home;
