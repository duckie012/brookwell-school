import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

import { school } from "../../config/school";

function SocialIcon({ children }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 transition hover:bg-purple-600">
      {children}
    </span>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* School */}

          <div>

            <h2 className="text-3xl font-bold text-white">

              {school.name}

            </h2>

            <p className="mt-5 text-purple-400 italic">

              {school.motto}

            </p>

            <p className="mt-5 leading-8">

              Empowering learners through quality education,
              strong values and holistic development.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white">

              Quick Links

            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link className="hover:text-purple-400 transition" to="/">
                Home
              </Link>

              <Link className="hover:text-purple-400 transition" to="/about">
                About
              </Link>

              <Link className="hover:text-purple-400 transition" to="/academics">
                Academics
              </Link>

              <Link className="hover:text-purple-400 transition" to="/admissions">
                Admissions
              </Link>

              <Link className="hover:text-purple-400 transition" to="/gallery">
                Gallery
              </Link>

              <Link className="hover:text-purple-400 transition" to="/announcements">
                Announcements
              </Link>

              <Link className="hover:text-purple-400 transition" to="/contact">
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white">

              Contact Us

            </h3>

            <div className="space-y-5 mt-6">

              <div className="flex items-start gap-3">

                <MapPin
                  size={20}
                  className="text-purple-400 mt-1"
                />

                <span>

                  {school.location}

                </span>

              </div>

              <div className="flex items-start gap-3">

                <Phone
                  size={20}
                  className="text-purple-400 mt-1"
                />

                <span>

                  {school.phone}

                </span>

              </div>

              <div className="flex items-start gap-3">

                <Mail
                  size={20}
                  className="text-purple-400 mt-1"
                />

                <span>

                  {school.email}

                </span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold text-white">

              Follow Us

            </h3>

            <p className="mt-5 text-gray-400">

              Stay connected with our school through our social platforms.

            </p>

            <div className="flex gap-4 mt-8">

              <a
                href={school.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 transition hover:bg-purple-600"
                aria-label="Facebook"
              >
                <SocialIcon>
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                    <path d="M13.5 20v-7h2.3l.4-2.7h-2.7V3.8c0-.8.2-1.3 1.3-1.3h1.4V.1c-.2 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.7v2.1H8.2v2.7h2.3v7h3Z" />
                  </svg>
                </SocialIcon>
              </a>

              <a
                href={school.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 transition hover:bg-purple-600"
                aria-label="Instagram"
              >
                <SocialIcon>
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </SocialIcon>
              </a>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-center md:text-left">

            © {new Date().getFullYear()} {school.name}. All rights reserved.

          </p>

          <p className="text-center md:text-right">

            Powered by{" "}

            <span className="text-purple-400 font-semibold">

              MK Digital Solutions

            </span>

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;