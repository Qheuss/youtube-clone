import Feed from '../../components/Feed';
import style from './Home.module.scss';

interface HomeProps {
  sidebarOpen: boolean;
  category: number;
  searchQuery: string;
}

const Home = ({ sidebarOpen, category, searchQuery }: HomeProps) => {
  return (
    <div className={style.homePage}>
      <div
        className={
          style.feedContainer + (sidebarOpen ? style.largeContainer : '')
        }
      >
        <Feed
          sidebarOpen={sidebarOpen}
          category={category}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
};

export default Home;
