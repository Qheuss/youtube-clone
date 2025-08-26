import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <main className='flex-1'>
        <Routes>
          <Route
            path='/'
            element={
              <Home setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            }
          />
          <Route path='/video/:categoryId/:videoId' element={<Video />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
