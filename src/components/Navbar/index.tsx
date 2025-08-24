import {
  faBars,
  faBorderAll,
  faPlus,
  faXmark,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import SearchBar from "../SearchBar";
import { navs } from "./navs";
import BrandLogoLg from "../../../public/brand/logo TM transparent full.png";
import BrandLogoSm from "../../../public/brand/logo TM transparent.png";
import "./style.scss";
import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ isOpen, setOpen }: Props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // listen to resize
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close expanded search when screen size changes to larger
  useEffect(() => {
    if (width > 767 && isSearchExpanded) {
      setIsSearchExpanded(false);
    }
  }, [width, isSearchExpanded]);

  const shouldShowSearchIcon = width <= 767;
  const shouldShowInlineSearch = width > 767;

  return (
    <>
      <nav className="Navbar">
        <div className="navbar-container">
          {/* Logo Section */}
          <div className="logo-section">
            <Link to="/" className="logo-link">
              <img
                className="logo"
                src={width > 1000 ? BrandLogoLg : BrandLogoSm}
                alt="Brand Logo"
              />
            </Link>
          </div>

          {/* Catalog Button */}
          <div className="catalog-section">
            <button
              className="catalogBtn"
              onClick={() => setOpen(!isOpen)}
              aria-label={isOpen ? "Close catalog" : "Open catalog"}
            >
              <FontAwesomeIcon
                icon={isOpen ? faXmark : faBorderAll}
                className="catalog-icon"
              />
              <span className="catalog-text">catalog</span>
            </button>
          </div>

          {/* Search Section - Desktop/Tablet */}
          {shouldShowInlineSearch && (
            <div className="search-section">
              <SearchBar />
            </div>
          )}

          {/* Search Button - Mobile */}
          {shouldShowSearchIcon && (
            <div className="search-button-section">
              <button
                className="search-toggle-btn"
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                aria-label={isSearchExpanded ? "Close search" : "Open search"}
              >
                <FontAwesomeIcon
                  icon={isSearchExpanded ? faXmark : faSearch}
                  className="search-icon"
                />
              </button>
            </div>
          )}

          {/* Navigation Actions */}
          <div className="actions-section">
            <div className="nav-actions">
              {navs.map((nav) => (
                <Link
                  to={nav.url}
                  className="nav-action-link"
                  key={nav.url}
                  aria-label={nav.label || nav.url}
                >
                  <FontAwesomeIcon icon={nav.icon} />
                </Link>
              ))}
            </div>

            <Link to="/new" className="new-poster-link">
              <FontAwesomeIcon icon={faPlus} />
              <span className="new-poster-text">New poster</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-section">
            <button className="mobile-menu-btn" aria-label="Open mobile menu">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </nav>

      {/* Expanded Search Bar for Mobile */}
      {shouldShowSearchIcon && isSearchExpanded && (
        <div className="expanded-search-container">
          <div className="expanded-search-content">
            <SearchBar />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
