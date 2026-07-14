import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { navigation } from "../../config/navigation";
import { school } from "../../config/school";
import ThemeToggle from "../common/ThemeToggle";
import Button from "../ui/Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-950/90 shadow-md">

      <div className="max-w-7xl mx-auto">

        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center px-6 py-2 bg-purple-700 text-white text-sm">

          <p>📍 Nanyuki, Kenya</p>

          <div className="flex items-center gap-6">

            <span>Learning is Fun.</span>

            <div className="flex items-center gap-2">

              <Phone size={16} />

              <span>+254 XXX XXX XXX</span>

            </div>

          </div>

        </div>

        {/* Main Navbar */}

        <div className="flex items-center justify-between px-6 py-4">

          {/* Logo */}

          <NavLink to="/" className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-purple-700 flex items-center justify-center text-white text-xl font-bold">

              B

            </div>

            <div>

              <h1 className="font-bold text-xl text-purple-700">
                {school.name}
              </h1>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {school.motto}
              </p>

            </div>

          </NavLink>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex gap-8">

            {navigation.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-700 font-semibold"
                    : "text-gray-700 dark:text-gray-200 hover:text-purple-700 transition"
                }
              >
                {item.name}
              </NavLink>

            ))}

          </nav>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-4">

            <ThemeToggle />

            <Button to="/contact">
              Admissions
            </Button>

          </div>

          {/* Mobile Button */}

          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 shadow-lg"
          >

            <div className="flex flex-col p-6 gap-5">

              {navigation.map((item) => (

                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="font-medium hover:text-purple-700"
                >
                  {item.name}
                </NavLink>

              ))}

              <ThemeToggle />

              <Button to="/contact">
                Admissions
              </Button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}

export default Navbar;