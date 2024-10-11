import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Asegúrate de tener instalada esta librería
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos predeterminados del carrusel

const Section1WithCarousel = () => {
  return (
    <section id="section1" className="relative w-full h-screen bg-gray-900 text-white">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black bg-opacity-40">
        <h2 className="text-4xl font-bold mb-4">Explore Our Gym</h2>
        <p className="text-lg mb-8 text-gray-300">Discover the best equipment, atmosphere, and community.</p>
        <a
          href="#signup"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300"
        >
          Join Now
        </a>
      </div>

      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        interval={5000}
        showArrows={false}
        className="h-full"
      >
        <div>
          <img
            src="https://via.placeholder.com/1920x1080"
            alt="Gym Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1920x1080"
            alt="Gym Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1920x1080"
            alt="Gym Image 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1920x1080"
            alt="Gym Image 4"
            className="w-full h-full object-cover"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Section1WithCarousel;