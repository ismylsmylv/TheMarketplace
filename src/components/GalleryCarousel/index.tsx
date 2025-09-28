import { useEffect, useState } from "react";

type Media = {
  _id: string;
  type: string;
  url: string;
};

type GalleryCarouselProps = {
  media: Media[];
};

function GalleryCarousel({ media }: GalleryCarouselProps) {
  const [active, setActive] = useState<Media>(
    media[0] || {
      _id: "",
      type: "",
      url: "",
    }
  );
  useEffect(() => {
    if (media && media.length > 0) {
      const firstImage = media.find((obj) => obj.type !== "video");
      if (firstImage) {
        setActive(firstImage);
      }
    }
  }, [media]);

  console.log(media);
  return (
    <div className="w-full max-w-4xl mx-auto ">
      {/* Main image with responsive sizing */}
      <div className="relative w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
        {active.type == "video" ? (
          <video
            height={100}
            src={active.url}
            autoPlay
            playsInline
            muted
            loop
            controls
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover transition-opacity duration-300"
          ></video>
        ) : (
          <img
            src={active.url}
            alt="Selected product"
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover transition-opacity duration-300"
          />
        )}
      </div>

      {/* Thumbnail list with horizontal scroll */}
      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {media?.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {item.type == "video" ? (
              <video
                height={100}
                src={item.url}
                autoPlay
                playsInline
                muted
                loop
                onClick={() => setActive(item)}
                onMouseEnter={() => setActive(item)}
                className={`
              w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 lg:w-28 lg:h-20
              object-cover rounded-md cursor-pointer
              border-2 transition-all duration-200
              hover:border-blue-500 
              ${
                active._id === item._id
                  ? "border-blue-500 shadow-md"
                  : "border-gray-200 hover:border-gray-300"
              }
                `}
              ></video>
            ) : (
              <img
                src={item.url}
                alt={`Product view ${index + 1}`}
                className={`
              w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 lg:w-28 lg:h-20
              object-cover rounded-md cursor-pointer
              border-2 transition-all duration-200
              hover:border-blue-500 
              ${
                active._id === item._id
                  ? "border-blue-500 shadow-md"
                  : "border-gray-200 hover:border-gray-300"
              }
                `}
                onClick={() => setActive(item)}
                onMouseEnter={() => setActive(item)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryCarousel;
