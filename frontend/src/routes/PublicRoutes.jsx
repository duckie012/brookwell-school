import { Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Academics from "../pages/Academics";
import Admissions from "../pages/Admissions";
import Gallery from "../pages/Gallery";
import Announcements from "../pages/Announcements";
import Contact from "../pages/Contact";

const PublicRoutes = (
  <Route element={<PublicLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/academics" element={<Academics />} />
    <Route path="/admissions" element={<Admissions />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/announcements" element={<Announcements />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
);

export default PublicRoutes;