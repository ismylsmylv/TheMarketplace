import { Link } from "react-router";
import "./style.scss";
function Favorites() {
  return (
    <div className="Favorites container flex items-center justify-center flex-col  h-full py-5">
      <b>Add ads to your favorites list to view them later</b>
      <Link to={"/"} className="rounded py-2 px-4 text-white mt-5">
        Browse
      </Link>
    </div>
  );
}

export default Favorites;
