import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "AI Types", href: "#types" },
  { name: "Benefits", href: "#benefits" },
  { name: "Contact", href: "#contact" },
];
function Navbar() {
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <nav className="bg-white md:bg-white/70 shadow-lg fixed w-full backdrop-blur-2xl">
        <div className="app-container flex justify-between items-center p-4">
          <a href="" className="gradient-text">
            Ahmed
          </a>
          <ul>
            <li className="hidden md:flex items-center">
              {links.map((item, index) => {
                return (
                  <a key={index} className="nav-item" href={item.href}>
                    {item.name}
                  </a>
                );
              })}
              <a href="" className="nav-btn ">
                Get Start
              </a>
            </li>
          </ul>
          {/*  mobile menu */}
          <button
            onClick={() => {
              setMobileMenu(!MobileMenu);
            }}
            className="md:hidden flex bg-gray-300 rounded-xl p-2 active:bg-gray-200 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="md:hidden bg-white rounded-b-lg shadow-lg space-y-1 pb-5">
          {MobileMenu &&
            links.map((item, index) => {
              return (
                <a key={index} className="p-4 mobile-nav-item" href={item.href}>
                  {item.name}
                </a>
              );
            })}
          {MobileMenu && (
            <a href="" className="mobile-nav-btn  ">
              Get Start
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
