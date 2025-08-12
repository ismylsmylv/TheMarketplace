import Card from "../Card";
import "./style.scss";
type Props = {};

function CardGrid({}: Props) {
  return (
    <div className="CardGrid gap-3 container p-3">
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
  );
}

export default CardGrid;
