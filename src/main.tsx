import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './normalize.css';
import './App.css';
import Blog from './blog/Blog.tsx';
import Blog20250912 from './blog/20250912.tsx';
import Home from './Home.tsx';

// See https://reactrouter.com/start/declarative/routing for help on routing.

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/20250912" element={<Blog20250912 />} />
    </Routes>
  </BrowserRouter>,
);
