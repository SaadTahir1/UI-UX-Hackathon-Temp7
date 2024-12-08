import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Vision */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600">MORENT</h2>
            <p className="mt-4 text-sm text-gray-500">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">About</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">How it works</a></li>
              <li><a href="#" className="hover:text-blue-600">Featured</a></li>
              <li><a href="#" className="hover:text-blue-600">Partnership</a></li>
              <li><a href="#" className="hover:text-blue-600">Business Relation</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Community</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Events</a></li>
              <li><a href="#" className="hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600">Podcast</a></li>
              <li><a href="#" className="hover:text-blue-600">Invite a friend</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Socials</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Discord</a></li>
              <li><a href="#" className="hover:text-blue-600">Instagram</a></li>
              <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-200"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 text-sm text-gray-500">
          <p>©2022 MORENT. All rights reserved</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-blue-600">Privacy & Policy</a>
            <a href="#" className="hover:text-blue-600">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
