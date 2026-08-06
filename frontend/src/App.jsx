import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Announcements from "./pages/Announcements";
import NotFound from "./pages/NotFound";

// Admin
import Dashboard from "./Admin/pages/Dashboard";

function App() {
  return (
    <Routes>

      {/* Public Website */}

      <Route element={<PublicLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/academics" element={<Academics />} />

        <Route path="/admissions" element={<Admissions />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/announcements" element={<Announcements />} />

        <Route path="/contact" element={<Contact />} />

      </Route>

      {/* Admin */}

      <Route path="/admin" element={<AdminLayout />}>

        <Route index element={<Dashboard />} />

        {/* Future Admin Pages */}

        {/* <Route path="announcements" element={<AnnouncementsManager />} /> */}

        {/* <Route path="gallery" element={<GalleryManager />} /> */}

        {/* <Route path="admissions" element={<AdmissionsManager />} /> */}

        {/* <Route path="contacts" element={<ContactManager />} /> */}

        {/* <Route path="settings" element={<SchoolSettings />} /> */}

      </Route>

      {/* 404 */}

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;