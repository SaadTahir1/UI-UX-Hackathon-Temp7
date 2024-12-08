import React from "react";
import Link from "next/link";

const HomeCart = () => {
  const carSections = [
    {
      title: "Available Cars",
      cars: [
        {
          id: 1,
          name: "Nissan GT-R",
          image: "NissanGTR.png",
          price: "$80",
          model: "Sport",
          rentDuration: "1 day",
          status: "New",
          detailsPage: "./DetailsRent",
        },
        {
          id: 2,
          name: "Audi A6",
          image: "AudiA6.jpg",
          price: "$65",
          model: "Luxury",
          rentDuration: "1 day",
          status: "Available",
        },
        {
          id: 3,
          name: "Toyota Corolla",
          image: "ToyotaCorolla.jpg",
          price: "$50",
          model: "Sedan",
          rentDuration: "1 day",
          status: "Discount",
        },
      ],
    },
    {
      title: "Recommendation Cars",
      cars: [
        {
          id: 4,
          name: "Tesla Model S",
          image: "TeslaS.jpg",
          price: "$120",
          model: "Electric",
          rentDuration: "1 day",
          status: "New",
        },
        {
          id: 5,
          name: "BMW X5",
          image: "BMWX6.jpg",
          price: "$90",
          model: "SUV",
          rentDuration: "1 day",
          status: "Available",
        },
        {
          id: 6,
          name: "Ford Mustang",
          image: "FordMustang.avif",
          price: "$100",
          model: "Coupe",
          rentDuration: "1 day",
          status: "Popular",
        },
      ],
    },
    {
      title: "Popular Cars",
      cars: [
        {
          id: 7,
          name: "Honda Civic",
          image: "HondaCivic.jpg",
          price: "$55",
          model: "Sedan",
          rentDuration: "1 day",
          status: "Available",
        },
        {
          id: 8,
          name: "Chevrolet Camaro",
          image: "Chevrolet.jpg",
          price: "$95",
          model: "Sport",
          rentDuration: "1 day",
          status: "Discount",
        },
        {
          id: 9,
          name: "Hyundai Tucson",
          image: "Tucson.jpg",
          price: "$70",
          model: "SUV",
          rentDuration: "1 day",
          status: "Popular",
        },
      ],
    },
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-2">
        {/* First Hero Card */}
        <div className="bg-blue-600 text-white rounded-lg flex items-center shadow-md overflow-hidden">
          <div className="p-8 flex-1">
            <h2 className="text-2xl font-bold">
              The Best Platform for Car Rental
            </h2>
            <p className="mt-4">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
          </div>
          <img
            src="Koeniggsegs.png"
            alt="Car Hero 1"
            className="w-1/2 object-cover"
          />
        </div>

        {/* Second Hero Card */}
        <div className="bg-blue-600 text-white rounded-lg flex items-center shadow-md overflow-hidden">
          <div className="p-8 flex-1">
            <h2 className="text-2xl font-bold">
              Easy way to rent a car at a low price
            </h2>
            <p className="mt-4">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
          </div>
          <img
            src="NissanGTR.png"
            alt="Car Hero 2"
            className="w-1/2 object-cover"
          />
        </div>
      </section>

      {/* Cars Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        {carSections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.cars.map((car) => (
                <div
                  key={car.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >{car.detailsPage ? (
                  <Link href={car.detailsPage}>
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-40 object-cover cursor-pointer"
                    />
                  </Link>
                ) : (
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-40 object-cover"
                  />
                )}
                  {/* Car Info */}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          car.status === "New"
                            ? "bg-green-100 text-green-700"
                            : car.status === "Discount"
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {car.status}
                      </span>
                      <span className="text-sm text-gray-500">{car.model}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {car.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Rent for: {car.rentDuration}
                    </p>
                    <p className="text-xl font-bold text-blue-600 mb-4">
                      {car.price}/day
                    </p>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                      Rent Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Show More Cars Button */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
            Show More Cars
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomeCart;
