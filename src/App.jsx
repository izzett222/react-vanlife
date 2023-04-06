import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import About from './pages/About';
import Home from './pages/Home';
import Van from './pages/vans/Van';
import Vans from './pages/vans/Vans';
import HostLayout from './components/HostLayout';
import Dashboard from './pages/Dashboard';
import HostVan from './pages/HostVan';
import HostVanPhotos from './pages/HostVanPhotos';
import HostVanPricing from './pages/HostVanPricing';
import HostVans from './pages/HostVans';
import Income from './pages/Income';
import Reviews from './pages/Reviews';

import VanDetails from './pages/VanDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path='vans/:id' element={<Van />} />
          <Route path="host">
            <Route element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path='vans/:id' element={<HostVan />}>
                <Route index element={<VanDetails />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
