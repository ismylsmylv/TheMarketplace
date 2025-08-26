import { useState } from "react";
import { types, categories } from "./lists";
import "./style.scss";
import { Link } from "react-router";

type Props = {
  isOpen?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Catalog({ setOpen }: Props) {
  const [activeType, setActiveType] = useState<string>("products");

  const getCategories = (type: string) => {
    const cat = categories.find((c) => c.type === type);
    return cat ? cat.categories : [];
  };

  return (
    <div
      className="Catalog container rounded p-4 m-4 w-full h-full left-auto right-auto"
      onMouseLeave={() => {
        setActiveType("products");
        setOpen(false);
      }}
    >
      {/* types */}
      <div className="row flex items-center justify-evenly">
        {types.map((item) => (
          <div
            key={item.type}
            className={`item px-4 py-2 cursor-pointer font-bold ${
              activeType === item.type ? " activeType " : ""
            }`}
            onMouseEnter={() => setActiveType(item.type)}
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* categories & subcategories */}
      {activeType && (
        <div className="list mt-4 grid grid-cols-2 gap-6 h-full">
          {getCategories(activeType).map((cat) => (
            <div key={cat.title} className="category">
              <h3 className="font-semibold text-lg mb-2">{cat.title}</h3>
              <ul className="pl-4 space-y-1 text-sm">
                {cat.subcategories.map((sub: string) => (
                  <li
                    key={sub}
                    className="subcategory cursor-pointer "
                    onClick={() => setOpen(false)}
                  >
                    <Link to={`/posters/${activeType}/${cat.title}?sub=${sub}`}>
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Catalog;
