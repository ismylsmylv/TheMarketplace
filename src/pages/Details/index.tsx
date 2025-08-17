import {
  faHeart,
  faPhone,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GalleryCarousel from "../../components/GalleryCarousel";
import "./style.scss";
import { detailsList } from "./mockdata";
function Details() {
  return (
    <div className="Details container p-4">
      <section className="topLine flex items-center justify-between">
        <strong className="text-2xl">Apple MacBook Pro (14-inch, M3)</strong>
        <div className="actions flex items-center justify-end gap-7 ">
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <p className="text-gray-500 ">Add to favorites</p>
          </button>
          <button>
            <FontAwesomeIcon icon={faTriangleExclamation} />
            <p className="text-gray-500 ">Report</p>
          </button>
        </div>
      </section>
      <section className="mt-5 flex items-start justify-center gap-10">
        <div className="gallery">
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
      <section>
        <ul className="detailsList grid grid-cols-2 gap-2 mt-6">
          {detailsList.map((item) => (
            <li className="flex items-center justify-between my-1">
              <div className="title text-gray-400 font-semibold">
                {item.title}
              </div>
              <div className="value">{item.value}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Details;
