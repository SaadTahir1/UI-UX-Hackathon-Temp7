import React from "react";
import Link from "next/link";

const BillingPayment = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col md:flex-row p-6">
      {/* Main Content */}
      <div className="flex-1 bg-white p-6 shadow-md rounded-lg mb-6 md:mb-0 md:mr-6">
        {/* Billing Info */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Billing Info</h2>
          <p className="text-sm text-gray-600 mb-4">
            Please provide your billing info.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                className="text-gray-700 font-medium"
                htmlFor="phone-number"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone-number"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your address"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium" htmlFor="city">
                Town/City
              </label>
              <input
                type="text"
                id="city"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your city"
              />
            </div>
          </div>
        </section>

        {/* Rental Info */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Rental Info</h2>
          <p className="text-sm text-gray-600 mb-4">
            Please select your rental details.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 font-medium" htmlFor="pickup-loc">
                Pick-Up Location
              </label>
              <select
                id="pickup-loc"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              >
                <option>Select your city</option>
                <option>City A</option>
                <option>City B</option>
              </select>
            </div>
            <div>
              <label className="text-gray-700 font-medium" htmlFor="pickup-date">
                Pick-Up Date
              </label>
              <input
                type="date"
                id="pickup-date"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium" htmlFor="pickup-time">
                Pick-Up Time
              </label>
              <input
                type="time"
                id="pickup-time"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label
                className="text-gray-700 font-medium"
                htmlFor="dropoff-loc"
              >
                Drop-Off Location
              </label>
              <select
                id="dropoff-loc"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              >
                <option>Select your city</option>
                <option>City A</option>
                <option>City B</option>
              </select>
            </div>
            <div>
              <label
                className="text-gray-700 font-medium"
                htmlFor="dropoff-date"
              >
                Drop-Off Date
              </label>
              <input
                type="date"
                id="dropoff-date"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label
                className="text-gray-700 font-medium"
                htmlFor="dropoff-time"
              >
                Drop-Off Time
              </label>
              <input
                type="time"
                id="dropoff-time"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </section>

        {/* Payment Method */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800">
            Payment Method
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Please select your payment method.
          </p>
          <div className="space-y-4">
            <div className="border p-4 rounded-md flex items-center">
              <input
                type="radio"
                name="payment-method"
                className="w-4 h-4 mr-2 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span>PayPal</span>
              <img
                src="Paypal.jpg"
                alt="PayPal"
                className="w-8 h-8 ml-auto"
              />
            </div>
            <div className="border p-4 rounded-md flex items-center">
              <input
                type="radio"
                name="payment-method"
                className="w-4 h-4 mr-2 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span>Bitcoin</span>
              <img
                src="Bitcoin.png"
                alt="Bitcoin"
                className="w-8 h-8 ml-auto"
              />
            </div>
          </div>
        </section>

        {/* Confirmation */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Confirmation</h2>
          <p className="text-sm text-gray-600 mb-4">
            We are getting to the end. Just a few clicks, and your rental is
            ready!
          </p>
          <div className="space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span>
                I agree with sending marketing and newsletter emails. No spam,
                promised!
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span>
                I agree with the terms and conditions and privacy policy.
              </span>
            </label>
          </div>
          <Link href="/Dashboard">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded mt-6 hover:bg-blue-700">
            Rent Now
          </button>
          </Link>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>All your data are safe</p>
            <p>
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </section>
      </div>

      {/* Rental Summary */}
      <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800">Rental Summary</h2>
        <div className="mt-4">
          <div className="flex items-center space-x-4">
            <img
              src="NissanGTR.png"
              alt="Nissan GT-R"
              className="w-20 h-16 object-cover rounded-md"
            />
            <div>
              <h3 className="text-gray-800 font-medium">Nissan GT-R</h3>
              <p className="text-gray-600 text-sm">★ 4.8 (122 Reviews)</p>
            </div>
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>$80.00</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Tax</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-gray-800 font-semibold mt-2">
              <span>Total Rental Price</span>
              <span>$80.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPayment;
