import {
  faHeart,
  faPhone,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slide, { type SlideProps } from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import CardGrid from "../../components/CardGrid";
import GalleryCarousel from "../../components/GalleryCarousel";
import { detailsList, detailsPosted } from "./mockdata";
import "./style.scss";
function Details() {
  const [state, setState] = useState({
    open: false,
    vertical: "bottom" as "bottom" | "top",
    horizontal: "right" as "right" | "left" | "center",
  });
  const { vertical, horizontal, open } = state;
  function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="up" />;
  }
  return (
    <div className="Details container p-4">
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        message="I love snacks"
        key={vertical + horizontal}
        slots={{ transition: SlideTransition }}
        autoHideDuration={1200}
      />

      <section className="topLine flex items-center justify-between flex-wrap">
        <strong className="text-2xl">Apple MacBook Pro (14-inch, M3)</strong>
        <div className="actions flex items-center justify-end gap-7 ">
          <button
            onClick={() => {
              setState({ ...state, open: true });
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
            <p className="text-gray-500 ">Add to favorites</p>
          </button>
          <button>
            <FontAwesomeIcon icon={faTriangleExclamation} />
            <p className="text-gray-500 ">Report</p>
          </button>
        </div>
      </section>
      <section className="mt-5  intro ">
        <div className="gallery mb-10">
          <GalleryCarousel />
        </div>
        <div className="info rounded p-5">
          <div className="financial">
            <div className="price text-3xl font-bold mb-6 pb-4">1500 AZN</div>
          </div>
          <div className="flex items-center justify-start">
            <img
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              alt="Profile picture"
            />
            <div className="infos">
              <h1 className="font-bold">Sam Altman</h1>
              <div className="location ">Baku, Yasamal</div>
              <div className="rate text-xs">90% success rate</div>
            </div>
          </div>
          <div className="contacts">
            <a
              href="tel:+123456789"
              className="phone flex items-center justify-center gap-3 my-4 rounded text-white py-4 font-bold"
            >
              <FontAwesomeIcon icon={faPhone} />
              +123456789
            </a>
          </div>
          {/* should open modal with new price and textarea */}
          <button className="offer flex items-center justify-center gap-3 my-4 rounded  py-4 font-bold w-full">
            Make an offer
          </button>
        </div>
      </section>
      <div className="detailTexts ">
        <section className="w-full">
          <ul className="detailsList grid grid-cols-2 gap-5 mt-6">
            {detailsList.map((item) => (
              <li className="flex items-center justify-between my-1">
                <div className="title text-gray-400 font-semibold">
                  {item.title}
                </div>
                <div className="value">{item.value}</div>
              </li>
            ))}
          </ul>
          <div className="description text-justify my-5 py-9 w-full">
            This MacBook has undergone a comprehensive inspection, rigorous
            testing, and meticulous cleaning, surpassing industry standards to
            ensure flawless functionality. This refurbished device is in good
            cosmetic condition, exhibiting signs of wear from normal use
            including scratching and dents on the casing. This device is an
            excellent choice, especially for users intending to use a protective
            case with the device. Enjoy a device with guaranteed 80%+ battery
            health, complete with compatible accessories. Please note that the
            original packaging is not included.
          </div>

          <div className="postDetails flex items-center justify-start gap-10">
            {detailsPosted.map((value) => (
              <p className="font-light text-gray-700">
                {value == "id" ? `№${value}` : value}
              </p>
            ))}
          </div>
        </section>
      </div>
      <CardGrid heading={{ title: "More like this", url: "/" }} />
    </div>
  );
}

export default Details;
