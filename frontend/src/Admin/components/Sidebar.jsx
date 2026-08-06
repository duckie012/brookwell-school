import {
    FaHome,
    FaBullhorn,
    FaImages,
    FaEnvelope,
    FaCog,
    FaUser
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const menu = [

        {
            name: "Dashboard",
            path: "/admin",
            icon: <FaHome />
        },

        {
            name: "Announcements",
            path: "/admin/announcements",
            icon: <FaBullhorn />
        },

        {
            name: "Gallery",
            path: "/admin/gallery",
            icon: <FaImages />
        },

        {
            name: "Messages",
            path: "/admin/messages",
            icon: <FaEnvelope />
        },

        {
            name: "School Settings",
            path: "/admin/settings",
            icon: <FaCog />
        },

        {
            name: "Profile",
            path: "/admin/profile",
            icon: <FaUser />
        }

    ];

    return (

        <aside className="w-72 bg-purple-900 text-white">

            <div className="p-6">

                <h1 className="text-2xl font-bold">

                    Brookwell

                </h1>

                <p className="text-sm">

                    Harmony School

                </p>

            </div>

            <nav>

                {

                    menu.map((item) => (

                        <NavLink

                            key={item.name}

                            to={item.path}

                            className={({ isActive }) =>
                                `flex items-center gap-4 px-6 py-4 hover:bg-purple-700 ${
                                    isActive ? "bg-purple-700" : ""
                                }`
                            }

                        >

                            {item.icon}

                            {item.name}

                        </NavLink>

                    ))

                }

            </nav>

        </aside>

    );

};

export default Sidebar;