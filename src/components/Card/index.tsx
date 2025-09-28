import { Link } from "react-router";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import type { ProductInterface } from "../../types/products";

type Props = {
  data: ProductInterface;
};

function Card({ data }: Props) {
  // const sampleVideo =
  //   "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Chelsea_uvodne_video_no_text_hzcgdv_yabzxm.mp4";
  // const sampleImage =
  //   "https://cdn.mos.cms.futurecdn.net/76BX7qw85vqQucCvUnTHHQ.jpg";
  const noImage = "https://cdn-icons-png.flaticon.com/512/7156/7156838.png";
  const [hover, setHover] = useState(false);
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  useEffect(() => {
    data.media.find((obj) => obj.type == "video" && setVideo(obj.url));
    data.media.find((obj) => obj.type !== "video" && setImage(obj.url));
  }, []);

  return (
    <Link
      to={`/details/${data._id}`}
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
        {hover && video ? (
          <video
            height={400}
            src={video}
            className="rounded-lg"
            autoPlay
            playsInline
            muted
            loop
          ></video>
        ) : (
          <img
            src={image || noImage}
            alt="Cover image"
            className="rounded-lg "
          />
        )}
      </div>
      <button className="fav  size-8 rounded-full flex  items-center justify-center absolute top-2 right-4 bg-sky-50">
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <div className="infos py-3 ">
        <p className="name line-clamp-1">{data.title}</p>
        {/* need a function to make date readable */}
        <p className="date text-xs mt-2">
          {data.city}, {data.createdAt}
        </p>
        <p className="delivery text-xs mt-2">{data.delivery}</p>

        <b>{data.price} AZN</b>
      </div>
    </Link>
  );
}

export default Card;
