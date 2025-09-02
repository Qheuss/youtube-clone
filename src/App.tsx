import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import { useState } from 'react';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Channel from './pages/Channel/Channel';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [category, setCategory] = useState(0);

  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <SideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        category={category}
        setCategory={setCategory}
      />
      <main className='flex-1'>
        <Routes>
          <Route
            path='/'
            element={<Home sidebarOpen={sidebarOpen} category={category} />}
          />
          <Route path='/:categoryId/:videoId' element={<Video />} />
          <Route path='/:channelId' element={<Channel />} />
          <Route
            path='/*'
            element={<Home sidebarOpen={sidebarOpen} category={category} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
