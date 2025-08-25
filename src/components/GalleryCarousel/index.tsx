import { useState } from "react";

type Props = {};

function GalleryCarousel({}: Props) {
  const images = [
    "https://cdn.mos.cms.futurecdn.net/76BX7qw85vqQucCvUnTHHQ.jpg",
    "https://media.wired.com/photos/67d0784805fd20234fac21f8/master/w_1600%2Cc_limit/MacBook-Air-M4-15-Inch-2025-(side-half-open-semi-folded)-Reviewer-Photo-SOURCE-Luke-Larsen.jpg",
    "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/wm/147121-laptops-news-is-there-a-16-inch-macbook-pro-incoming-image1-gmxavc50cd.jpg",
    "https://cdn.thewirecutter.com/wp-content/media/2025/03/BEST-MACBOOKS-2048px-7.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    "https://www.cnet.com/a/img/resize/bb8a2aa9c31f8ec08d82228a51eabf05f00e54d2/hub/2025/03/10/d190e21d-9634-440d-8f33-396c8cb3da6a/m4-macbook-air-15-11.jpg?auto=webp&height=500",
  ];

  const [active, setActive] = useState(
    "https://cdn.mos.cms.futurecdn.net/76BX7qw85vqQucCvUnTHHQ.jpg"
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-4 pt-0">
      {/* Main image with responsive sizing */}
      <div className="relative w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
        <img
          src={active}
          alt="Selected product"
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnail list with horizontal scroll */}
      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {images.map((img, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={img}
              alt={`Product view ${index + 1}`}
              className={`
                w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 lg:w-28 lg:h-20
                object-cover rounded-md cursor-pointer
                border-2 transition-all duration-200
                hover:border-blue-500 
                ${
                  active === img
                    ? "border-blue-500 shadow-md"
                    : "border-gray-200 hover:border-gray-300"
                }
              `}
              onClick={() => setActive(img)}
              onMouseEnter={() => setActive(img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryCarousel;
