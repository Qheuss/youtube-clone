import style from './NavBar.module.scss';
import profile_icon from '../assets/user_profile.jpg';
import { useEffect } from 'react';
import { FaCloudUploadAlt, FaYoutube } from 'react-icons/fa';
import { IoMenu, IoSearch } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import { IoIosNotifications } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavBarProps {
  setSidebarOpen: (open: boolean) => void;
  sidebarOpen: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearchSubmit: () => void;
}

const NavBar = ({
  setSidebarOpen,
  sidebarOpen,
  searchQuery,
  setSearchQuery,
  onSearchSubmit,
}: NavBarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

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
          <input
            type='text'
            placeholder='Search'
            id='search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={
              location.pathname === '/'
                ? (e) => {
                    if (e.key === 'Enter') onSearchSubmit();
                  }
                : (e) => {
                    if (e.key === 'Enter') {
                      navigate('/');
                      onSearchSubmit();
                    }
                  }
            }
          />
          <IoSearch
            onClick={() => {
              if (location.pathname === '/') {
                onSearchSubmit();
              } else {
                navigate('/');
                onSearchSubmit();
              }
            }}
          />
        </div>
      </div>

      <div className={style.navRight + ' flexDiv'}>
        <FaCloudUploadAlt className='md:block hidden' />
        <FaPlus className='md:block hidden' />
        <IoIosNotifications className='md:block hidden' />
        <img className={style.userIcon} src={profile_icon} alt='Profile Icon' />
      </div>
    </nav>
  );
};

export default NavBar;
