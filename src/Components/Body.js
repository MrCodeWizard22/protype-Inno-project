import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1500x800")' }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-5xl font-bold mb-4">Car Transport Made Easy</h1>
          <p className="text-xl mb-6">Safe, Reliable, and Efficient Car Transport Across Cities</p>
          <Link to="/book">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">Book Your Transport</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Open Transport</h3>
            <p className="text-gray-600">Affordable and reliable transport for your vehicle with open carriers.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Enclosed Transport</h3>
            <p className="text-gray-600">Premium, secure transport for your car with fully enclosed carriers.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Fast and Safe Delivery</h3>
            <p className="text-gray-600">Timely and secure delivery, ensuring your vehicle reaches its destination safely.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-200 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Move Your Car?</h2>
        <p className="text-lg text-gray-700 mb-6">Get your car delivered to any city with ease and safety. Start now!</p>
        <Link to="/book">
          <button className="bg-blue-500 text-white py-3 px-8 rounded-md hover:bg-blue-600">Get Started</button>
        </Link>
      </section>

      {/* Footer (Optional) */}
      <footer className="bg-blue-500 text-white py-6 text-center">
        <p>&copy; 2024 Car Transport Service. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Body;
