import { useParams, useSearchParams } from "react-router";

function Posters() {
  const { type, category } = useParams();
  const [searchParams] = useSearchParams();
  const sub = searchParams.get("sub");
  return (
    <div>
      Posters for
      <br />
      <div>Type: {type}</div>
      <div>Category: {category}</div>
      <div>Sub: {sub}</div>
    </div>
  );
}

export default Posters;
