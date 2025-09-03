import { Link } from "react-router";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import type { ProductInterface } from "../../types/products";

type Props = {
  data: ProductInterface;
};

function Card({ data }: Props) {
  const sampleVideo =
    "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Chelsea_uvodne_video_no_text_hzcgdv_yabzxm.mp4";
  const sampleImage =
    "https://cdn.mos.cms.futurecdn.net/76BX7qw85vqQucCvUnTHHQ.jpg";
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={"/details/1"}
      className="Card  cursor-pointer px-2  overflow-hidden  relative w-full "
      target="_blank"
    >
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {hover ? (
          <video
            height={400}
            src={sampleVideo}
            className="rounded-lg"
            autoPlay
            playsInline
            muted
            loop
          ></video>
        ) : (
          <img src={sampleImage} alt="Cover image" className="rounded-lg " />
        )}
      </div>
      <button className="fav  size-8 rounded-full flex  items-center justify-center absolute top-2 right-4 bg-sky-50">
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <div className="infos py-3 ">
        <p className="name line-clamp-1">Apple MacBook Pro (14-inch, M3)</p>
        <p className="date text-xs mt-2">Baku, today, 13:43</p>
        <p className="delivery text-xs mt-2">Free delivery</p>

        <b>2500 AZN</b>
      </div>
    </Link>
  );
}

export default Card;
