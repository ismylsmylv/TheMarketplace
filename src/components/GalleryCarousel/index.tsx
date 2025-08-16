import { useState } from "react";
import "./style.scss";
type Props = {};
function GalleryCarousel({}: Props) {
  const images = [
    "https://cdn.mos.cms.futurecdn.net/76BX7qw85vqQucCvUnTHHQ.jpg",
    "https://media.wired.com/photos/67d0784805fd20234fac21f8/master/w_1600%2Cc_limit/MacBook-Air-M4-15-Inch-2025-(side-half-open-semi-folded)-Reviewer-Photo-SOURCE-Luke-Larsen.jpg",
    "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/wm/147121-laptops-news-is-there-a-16-inch-macbook-pro-incoming-image1-gmxavc50cd.jpg",
    "https://cdn.thewirecutter.com/wp-content/media/2025/03/BEST-MACBOOKS-2048px-7.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    "https://www.cnet.com/a/img/resize/bb8a2aa9c31f8ec08d82228a51eabf05f00e54d2/hub/2025/03/10/d190e21d-9634-440d-8f33-396c8cb3da6a/m4-macbook-air-15-11.jpg?auto=webp&height=500"
  ];
  const [active, setActive] = useState(
    "https://cdn.mos.cms.futurecdn.net/76BX7qw85vqQucCvUnTHHQ.jpg"
  );

  return (
    <div className="GalleryCarousel w-full">
      <img src={active} alt="" className="bigImg rounded mb-3" />
      <div className="list flex items-center justify-start gap-3">
        {images.map((img) => (
          <img src={img} alt="" className="smallImg rounded" />
        ))}
      </div>
    </div>
  );
}

export default GalleryCarousel;
