import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import { school } from "../../config/school";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          <div>

            <h2 className="text-2xl font-bold text-purple-400">
              {school.name}
            </h2>

            <p className="mt-4 text-gray-400">
              {school.motto}
            </p>

          </div>

          <div>

            <h3 className="font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Home</li>
              <li>About</li>
              <li>Academics</li>
              <li>Gallery</li>

            </ul>

          </div>

          <div>

            <h3 className="font-bold mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">

              <p className="flex items-center gap-2">
                <MapPin size={18} />
                Nanyuki, Kenya
              </p>

              <p className="flex items-center gap-2">
                <Phone size={18} />
                +254 XXX XXX XXX
              </p>

              <p className="flex items-center gap-2">
                <Mail size={18} />
                info@brookwell.ac.ke
              </p>

            </div>

          </div>

          <div>

            <h3 className="font-bold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-5">

              <FaFacebookF size={22} />
              
              <FaInstagram size={22} />

            </div>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">

          © {new Date().getFullYear()} {school.name}. All Rights Reserved.

          <br />

          <span className="text-purple-400">
            Powered by MK Digital Solutions
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;