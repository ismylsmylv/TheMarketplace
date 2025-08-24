import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
type Props = {};

function SearchBar({}: Props) {
  return (
    <div className="SearchBar rounded-xl w-full max-w-xl flex items-center justify-between">
      <select
        name=""
        id=""
        className=" p-2   rounded-xl capitalize cursor-pointer"
      >
        <option className="cursor-pointer" value="">
          all categories
        </option>
        <option className="cursor-pointer" value="">
          products
        </option>
        <option className="cursor-pointer" value="">
          services
        </option>
        <option className="cursor-pointer" value="">
          requests
        </option>
      </select>
      <div className="divider mx-2 ml-3"></div>
      <div className="flex items-center justify-start w-full">
        <input
          type="text"
          placeholder="Search in the market"
          className=" p-3   rounded-xl w-full"
        />
        <button className="p-3   ">
          <FontAwesomeIcon icon={faMagnifyingGlass} color="#fff" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
