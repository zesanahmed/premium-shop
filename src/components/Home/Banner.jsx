// Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="mb-8">
          <img
            src="https://via.placeholder.com/1200x400.png?text=Premium+Shop"
            alt="Premium Shop Banner"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Premium Shop</h1>
        <p className="text-lg text-gray-600 mb-4">
          Your One-Stop Destination for Quality Products
        </p>
        <p className="text-md text-gray-600 mb-6">
          Discover the Best Deals on Top-Quality Products!
        </p>
        <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Phones</h2>
            <p className="text-md text-gray-600">
              Latest smartphones at unbeatable prices
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Books</h2>
            <p className="text-md text-gray-600">
              A wide range of books for all ages and interests
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Laptops</h2>
            <p className="text-md text-gray-600">
              Top brands and models for every need
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Digital Devices</h2>
            <p className="text-md text-gray-600">
              Gadgets and accessories for your digital lifestyle
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-600 mt-8">Built with the Latest Technology:</p>
        <ul className="text-lg text-gray-600 mb-8">
          <li>React for a dynamic and responsive user experience</li>
          <li>Express for robust and scalable backend services</li>
          <li>MongoDB for secure and efficient data management</li>
          <li>Tailwind CSS & DaisyUI for a beautiful, modern, and customizable design</li>
        </ul>
        <a
          href="/shop"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg text-lg shadow-md hover:bg-blue-700"
        >
          Shop Now and Enjoy Exclusive Offers!
        </a>
      </div>
    </div>
  );
};

export default Banner;
