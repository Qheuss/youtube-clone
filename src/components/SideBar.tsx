import style from './SideBar.module.scss';
import jack from '../assets/jack.png';
import simon from '../assets/simon.png';
import tom from '../assets/tom.png';
import megan from '../assets/megan.png';
import cameron from '../assets/cameron.png';
import { FaYoutube } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { IoIosMusicalNotes, IoLogoGameControllerA } from 'react-icons/io';
import {
  MdBiotech,
  MdOutlinePets,
  MdSportsHandball,
  MdTheaterComedy,
} from 'react-icons/md';
import { ImBlog } from 'react-icons/im';
import { HiNewspaper } from 'react-icons/hi';
import { IoMenu } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const location = useLocation();
  const navigate = useNavigate();

  const categories = [
    { id: 0, icon: <GoHomeFill />, label: 'Home' },
    { id: 20, icon: <IoLogoGameControllerA />, label: 'Gaming' },
    { id: 10, icon: <IoIosMusicalNotes />, label: 'Music' },
    { id: 17, icon: <MdSportsHandball />, label: 'Sports' },
    { id: 15, icon: <MdOutlinePets />, label: 'Pets & Animals' },
    { id: 28, icon: <MdBiotech />, label: 'Science & Technology' },
    { id: 23, icon: <MdTheaterComedy />, label: 'Comedy' },
    { id: 22, icon: <ImBlog />, label: 'Blogs' },
    { id: 25, icon: <HiNewspaper />, label: 'News' },
  ];

  return (
    <section
      style={{
        translate: sidebarOpen ? '0' : '-240px',
      }}
      className={style.sideBar}
    >
      <div className={style.navLogo + ' flexDiv'}>
        <IoMenu
          className={style.menuIcon}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
        <a href='/' className={style.logo}>
          <FaYoutube /> Youte Tube
        </a>
      </div>

      <div className={style.sortLinks}>
        {categories.map(({ id, icon, label }) => (
          <div
            key={id}
            className={
              style.sideLink + ' ' + (category === id ? 'bg-black/10' : '')
            }
            onClick={
              location.pathname === '/'
                ? () => setCategory(id)
                : () => {
                    navigate('/');
                    setCategory(id);
                  }
            }
          >
            {icon}
            <span>{label}</span>
          </div>
        ))}

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
