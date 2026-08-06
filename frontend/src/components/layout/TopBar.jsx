import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden lg:block bg-[var(--primary)] text-white">

      <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-sm">

        <div className="flex gap-6">

          <div className="flex items-center gap-2">
            <Phone size={15}/>
            <span>+254 700 000 000</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={15}/>
            <span>info@brookwell.ac.ke</span>
          </div>

        </div>

        <div className="flex items-center gap-2">

          <MapPin size={15}/>
          <span>Nanyuki, Kenya</span>

        </div>

      </div>

    </div>
  );
};

export default TopBar;
