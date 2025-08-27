import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router";
import Catalog from "../../components/Catalog";
import Navbar from "../../components/Navbar";
import "./style.scss";

const HIDDEN_ROUTES = ["/login", "/reset-password"];

function Header({ className = "" }) {
  const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(false);
  const location = useLocation();

  const isVisible = !HIDDEN_ROUTES.includes(location.pathname);

  const handleScroll = useCallback(() => {
    if (window.scrollY === 0) {
      setIsCatalogOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    setIsCatalogOpen(false);
  }, [location.pathname]);

  if (!isVisible) {
    return null;
  }

  return (
    <header className={`Header sticky top-0 z-50 ${className}`}>
      <div className="relative">
        <Navbar isOpen={isCatalogOpen} setOpen={setIsCatalogOpen} />

        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight: isCatalogOpen ? "100vh" : "0px",
            opacity: isCatalogOpen ? 1 : 0,
          }}
          aria-expanded={isCatalogOpen}
          role="region"
          aria-label="Catalog menu"
        >
          <Catalog isOpen={isCatalogOpen} setOpen={setIsCatalogOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
