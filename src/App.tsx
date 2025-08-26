import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import { useState } from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <NavBar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <Routes>
        <Route
          path='/'
          element={
            <Home setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
          }
        />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
