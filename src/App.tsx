import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
