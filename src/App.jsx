import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HostLayout from "./components/HostLayout";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import HostVan from "./pages/HostVan";
import HostVanPhotos from "./pages/HostVanPhotos";
import HostVanPricing from "./pages/HostVanPricing";
import HostVans from "./pages/HostVans";
import Income from "./pages/Income";
import NotFound from "./pages/NotFound";
import Reviews from "./pages/Reviews";
import Van from "./pages/Van";
import VanDetails from "./pages/VanDetails";
import Vans from "./pages/Vans";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<Van />} />
          <Route path="host">
            <Route element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVan />}>
                <Route index element={<VanDetails />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
