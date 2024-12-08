import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="lg:w-1/5 w-full bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-8">Car Rental</h1>
        <nav>
          <ul className="space-y-6">
            {[
              { name: "Dashboard", icon: "🏠" },
              { name: "Car Rent", icon: "🚗" },
              { name: "Insight", icon: "📊" },
              { name: "Reimburse", icon: "💵" },
              { name: "Inbox", icon: "📥" },
              { name: "Calendar", icon: "📅" },
            ].map((item) => (
              <li
                key={item.name}
                className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 cursor-pointer"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Details Rental Section */}
        <section className="col-span-2 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Details Rental
          </h2>
          {/* Placeholder for Map */}
          <div className="bg-gray-200 h-40 rounded-lg mb-6 flex items-center justify-center">
            <img
              src="Map.jpg"
              alt="Map Placeholder"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          {/* Rental Details */}
          <div className="flex items-center space-x-4 mb-6">
            <img
              src="NissanGTR.png"
              alt="Nissan GT-R"
              className="w- h-20 object-cover rounded-md"
            />
            <div>
              <h3 className="font-semibold text-gray-700">Nissan GT-R</h3>
              <p className="text-sm text-gray-500">Sport Car</p>
              <p className="text-gray-700 mt-2">#9761</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Pick-Up Section */}
            <div>
              <h4 className="text-gray-500 text-sm">Pick-Up</h4>
              <select className="block w-full mt-1 border rounded-md p-2 text-gray-700">
                <option>Kota Semarang</option>
                <option>Jakarta</option>
                <option>Bali</option>
              </select>
              <select className="block w-full mt-2 border rounded-md p-2 text-gray-700">
                <option>20 July 2022</option>
                <option>21 July 2022</option>
              </select>
              <select className="block w-full mt-2 border rounded-md p-2 text-gray-700">
                <option>07:00</option>
                <option>08:00</option>
              </select>
            </div>
            {/* Drop-Off Section */}
            <div>
              <h4 className="text-gray-500 text-sm">Drop-Off</h4>
              <select className="block w-full mt-1 border rounded-md p-2 text-gray-700">
                <option>Kota Semarang</option>
                <option>Jakarta</option>
                <option>Bali</option>
              </select>
              <select className="block w-full mt-2 border rounded-md p-2 text-gray-700">
                <option>20 July 2022</option>
                <option>21 July 2022</option>
              </select>
              <select className="block w-full mt-2 border rounded-md p-2 text-gray-700">
                <option>07:00</option>
                <option>08:00</option>
              </select>
            </div>
          </div>
          {/* Total Rental Price */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800">
              Total Rental Price
            </h4>
            <p className="text-2xl text-blue-600 font-bold">$80.00</p>
          </div>
        </section>

        {/* Right Section */}
        <aside className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Top 5 Car Rental
          </h2>
          {/* Placeholder for Chart */}
          <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center">
            <img
              src="Chart.jpg"
              alt="Chart Placeholder"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          {/* Recent Transactions */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Transactions
            </h2>
            {/* Placeholder for Recent Transactions */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <img
                src="Transactions.jpg"
                alt="Recent Transactions Placeholder"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Dashboard;
