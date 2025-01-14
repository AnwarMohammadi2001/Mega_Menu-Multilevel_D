import React from "react";
import { Link } from "react-router-dom";
import nike from "../assets/images/nike1.png"

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-cover bg-center cursor-pointer h-[80vh] flex items-center justify-center text-center relative" style={{ backgroundImage: `url(${nike})` }}>
       
      </section>

      {/* Featured Categories */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category Cards */}
            {[
              { name: "Men", image: "/path-to-men-image.jpg", link: "/men" },
              { name: "Women", image: "/path-to-women-image.jpg", link: "/women" },
              { name: "Kids", image: "/path-to-kids-image.jpg", link: "/kids" },
              { name: "Jordan", image: "/path-to-jordan-image.jpg", link: "/jordan" },
            ].map((category, index) => (
              <Link
                to={category.link}
                key={index}
                className="group relative block overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold group-hover:underline">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Limited Time Offers
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Don’t miss out on our special deals! Shop now and enjoy amazing discounts on your favorite items.
          </p>
          <Link
            to="/offers"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg shadow-md font-medium hover:bg-gray-100 transition duration-300"
          >
            View Offers
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Subscribe to our newsletter for the latest news, trends, and exclusive offers.
          </p>
          <form className="flex justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full max-w-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
