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
import Dashboard, { loader as dashboardLoader } from "./pages/host/Dashboard";
import Home from "./pages/Home";
import HostVan, { loader as hostVanLoader } from "./pages/host/HostVan";
import HostVanPhotos, {
  loader as hostVanPhotosLoader,
} from "./pages/host/HostVanPhotos";
import HostVanPricing, {
  loader as hostVanPricingLoader,
} from "./pages/host/HostVanPricing";
import HostVans, { loader as hostVansLoader } from "./pages/host/HostVans";
import Income, { loader as incomeLoader } from "./pages/host/Income";
import Login, {
  action as loginAction,
  loader as loginLoader,
} from "./pages/Login";
import NotFound from "./pages/NotFound";
import Reviews, { loader as reviewLoader } from "./pages/host/Reviews";
import Van, { loader as vanLoader } from "./pages/vans/Van";
import VanDetails, {
  loader as hostVanDetailsLoader,
} from "./pages/host/VanDetails";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";

function App() {
  const routes = createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route
        path="login"
        loader={loginLoader}
        action={loginAction}
        element={<Login />}
      />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        loader={vansLoader}
        errorElement={<Error />}
        element={<Vans />}
      />
      <Route
        path="vans/:id"
        loader={vanLoader}
        errorElement={<Error />}
        element={<Van />}
      />

      <Route path="host" element={<HostLayout />}>
        <Route index loader={dashboardLoader} element={<Dashboard />} />
        <Route path="income" loader={incomeLoader} element={<Income />} />
        <Route path="reviews" loader={reviewLoader} element={<Reviews />} />
        <Route
          path="vans"
          loader={hostVansLoader}
          errorElement={<Error />}
          element={<HostVans />}
        />
        <Route
          path="vans/:id"
          loader={hostVanLoader}
          errorElement={<Error />}
          element={<HostVan />}
        >
          <Route index loader={hostVanDetailsLoader} element={<VanDetails />} />
          <Route
            path="pricing"
            loader={hostVanPricingLoader}
            element={<HostVanPricing />}
          />
          <Route
            path="photos"
            loader={hostVanPhotosLoader}
            element={<HostVanPhotos />}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  );
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
