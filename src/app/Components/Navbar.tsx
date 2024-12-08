import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">MORENT</span>
        </a>

        {/* Search Bar (Hidden on Small Screens) */}
        <div className="hidden lg:flex items-center flex-1 mx-4">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search something here"
              className="w-full px-4 py-2 text-sm border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l5-5m0 0l-5-5m5 5H4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Icons and Profile */}
        <div className="flex items-center space-x-4">
          {/* Heart Icon */}
          <button title="Favourites" className="p-2 rounded-full hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-gray-500"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A5.978 5.978 0 0116.5 3 5.5 5.5 0 0122 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>

          {/* Bell Icon */}
          <button title="Notifications" className="relative p-2 rounded-full hover:bg-gray-100">
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-gray-500"
            >
              <path d="M18 8a6 6 0 00-12 0c0 4-1 6-1 6h14s-1-2-1-6zm-7 12h2a2 2 0 002-2h-6a2 2 0 002 2z" />
            </svg>
          </button>

        {/* Settings Icon */}
         <button title="Settings" className="p-2 rounded-full hover:bg-gray-100">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-gray-500"
  >
    <path
      fillRule="evenodd"
      d="M11.25 2.25c0-.414.336-.75.75-.75s.75.336.75.75v1.341a8.26 8.26 0 012.27.938l1.016-.588a.75.75 0 01.75 1.298l-1.016.588a8.29 8.29 0 011.131 1.131l.588-1.016a.75.75 0 011.298.75l-.588 1.016a8.26 8.26 0 01.938 2.27h1.341c.414 0 .75.336.75.75s-.336.75-.75.75h-1.341a8.26 8.26 0 01-.938 2.27l.588 1.016a.75.75 0 01-1.298.75l-.588-1.016a8.29 8.29 0 01-1.131 1.131l1.016.588a.75.75 0 11-.75 1.298l-1.016-.588a8.26 8.26 0 01-2.27.938v1.341c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.341a8.26 8.26 0 01-2.27-.938l-1.016.588a.75.75 0 11-.75-1.298l1.016-.588a8.29 8.29 0 01-1.131-1.131l-.588 1.016a.75.75 0 01-1.298-.75l.588-1.016a8.26 8.26 0 01-.938-2.27H2.25a.75.75 0 01-.75-.75c0-.414.336-.75.75-.75h1.341a8.26 8.26 0 01.938-2.27l-.588-1.016a.75.75 0 111.298-.75l.588 1.016a8.29 8.29 0 011.131-1.131l-1.016-.588a.75.75 0 11.75-1.298l1.016.588a8.26 8.26 0 012.27-.938V2.25zm4.5 9.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
      clipRule="evenodd"
    />
  </svg>
         </button>


          {/* User Avatar */}
          <img
           title="Profile"
            src="Avatar.png"
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* Search Icon for Mobile */}
        <button className="lg:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M10 20l5-5m0 0l-5-5m5 5H4" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
