import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";

const AboutUs = () => {
  return (
    <div className="p-10 bg-zinc-800 min-h-screen flex flex-col items-center text-yellow-200">
      {/* Title Section */}
      <h1 className="text-5xl font-bold mb-8">About Us</h1>

      {/* Description Section */}
      <p className="text-2x1 text-center max-w-3xl mb-10">
        Welcome to <span className="font-bold">BookVerse</span>, your one-stop online bookstore! We
        offer a wide variety of books across all genres, catering to readers of every taste. You can
        explore our collection, order your favorite books.Our mission is to make reading accessible and enjoyable for everyone.
      </p>

      {/* Cards Section */}
      <div className="space-y-6 mb-8 w-full max-w-2xl">
        {[
          "Wide Variety of Genres",
          "Order Books Online",
          "Curated Book Lists", 
          "Fast Delivery",
        ].map((point, index) => (
          <div
            key={index}
            className="p-7 bg-zinc-900 text-yellow-600 rounded-lg text-2xl font-medium shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition duration-300 flex items-center justify-center text-center"
          >
            {point}
          </div>
        ))}
      </div>

      {/* Social Media Section */}
      <div className="flex space-x-10">
        {[
          { name: "Instagram", color: "text-pink-500", icon: "fa-instagram" },
          { name: "X", color: "text-black", icon: "fa-x" }, // X for Twitter
          { name: "Facebook", color: "text-blue-600", icon: "fa-facebook" },
        ].map((social, index) => (
          <a
            key={index}
            href={`https://${social.name.toLowerCase()}.com`}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-yellow-100 text-3xl hover:${social.color} transition duration-300`}
          >
            <i className={`fab ${social.icon}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
