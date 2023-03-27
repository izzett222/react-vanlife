import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import HostLayout from './components/HostLayout';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Income from './pages/Income';
import Reviews from './pages/Reviews';
import Van from './pages/Van';
import Vans from './pages/Vans';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/vans" >
            <Route index element={<Vans />} />
            <Route path=':id' element={<Van />} />
          </Route>
          <Route path="/host">
            <Route element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
