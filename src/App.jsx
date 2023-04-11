import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";
import HostLayout from "./components/HostLayout";
import About from "./pages/About";
import Dashboard from "./pages/host/Dashboard";
import Home from "./pages/Home";
import HostVan from "./pages/host/HostVan";
import HostVanPhotos from "./pages/host/HostVanPhotos";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVans from "./pages/host/HostVans";
import Income from "./pages/host/Income";
import NotFound from "./pages/NotFound";
import Reviews from "./pages/host/Reviews";
import Van, { loader as vanLoader} from "./pages/vans/Van";
import VanDetails from "./pages/host/VanDetails";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";

function App() {
  const routes = createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" loader={vansLoader} errorElement={<Error />} element={<Vans />} />
      <Route path="vans/:id" loader={vanLoader} errorElement={<Error />} element={<Van />} />
        <Route path="host" element={<HostLayout />}>
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
      <Route path="*" element={<NotFound />} />
    </Route>
  );
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
