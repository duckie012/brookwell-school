import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 px-6">

      <div className="w-full max-w-md">

        <Outlet />

      </div>

    </div>
  );
};

export default AuthLayout;