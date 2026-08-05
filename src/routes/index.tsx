import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import AboutUs from "../pages/about-us/page";
import Portfolio from "../pages/projects/page";
import Services from "../pages/services/page";
import Home from "../pages/home";
import NotFound from "../pages/404/page";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
