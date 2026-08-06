import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-950">

      {/* Sidebar */}

      <aside className="w-64 hidden lg:flex flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">

        <div className="h-20 flex items-center justify-center border-b border-gray-200 dark:border-gray-800">

          <h1 className="text-2xl font-bold text-purple-700">
            Brookwell Admin
          </h1>

        </div>

        <nav className="flex-1 p-6">

          <p className="text-gray-500 dark:text-gray-400">
            Sidebar coming soon...
          </p>

        </nav>

      </aside>

      {/* Main Content */}

      <div className="flex-1 flex flex-col">

        {/* Header */}

        <header className="h-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center px-8">

          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Admin Dashboard
          </h2>

        </header>

        {/* Page Content */}

        <main className="flex-1 p-8 overflow-auto">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default AdminLayout;