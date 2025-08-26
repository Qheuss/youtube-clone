import SideBar from '../../components/SideBar';
import style from './Home.module.scss';

interface HomeProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Home = ({ sidebarOpen, setSidebarOpen }: HomeProps) => {
  return (
    <div className={style.homePage}>
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
};

export default Home;
