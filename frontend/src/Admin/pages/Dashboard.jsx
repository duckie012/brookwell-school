const Dashboard = () => {

    return (

        <div>

            <h1 className="text-4xl font-bold mb-8">

                Welcome Back 👋

            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <div className="bg-white rounded-xl shadow p-6">

                    <h2>Total Students</h2>

                    <p className="text-5xl font-bold mt-4">

                        542

                    </p>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <h2>Announcements</h2>

                    <p className="text-5xl font-bold mt-4">

                        18

                    </p>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <h2>Gallery Photos</h2>

                    <p className="text-5xl font-bold mt-4">

                        243

                    </p>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <h2>Unread Messages</h2>

                    <p className="text-5xl font-bold mt-4">

                        9

                    </p>

                </div>

            </div>

        </div>

    );

};

export default Dashboard;