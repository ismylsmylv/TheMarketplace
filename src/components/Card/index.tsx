import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { ProductInterface } from "../../types/products";
import "./style.scss";
import {
  checkFavorite,
  handleFavorite
} from "../../functions/events/favorites";

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
  const [isFavorite, setIsFavorite] = useState(checkFavorite(data._id));
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    data.media.find((obj) => obj.type == "video" && setVideo(obj.url));
    data.media.find((obj) => obj.type !== "video" && setImage(obj.url));
  }, []);

  return (
    <a
      className="Card  cursor-pointer px-2  overflow-hidden  relative w-full "
      target="_blank"
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/details/${data._id}`);
      }}
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
      <button
        className={`${
          !isFavorite && "addFav"
        } size-8 rounded-full flex  items-center justify-center absolute top-2 right-4 bg-sky-50`}
        onClick={(e) => {
          e.stopPropagation();
          handleFavorite(data._id);
          setIsFavorite(!isFavorite);
        }}
      >
        <FontAwesomeIcon icon={faHeart} color={isFavorite ? "red" : "black"} />
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
    </a>
  );
}

export default Card;
