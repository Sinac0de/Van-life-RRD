import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as VanDetailLoader } from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Dashboard, { loader as dashboardLoader } from "./pages/Host/Dashboard";
import Income, { loader as incomeLoader } from "./pages/Host/Income";
import Reviews, { loader as reviewsLoader } from "./pages/Host/Reviews";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/Host/HostVanDetail";
import HostVanInfo, {
  loader as hostVanInfoLoader,
} from "./pages/Host/HostVanInfo";
import HostVanPhotos, {
  loader as hostVanPhotosLoader,
} from "./pages/Host/HostVanPhotos";
import HostVanPricing, {
  loader as hostVanPricingLoader,
} from "./pages/Host/HostVanPricing";
import NotFound from "./pages/NotFound";

import "./server";
import "./App.css";
import ErrorElement from "./components/ErrorElement";
import Login from "./pages/login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<ErrorElement />}
      />
      <Route path="login" element={<Login />} />
      <Route path="vans/:id" element={<VanDetail />} loader={VanDetailLoader} />

      <Route path="/host" element={<HostLayout />}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route path="income" element={<Income />} loader={incomeLoader} />
        <Route path="reviews" element={<Reviews />} loader={reviewsLoader} />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />

        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
        >
          <Route index element={<HostVanInfo />} loader={hostVanInfoLoader} />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={hostVanPhotosLoader}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={hostVanPricingLoader}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
