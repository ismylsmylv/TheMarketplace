import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import {
  faBoxOpen,
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className="Navbar flex items-center justify-center py-4">
      <div className="container   w-full flex items-center justify-between">
        <img
          className="logo"
          src="../../../src/assets/img/brand/logo TM transparent full.png"
        ></img>
        <button>catalog</button>
        <div className="searchbar">
          <input type="text" />
        </div>
        <div className="actions">
          <button>
            <FontAwesomeIcon icon={faBoxOpen} />
          </button>
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <button>
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
