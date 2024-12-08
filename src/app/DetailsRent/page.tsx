import React from "react";
import Link from "next/link";

const CarDetails = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Stanton",
      date: "25-06-2023",
      rating: 5,
      review:
        "Amazing car! It was in perfect condition, and the booking process was super easy.",
      image: "Avatar.png",
    },
    {
      id: 2,
      name: "Skylar Dias",
      date: "20-06-2023",
      rating: 4.5,
      review:
        "Loved the experience. Nissan GT-R offers a smooth ride. Highly recommend!",
      image: "SkylarDias.jpg",
    },
  ];

  const recommendedCars = [
    { id: 1, name: "Koenigsegg", price: "$97.00/day", image: "Koeniggsegs.png" },
    { id: 2, name: "Rolls-Royce", price: "$96.00/day", image: "RollsRoyce.png" },
    { id: 3, name: "Nissan GT-R", price: "$80.00/day", image: "NissanGTR.png" },
    { id: 4, name: "BMW X5", price: "$85.00/day", image: "BMWX6.jpg" },
    { id: 5, name: "Mercedes C-Class", price: "$90.00/day", image: "C-Class.png" },
    { id: 6, name: "Audi Q7", price: "$88.00/day", image: "AudiQ7.webp" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white p-4 md:p-6 shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">Filter</h2>
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-700">Type</h3>
          <ul className="mt-4 space-y-2">
            {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
              (type) => (
                <li key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    id={type}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    htmlFor={type}
                    className="ml-2 text-gray-700 font-medium"
                  >
                    {type}
                  </label>
                </li>
              )
            )}
          </ul>
        </div>
        {/* Other Filters */}
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-700">Capacity</h3>
          <ul className="mt-4 space-y-2">
            {["2 Person", "4 Person", "6 Person", "8 Person"].map((capacity) => (
              <li key={capacity} className="flex items-center">
                <input
                  type="checkbox"
                  id={capacity}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor={capacity}
                  className="ml-2 text-gray-700 font-medium"
                >
                  {capacity}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-700">Price</h3>
          <div className="mt-4">
            <input
              type="range"
              min="0"
              max="100"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring focus:ring-blue-300"
            />
            <p className="text-gray-600 mt-2">Max: $100.00</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-4 md:p-6">
        {/* Car Details */}
        <section className="bg-white p-4 md:p-6 shadow-md rounded-lg mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Nissan GT-R</h1>
            <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full mt-4 md:mt-0">
              ★ 4.8
            </span>
          </div>
          <p className="text-gray-700 mt-4">
            Nissan GT-R has become the embodiment of Nissan's outstanding
            performance. Inspired by the most cutting-edge racing technology
            used in the "track series."
          </p>
          <div className="mt-6">
            <img
              src="NissanGTR.png"
              alt="Nissan GT-R"
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="flex space-x-4 mt-4">
              <img
                src="InteriorNissan.png"
                alt="Nissan GT-R"
                className="w-24 h-16 object-cover rounded-md"
              />
              <img
                src="NissanSeat.png"
                alt="Nissan GT-R"
                className="w-24 h-16 object-cover rounded-md"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap space-y-4 md:space-y-0 md:space-x-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700">Type</h3>
              <p className="text-gray-600">Sport</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Capacity</h3>
              <p className="text-gray-600">2 Person</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Transmission</h3>
              <p className="text-gray-600">Manual</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Price</h3>
              <p className="text-gray-600">$80.00/day</p>
            </div>
          </div>
          <Link href="/Payment">
            <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Rent Now
            </button>
          </Link>
        </section>

        {/* Reviews Section */}
        <section className="bg-white p-4 md:p-6 shadow-md rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Reviews</h2>
          <ul className="mt-4 space-y-4">
            {reviews.map((review) => (
              <li key={review.id} className="flex items-start space-x-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-gray-800 font-medium">{review.name}</h3>
                  <p className="text-gray-600 text-sm">{review.date}</p>
                  <p className="text-gray-700 mt-2">{review.review}</p>
                  <span className="text-yellow-400">
                    {"★".repeat(Math.floor(review.rating))}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Recommended Cars */}
        <section className="bg-white p-4 md:p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            Recommended Cars
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
            {recommendedCars.map((car) => (
              <div key={car.id} className="bg-gray-100 p-4 rounded-lg">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-gray-800 font-medium mt-2">{car.name}</h3>
                <p className="text-gray-600">{car.price}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Rent Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CarDetails
