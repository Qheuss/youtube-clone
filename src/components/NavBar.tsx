import style from './NavBar.module.scss';
import profile_icon from '../assets/user_profile.jpg';
import { useEffect } from 'react';
import { FaCloudUploadAlt, FaYoutube } from 'react-icons/fa';
import { IoMenu, IoSearch } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import { IoIosNotifications } from 'react-icons/io';

interface NavBarProps {
  setSidebarOpen: (open: boolean) => void;
  sidebarOpen: boolean;
}

const NavBar = ({ setSidebarOpen, sidebarOpen }: NavBarProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const navElement = document.querySelector('nav');
      if (navElement) {
        if (window.scrollY > 0) {
          navElement.style.setProperty(
            'box-shadow',
            `0 1px 2px rgba(0, 0, 0, 0.1)`
          );
        } else {
          navElement.style.removeProperty('box-shadow');
        }
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={style.navBar + ' flexDiv'}>
      <div className={style.navLeft + ' flexDiv'}>
        <IoMenu
          className={style.menuIcon}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />

        <a href='/' className={style.logo}>
          <FaYoutube /> Youte Tube
        </a>
      </div>

      <div className={style.navMiddle + ' flexDiv'}>
        <div className={style.searchBox + ' flexDiv'}>
          <input type='text' placeholder='Search' id='search' />
          <IoSearch />
        </div>
      </div>

      <div className={style.navRight + ' flexDiv'}>
        <FaCloudUploadAlt />
        <FaPlus />
        <IoIosNotifications />
        <img className={style.userIcon} src={profile_icon} alt='Profile Icon' />
      </div>
    </nav>
  );
};

export default NavBar;
