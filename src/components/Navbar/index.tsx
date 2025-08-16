import {
  faBorderAll,
  faBoxOpen,
  faHeart,
  faPlus,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import SearchBar from "../SearchBar";
function Navbar() {
  return (
    <div className="Navbar flex items-center justify-center p-4">
      <div className="container   w-full flex items-center justify-between">
        <img
          className="logo"
          src="../../../src/assets/img/brand/logo TM transparent full.png"
        ></img>
        <button className="catalogBtn rounded-lg capitalize px-10 py-3 flex items-center justify-center gap-3">
          <FontAwesomeIcon icon={faBorderAll} color="#fff" />
          <b className="text-white ">catalog</b>
        </button>
        <SearchBar />
        <div className="actions flex items-center justify-center gap-5">
          <button>
            <FontAwesomeIcon icon={faBoxOpen} />
          </button>
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button>
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button>
            <FontAwesomeIcon icon={faPlus} />
            New promo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
