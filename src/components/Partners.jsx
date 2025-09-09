import React from "react";
import Img1 from '../assets/Partner1.jpg';
import Img2 from '../assets/Partner2.jpg';
import Img3 from '../assets/Partner3.jpg';
import Img4 from '../assets/Partner4.jpg';
import Img5 from '../assets/Partner5.jpg';

const partners = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
];
export default function Partners() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Our Partners
      </h2>

      <div className="overflow-hidden relative">
        <div className="flex animate-scroll gap-12">
          {/* Duplicate logos for smooth infinite scroll */}
          {[...partners, ...partners, ...partners, ...partners].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-gray-50  rounded-lg"
            >
              <img
                src={logo}
                alt={`partner-${index}`}
                className="max-h-16 "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
