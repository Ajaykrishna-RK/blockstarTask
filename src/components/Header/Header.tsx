import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const headerLinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 1,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Head & Tail",
      link: "/headtail",
    },
  ];
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);
  return (
    <div className="bg-blue-900 text-white shadow-md">
      <div className=" mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Block Stars Task</h1>
        <div className="sm:flex hidden space-x-4 text-lg font-[600]">
          {headerLinks?.map((item) => (
            <Link
              to={item?.link}
              className={`${
                item?.link === location.pathname ? "underline font-[700]" : ""
              } hover:text-gray-300 transition`}
            >
              {item?.name}
            </Link>
          ))}
        </div>
        <div className="flex  sm:hidden">
          {menuOpen ? (
            <svg
              height="32px"
              id="Layer_1"
              onClick={() => setMenuOpen(false)}
              version="1.1"
              viewBox="0 0 512 512"
              width="32px"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
            >
              <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
            </svg>
          ) : (
            <svg
              onClick={() => setMenuOpen(true)}
              height="32px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 32 32"
              width="32px"
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
            </svg>
          )}
        </div>
      </div>
      <div className="flex sm:hidden absolute w-full bg-blue-900">
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 text-lg font-semibold">
            {headerLinks?.map((item) => (
              <Link
                key={item?.id}
                to={item?.link}
                onClick={() => setMenuOpen(false)}
                className={`block ${
                  item?.link === location?.pathname ? "underline font-bold" : ""
                } hover:text-gray-300 transition`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
