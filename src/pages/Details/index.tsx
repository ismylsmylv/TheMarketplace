import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import {
  faHeart,
  faTriangleExclamation
} from "@fortawesome/free-solid-svg-icons";
import GalleryCarousel from "../../components/GalleryCarousel";
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
          <div className="price text-3xl font-bold mb-6 pb-4">1500 AZN</div>
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
        </div>
      </section>
    </div>
  );
}

export default Details;
