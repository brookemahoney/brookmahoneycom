import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './normalize.css';
import './App.css';
import Home from './Home.tsx';

// See https://reactrouter.com/start/declarative/routing for help on routing.

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </BrowserRouter>,
);
