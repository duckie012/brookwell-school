import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { navigation } from "../../config/navigation";
import { school } from "../../config/school";

import ThemeToggle from "../ui/ThemeToggle";
import Button from "../ui/Button";

// import logo from "../../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto">

          {/* ================= Top Bar ================= */}

          <div className="hidden lg:flex justify-between items-center px-6 py-2 bg-purple-600 text-white text-sm">

            <div className="flex items-center gap-8">

              <span>📍 {school.location}</span>

              <span>{school.motto}</span>

            </div>

            <div className="flex items-center gap-2">

              <Phone size={15} />

              <span>{school.phone}</span>

            </div>

          </div>

          {/* ================= Main Navigation ================= */}

          <div className="flex justify-between items-center px-6 py-4">

            {/* Logo */}

            <NavLink
              to="/"
              className="flex items-center gap-4"
            >
              {/* Replace with your logo later */}

              {/* <img
                src={logo}
                alt={school.name}
                className="w-14 h-14 rounded-full object-cover"
              /> */}

              <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">

                B

              </div>

              <div>

                <h2 className="text-xl font-bold text-purple-700 dark:text-purple-400">

                  {school.name}

                </h2>

                <p className="text-sm text-gray-600 dark:text-gray-400">

                  {school.motto}

                </p>

              </div>

            </NavLink>

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex items-center gap-8">

              {navigation.map((item) => (

                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative font-medium transition-all duration-300 ${
                      isActive
                        ? "text-purple-700 dark:text-purple-400"
                        : "text-gray-700 dark:text-gray-200 hover:text-purple-700"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <div className="flex flex-col items-center">

                      <span>{item.name}</span>

                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="mt-1 h-1 w-full rounded-full bg-purple-600"
                        />
                      )}

                    </div>
                  )}

                </NavLink>

              ))}

            </nav>

            {/* Desktop Right Side */}

            <div className="hidden lg:flex items-center gap-4">

              <ThemeToggle />

              <Button to="/admissions">

                Apply Now

              </Button>

            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 dark:text-white"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>

        </div>

        {/* ================= Mobile Navigation ================= */}

        <AnimatePresence>

          {isOpen && (

            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white dark:bg-gray-950 shadow-xl border-t border-gray-100 dark:border-gray-800"
            >

              <div className="flex flex-col gap-6 px-8 py-8">

                {navigation.map((item) => (

                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-purple-700 font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:text-purple-700"
                    }
                  >
                    {item.name}
                  </NavLink>

                ))}

                <ThemeToggle />

                <Button
                  to="/admissions"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </Button>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </header>

      {/* Spacer because navbar is fixed */}

      <div className="h-24 lg:h-32"></div>
    </>
  );
}

export default Navbar;