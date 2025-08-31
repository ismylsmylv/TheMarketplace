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
      <nav className="sticky top-0 z-[1000] w-full border-b border-gray-200 bg-white">
        <div
          className="mx-auto grid h-20 max-w-[1200px] grid-cols-[auto_auto_1fr_auto_auto] items-center gap-4 px-4 
                       [grid-template-areas:'logo_catalog_search_actions_mobile']
                       sm:gap-3 md:gap-4 lg:gap-6 xl:max-w-[1400px] xl:px-8 xl:gap-8
                       max-sm:grid-cols-[auto_auto_1fr_auto] max-sm:[grid-template-areas:'logo_catalog_search_mobile']
                       max-[700px]:grid-cols-[auto_1fr_auto_auto] max-[700px]:[grid-template-areas:'logo_search_catalog_mobile'] max-[700px]:gap-1"
        >
          {/* Logo Section */}
          <div className="[grid-area:logo]">
            <Link to="/" className="block">
              <img
                className="h-20 w-auto object-contain transition-opacity duration-200 hover:opacity-80
                          sm:h-16 md:h-14 lg:h-16 xl:h-20
                          max-sm:h-10
                          max-[700px]:h-9"
                src={width > 1000 ? BrandLogoLg : BrandLogoSm}
                alt="Brand Logo"
              />
            </Link>
          </div>

          {/* Catalog Button */}
          <div className="[grid-area:catalog]">
            <button
              className="flex min-h-12 items-center justify-center gap-2 rounded-lg border-none bg-blue-600 px-6 py-3 
                        cursor-pointer transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0
                        sm:min-h-10 sm:px-4 sm:py-2.5
                        max-sm:min-h-10 max-sm:px-3 max-sm:py-2.5
                        max-[700px]:min-h-9 max-[700px]:px-2.5 max-[700px]:py-2 max-[700px]:rounded-md"
              onClick={() => setOpen(!isOpen)}
              aria-label={isOpen ? "Close catalog" : "Open catalog"}
            >
              <FontAwesomeIcon
                icon={isOpen ? faXmark : faBorderAll}
                className="text-white text-base sm:text-sm"
              />
              <span
                className="text-white font-semibold capitalize text-sm
                             sm:hidden md:inline
                             max-sm:hidden
                             max-[700px]:hidden"
              >
                catalog
              </span>
            </button>
          </div>

          {/* Search Section - Desktop/Tablet */}
          {shouldShowInlineSearch && (
            <div
              className="[grid-area:search] w-full max-w-md  justify-self-center
                           lg:max-w-lg xl:max-w-xl
                           max-sm:max-w-xs
                           max-[700px]:mx-2 max-[700px]:justify-self-stretch"
            >
              <SearchBar />
            </div>
          )}

          {/* Search Button - Mobile */}
          {shouldShowSearchIcon && (
            <div className="[grid-area:search] justify-self-end">
              <button
                className="flex h-12 min-w-12 items-center justify-center rounded-lg border border-gray-300 
                          bg-transparent p-3 text-gray-700 cursor-pointer transition-all duration-200 
                          hover:bg-gray-100 hover:border-gray-400
                          max-sm:h-10 max-sm:min-w-10 max-sm:p-2.5
                          max-[700px]:h-9 max-[700px]:min-w-9 max-[700px]:p-2 max-[700px]:rounded-md"
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                aria-label={isSearchExpanded ? "Close search" : "Open search"}
              >
                <FontAwesomeIcon
                  icon={isSearchExpanded ? faXmark : faSearch}
                  className="text-gray-700"
                />
              </button>
            </div>
          )}

          {/* Navigation Actions */}
          <div
            className="[grid-area:actions] flex items-center gap-3
                         max-lg:hidden"
          >
            <div className="flex items-center gap-2">
              {navs.map((nav) => (
                <Link
                  to={nav.url}
                  className="flex h-12 min-w-12 items-center justify-center rounded-lg border border-gray-300 
                            p-3 text-gray-700 no-underline transition-all duration-200 
                            hover:bg-gray-100 hover:border-gray-400"
                  key={nav.url}
                  aria-label={nav.url}
                >
                  <FontAwesomeIcon icon={nav.icon} />
                </Link>
              ))}
            </div>

            <Link
              to="/new"
              className="flex h-12 items-center justify-center gap-2 rounded-lg border border-gray-300 
                        px-4 py-3 text-gray-700 no-underline transition-all duration-200 whitespace-nowrap
                        hover:bg-gray-100 hover:border-gray-400
                        xl:px-4
                        max-xl:[&_.new-poster-text]:hidden"
            >
              <FontAwesomeIcon icon={faPlus} />
              <span className="new-poster-text text-sm font-medium">
                New poster
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="[grid-area:mobile] hidden max-lg:block">
            <button
              className="flex h-12 min-w-12 items-center justify-center rounded-lg border border-gray-300 
                        bg-transparent p-3 text-gray-700 cursor-pointer transition-all duration-200 
                        hover:bg-gray-100 hover:border-gray-400
                        max-sm:h-10 max-sm:min-w-10 max-sm:p-2.5
                        max-[700px]:h-9 max-[700px]:min-w-9 max-[700px]:p-2 max-[700px]:rounded-md"
              aria-label="Open mobile menu"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </nav>

      {/* Expanded Search Bar for Mobile */}
      {shouldShowSearchIcon && isSearchExpanded && (
        <div className="sticky top-20 z-[999] border-b border-gray-200 bg-white animate-in slide-in-from-top-2 duration-300">
          <div className="mx-auto max-w-[1200px] p-4 xl:max-w-[1400px] xl:px-8">
            <SearchBar />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
