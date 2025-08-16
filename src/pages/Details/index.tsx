import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import {
  faHeart,
  faTriangleExclamation
} from "@fortawesome/free-solid-svg-icons";
function Details() {
  return (
    <div className="Details container p-4">
      <div className="topLine flex items-center justify-between">
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
      </div>
    </div>
  );
}

export default Details;
