import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full h-[60vh] flex items-center bg-black">
      {/* Background Image */}
      <img
        src="/bg1.jpg"
        alt="hero"
        className="absolute top-0 right-0 w-2/3 h-full object-cover opacity-30"
      />

      {/* Content Section */}
      <div className="relative z-10 w-full lg:w-1/2 pl-10">
        <h1 className="text-yellow-100 text-5xl font-bold">
          Discover Your Next Great Read
        </h1>
        <p className="text-lg text-zinc-300 mt-6">
          Uncover captivating stories, enriching knowledge, and endless
          inspiration in our curated collection of books.
        </p>
        <div className="mt-8">
          <Link
            to="/all-books"
            className="text-lg bg-zinc-900 rounded-full py-4 w-40 flex items-center justify-center text-white font-semibold border border-yellow-100 hover:bg-yellow-900 transition-all duration-300"
          >
            Discover Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
