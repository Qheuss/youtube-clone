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
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');

  const handleSearchSubmit = () => {
    setSubmittedQuery(searchQuery);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
      />
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
            element={
              <Home
                sidebarOpen={sidebarOpen}
                category={category}
                searchQuery={submittedQuery}
              />
            }
          />
          <Route path='/:categoryId/:videoId' element={<Video />} />
          <Route path='/:channelId' element={<Channel />} />
          <Route
            path='/*'
            element={
              <Home
                sidebarOpen={sidebarOpen}
                category={category}
                searchQuery={submittedQuery}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
