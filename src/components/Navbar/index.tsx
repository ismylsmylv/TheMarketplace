import { faBorderAll, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import SearchBar from "../SearchBar";
import { navs } from "./navs";
import "./style.scss";
type Props = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function Navbar({ isOpen, setOpen }: Props) {
  return (
    <div className="Navbar flex items-center justify-center px-4 ">
      <div className="container   w-full flex items-center justify-between">
        <Link to={"/"}>
          <img
            className="logo"
            src="../../../src/assets/img/brand/logo TM transparent full.png"
          ></img>
        </Link>
        <button
          className="catalogBtn rounded-lg capitalize px-10 py-3 flex items-center justify-center gap-3"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <FontAwesomeIcon icon={faBorderAll} color="#fff" />
          <b className="text-white ">catalog</b>
        </button>
        <SearchBar />
        <div className="actions flex items-center justify-center gap-5">
          {navs.map((nav) => (
            <Link
              to={nav.url}
              className="flex items-center justify-center"
              key={nav.url}
            >
              <FontAwesomeIcon icon={nav.icon} />
            </Link>
          ))}
          <Link to={"/new"} className="flex items-center justify-center">
            <FontAwesomeIcon icon={faPlus} />
            New poster
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
