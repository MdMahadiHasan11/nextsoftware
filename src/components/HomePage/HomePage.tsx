import Image from 'next/image'; // Import Image for handling images
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay to darken the background */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg mb-6">
            Explore amazing content and experience a world of possibilities.
          </p>
          <a
            href="#cta"
            className="inline-block bg-blue-600 text-white text-lg py-3 px-8 rounded-md hover:bg-blue-500 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Some other sections/content */}
      <div id="cta" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Start Your Journey Today</h2>
          <p className="text-lg text-gray-600 mt-4">
            Join us now and start enjoying exclusive content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
