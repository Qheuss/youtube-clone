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
}

const SideBar = ({ sidebarOpen, setSidebarOpen }: SideBarProps) => {
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
        <div className={style.sideLink}>
          <img src={home} alt='Home' />
          <span>Home</span>
        </div>

        <div className={style.sideLink}>
          <img src={game_icon} alt='Gaming' />
          <span>Gaming</span>
        </div>

        <div className={style.sideLink}>
          <img src={automobiles} alt='Automobiles' />
          <span>Automobiles</span>
        </div>

        <div className={style.sideLink}>
          <img src={sports} alt='Sports' />
          <span>Sports</span>
        </div>

        <div className={style.sideLink}>
          <img src={entertainment} alt='Entertainment' />
          <span>Entertainment</span>
        </div>

        <div className={style.sideLink}>
          <img src={tech} alt='Tech' />
          <span>Tech</span>
        </div>

        <div className={style.sideLink}>
          <img src={music} alt='Music' />
          <span>Music</span>
        </div>

        <div className={style.sideLink}>
          <img src={blogs} alt='Blogs' />
          <span>Blogs</span>
        </div>

        <div className={style.sideLink}>
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
          <span>MrBreast</span>
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
