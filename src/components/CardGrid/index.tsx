import { Link } from "react-router";
import Card from "../Card";
import "./style.scss";
type Props = {
  heading?: {
    title: string;
    url: string;
  };
};

function CardGrid({ heading }: Props) {
  return (
    <div className="CardGrid   py-3 ">
      {heading && (
        <div className="heading flex items-center justify-between py-10">
          <h1 className="text-2xl">{heading.title}</h1>
          <Link to={heading.url} className="text-gray-500">
            See all
          </Link>
        </div>
      )}
      <div className="grid ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default CardGrid;
