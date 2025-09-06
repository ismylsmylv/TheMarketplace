import {
  faHeart,
  faPhone,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slide, { type SlideProps } from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import { useEffect, useState } from "react";
import CardGrid from "../../components/CardGrid";
import GalleryCarousel from "../../components/GalleryCarousel";
import { detailsList, detailsPosted } from "./mockdata";
import "./style.scss";
import OfferModal from "../../components/OfferModal";
import { useParams } from "react-router";
import type { ProductInterface } from "../../types/products";
function Details() {
  const { id } = useParams();
  const [state, setState] = useState({
    open: false,
    vertical: "bottom" as "bottom" | "top",
    horizontal: "right" as "right" | "left" | "center",
  });

  const [data, setData] = useState({} as ProductInterface);

  const { vertical, horizontal, open } = state;
  const [offerValues, setOfferValues] = useState({ price: 0, text: "" });
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="up" />;
  }
  const handleFetch = async () => {
    try {
      // switch to getByID after API fix
      const res = await fetch(`http://localhost:3000/products`);
      const data = await res.json();
      const found = data.filter(
        (item: { _id: string | undefined }) => item._id == id
      );
      console.log(found);
      setData(found[0]);
      console.log(data); // log fetched data directly
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="Details container py-4">
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        message="I love snacks"
        key={vertical + horizontal}
        slots={{ transition: SlideTransition }}
        autoHideDuration={1200}
      />

      <div className="p-2">
        <section className="topLine flex items-center justify-between flex-wrap gap-3">
          <strong className="text-2xl">{data.title}</strong>
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
        <section className="mt-5  intro flex items-start justify-between gap-1">
          <div className="gallery mb-10">
            <GalleryCarousel />
          </div>
          <div className="info rounded-lg p-5">
            <div className="financial">
              <div className="price text-3xl font-bold mb-6 pb-4">
                {data.price} AZN
              </div>
            </div>
            <div className="flex items-center justify-start">
              <img
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt="Profile picture"
              />
              <div className="infos">
                <h1 className="font-bold">{data.ownerInfo?.name}</h1>
                <div className="location ">{data.city}</div>
                <div className="rate text-xs">90% success rate</div>
              </div>
            </div>
            <div className="contacts">
              <a
                href="tel:+123456789"
                className="phone flex items-center justify-center gap-3 my-4 rounded text-white py-4 font-bold"
              >
                <FontAwesomeIcon icon={faPhone} />
                {data.ownerInfo?.phone}
              </a>
            </div>
            {/* should open modal with new price and textarea */}
            {isOfferOpen ? (
              <OfferModal
                offerValues={offerValues}
                setOfferValues={setOfferValues}
                setIsOfferOpen={setIsOfferOpen}
              />
            ) : (
              <button
                className="offer flex items-center justify-center gap-3 my-4 rounded py-4 font-bold w-full bg-blue-500 text-white"
                onClick={() => setIsOfferOpen(true)}
              >
                Make an offer
              </button>
            )}
          </div>
        </section>
        <div className="detailTexts">
          <section className="w-full">
            <ul className="detailsList grid grid-cols-2 gap-5 mt-6">
              {detailsList.map((item) => (
                <li
                  key={item.value}
                  className="flex items-center justify-between my-1"
                >
                  <div className="title text-gray-400 font-semibold">
                    {item.title}
                  </div>
                  <div className="value">{String(data[item.value])}</div>
                </li>
              ))}
            </ul>

            <div className="description text-justify my-5 py-9 w-full">
              {data.description}
            </div>

            <div className="postDetails flex items-center justify-start gap-10">
              {detailsPosted.map((value) => (
                <p key={value} className="font-light text-gray-700">
                  {value === "_id" ? `№${data._id}` : `${value} ${data[value]}`}
                </p>
              ))}
            </div>
          </section>
        </div>
      </div>
      <CardGrid heading={{ title: "More like this", url: "/" }} />
    </div>
  );
}

export default Details;
