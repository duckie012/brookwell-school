import { FaBell } from "react-icons/fa";

const Topbar = () => {

    return (

        <header className="bg-white dark:bg-gray-800 shadow px-8 py-4 flex justify-between items-center">

            <h2 className="font-bold text-2xl">

                Admin Dashboard

            </h2>

            <div className="flex items-center gap-6">

                <FaBell className="text-xl cursor-pointer"/>

                <img

                    src="https://i.pravatar.cc/40"

                    className="rounded-full"

                    alt="profile"

                />

            </div>

        </header>

    );

};

export default Topbar;