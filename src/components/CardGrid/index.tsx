import { Link } from "react-router";
import Card from "../Card";
import "./style.scss";
import { useEffect, useState } from "react";
import type { ProductInterface } from "./../../types/products";
type Props = {
  heading?: {
    title: string;
    url: string;
  };
};

function CardGrid({ heading }: Props) {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  const handleFetch = async () => {
    try {
      const res = await fetch(import.meta.env.API_URL + "/products");
      const data = await res.json();
      setProducts(data);
      console.log(data); // log fetched data directly
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="CardGrid   py-3 ">
      {heading && (
        <div className="heading flex items-center justify-between py-10 px-2">
          <h1 className="text-2xl">{heading.title}</h1>
          <Link to={heading.url} className="text-gray-500">
            See all
          </Link>
        </div>
      )}
      <div className="grid ">
        {products?.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
