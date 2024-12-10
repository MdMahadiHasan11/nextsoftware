import Image from 'next/image'; // Import Image for handling images
import { FC } from 'react';

const HomePage: FC = () => {
    return (
        <div>
            {/* Banner Section */}
            <section
                className="relative bg-cover bg-center h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center text-white"
                style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay to darken the background */}
                <div className="relative z-10 text-center px-4 sm:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Hello, I am Md Mahadi Hasan
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                        Skilled in Next.js, TypeScript, Node.js, MongoDB, React.js, Tailwind CSS, and JavaScript. Focused on building
                        scalable, efficient web applications.
                    </p>
                    <a
                        href="#cta"
                        className="inline-block bg-blue-600 text-white text-sm sm:text-lg py-2 sm:py-3 px-6 sm:px-8 rounded-md hover:bg-blue-500 transition duration-300"
                    >
                        Get Started
                    </a>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <div id="cta" className="py-16 bg-gray-100 px-4 sm:px-8">
                <div className="py-16 bg-white px-4 sm:px-8">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                            Contact Me
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
                            Feel free to reach out or visit me at my location!
                        </p>
                        <div className="bg-gray-100 rounded-lg shadow-lg p-6 sm:p-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800">Md Mahadi Hasan</h3>
                            <p className="text-sm sm:text-base text-gray-600 mt-2">
                                Ishwardi, Pabna, Rajshahi, Bangladesh
                            </p>
                            <p className="text-sm sm:text-base text-gray-600 mt-1">Phone: +8801774938275</p>
                            <p className="text-sm sm:text-base text-gray-600 mt-1">
                                Email: <a href="mailto:mdmahadihasancse@gmail.com" className="text-blue-600 hover:underline">mdmahadihasancse@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
