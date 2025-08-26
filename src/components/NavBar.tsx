import style from './NavBar.module.scss';
import menu_icon from '../assets/menu.png';
import logo from '../assets/logo.png';
import search_icon from '../assets/search.png';
import upload_icon from '../assets/upload.png';
import more_icon from '../assets/more.png';
import notification_icon from '../assets/notification.png';
import profile_icon from '../assets/jack.png';

interface NavBarProps {
  setSidebarOpen: (open: boolean) => void;
  sidebarOpen: boolean;
}

const NavBar = ({ setSidebarOpen, sidebarOpen }: NavBarProps) => {
  return (
    <nav className={style.navBar + ' flexDiv'}>
      <div className={style.navLeft + ' flexDiv'}>
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

      <div className={style.navMiddle + ' flexDiv'}>
        <div className={style.searchBox + ' flexDiv'}>
          <input type='text' placeholder='Search' id='search' />
          <img src={search_icon} alt='Search Icon' />
        </div>
      </div>

      <div className={style.navRight + ' flexDiv'}>
        <img src={upload_icon} alt='Upload Icon' />
        <img src={more_icon} alt='More Icon' />
        <img src={notification_icon} alt='Notification Icon' />
        <img className={style.userIcon} src={profile_icon} alt='Profile Icon' />
      </div>
    </nav>
  );
};

export default NavBar;
