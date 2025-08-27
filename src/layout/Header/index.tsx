import { useEffect, useState } from "react";
import Catalog from "../../components/Catalog";
import Navbar from "../../components/Navbar";
import "./style.scss";
function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = window.location.pathname;
  useEffect(() => {
    const handleScroll = () => {
      if (!window.scrollY) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <div className="Header sticky top-0 z-50">
      <div className="relative">
        {pathname != "/login" && <Navbar isOpen={open} setOpen={setOpen} />}

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out`}
          style={{ maxHeight: open ? "100vh" : "0px" }}
        >
          <Catalog isOpen={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
}

export default Header;
