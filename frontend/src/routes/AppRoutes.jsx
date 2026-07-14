import { Routes, Route } from "react-router-dom";

// Public Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Academics from "../pages/Academics";
import Gallery from "../pages/Gallery";
import Announcements from "../pages/Announcements";
import AnnouncementView from "../pages/AnnouncementView";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

// Admin Pages
import Dashboard from "../pages/admin/Dashboard";
import ManageAnnouncements from "../pages/admin/ManageAnnouncements";
import ManageGallery from "../pages/admin/ManageGallery";
import ManageHomepage from "../pages/admin/ManageHomepage";
import ManageSettings from "../pages/admin/ManageSettings";
import Profile from "../pages/admin/Profile";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/announcements/:id" element={<AnnouncementView />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route
        path="/admin/announcements"
        element={<ManageAnnouncements />}
      />
      <Route path="/admin/gallery" element={<ManageGallery />} />
      <Route path="/admin/homepage" element={<ManageHomepage />} />
      <Route path="/admin/settings" element={<ManageSettings />} />
      <Route path="/admin/profile" element={<Profile />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;