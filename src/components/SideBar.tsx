import style from './SideBar.module.scss';
import menu_icon from '../assets/menu.png';
import logo from '../assets/logo.png';
import home from '../assets/home.png';
import game_icon from '../assets/game_icon.png';
import automobiles from '../assets/automobiles.png';
import sports from '../assets/sports.png';
import entertainment from '../assets/entertainment.png';
import tech from '../assets/tech.png';
import music from '../assets/music.png';
import blogs from '../assets/blogs.png';
import news from '../assets/news.png';
import jack from '../assets/jack.png';
import simon from '../assets/simon.png';
import tom from '../assets/tom.png';
import megan from '../assets/megan.png';
import cameron from '../assets/cameron.png';

interface SideBarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  category: number;
  setCategory: (category: number) => void;
}

const SideBar = ({
  sidebarOpen,
  setSidebarOpen,
  category,
  setCategory,
}: SideBarProps) => {
  return (
    <section
      style={{
        translate: sidebarOpen ? '0' : '-240px',
      }}
      className={style.sideBar}
    >
      <div className={style.navLogo + ' flexDiv'}>
        <img
          className={style.menuIcon}
          src={menu_icon}
          alt='Menu Icon'
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
        <a href='/'>
          <img className={style.logo} src={logo} alt='Logo' />
        </a>
      </div>

      <div className={style.sortLinks}>
        <div
          className={
            style.sideLink + ' ' + (category === 0 ? 'bg-black/10' : '')
          }
          onClick={() => setCategory(0)}
        >
          <img src={home} alt='Home' />
          <span>Home</span>
        </div>

        <div
          className={
            style.sideLink + ' ' + (category === 20 ? 'bg-black/10' : '')
          }
          onClick={() => setCategory(20)}
        >
          <img src={game_icon} alt='Gaming' />
          <span>Gaming</span>
        </div>

        <div
          className={
            style.sideLink + ' ' + (category === 10 ? 'bg-black/10' : '')
          }
          onClick={() => setCategory(10)}
        >
          <img src={automobiles} alt='Music' />
          <span>Music</span>
        </div>

        <div
          className={
            style.sideLink + ' ' + (category === 17 ? 'bg-black/10' : '')
          }
          onClick={() => setCategory(17)}
        >
          <img src={sports} alt='Sports' />
          <span>Sports</span>
        </div>

        <div
          className={
            style.sideLink + ' ' + (category === 15 ? 'bg-black/10' : '')
          }
          onClick={() => setCategory(15)}
        >
          <img src={entertainment} alt='Pets & Animals' />
          <span>Pets & Animals</span>
        </div>

        <div
          className={
            style.sideLink + ' ' + (category === 28 ? 'bg-black/10' : '')
          }
          onClick={() => setCategory(28)}
        >
          <img src={tech} alt='Science & Technology' />
          <span>Science & Technology</span>
        </div>

        <div
          className={
            style.sideLink + ' ' + (category === 23 ? 'bg-black/10' : '')
          }
          onClick={() => setCategory(23)}
        >
          <img src={music} alt='Comedy' />
          <span>Comedy</span>
        </div>

        <div
          className={
            style.sideLink + ' ' + (category === 22 ? 'bg-black/10' : '')
          }
          onClick={() => setCategory(22)}
        >
          <img src={blogs} alt='Blogs' />
          <span>Blogs</span>
        </div>

        <div
          className={
            style.sideLink + ' ' + (category === 25 ? 'bg-black/10' : '')
          }
          onClick={() => setCategory(25)}
        >
          <img src={news} alt='News' />
          <span>News</span>
        </div>

        <hr />
      </div>

      <div className={style.subscribedList}>
        <h3>Subscriptions</h3>

        <div className={style.sideLink}>
          <img src={jack} alt='Jack' />
          <span>PewPiePie</span>
        </div>

        <div className={style.sideLink}>
          <img src={simon} alt='Simon' />
          <span>MrBest</span>
        </div>

        <div className={style.sideLink}>
          <img src={tom} alt='Tom' />
          <span>Austin Pieper</span>
        </div>

        <div className={style.sideLink}>
          <img src={megan} alt='Megan' />
          <span>2-Hours Crafts</span>
        </div>

        <div className={style.sideLink}>
          <img src={cameron} alt='Cameron' />
          <span>Skouzie</span>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
