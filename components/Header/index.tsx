"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import ProfileIcon from "@/public/assets/profile-icon.svg";
import HeaderIcn from "@/components/Icons/HeaderIcn";
import SearchIcn from "@/public/assets/search-icon.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close

  const navItems = [
    {
      id: 1,
      name: "Ik huur",
    },
    {
      id: 2,
      name: "Ik zoek",
    },
    {
      id: 3,
      name: "Over ons",
    },
    {
      id: 4,
      name: "Projecten",
    },
  ];

  return (
    <header>
      <div className="flex flex-row items-center w-screen h-20 bg-white shadow justify-between lg:justify-around px-8 lg:px-24">
        <div className="relative md:w-[208px] md:h-[20px] w-[104px] h-[10px]">
          <Image src={Logo} alt="logo" className="w-full h-full object-cover" />
        </div>

        <nav className="hidden md:flex md:flex-row gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="text-black hover:underline hover:opacity-65 hover:text-[#335f6d] transition duration-300 ease-in-out"
              onClick={() => {
                console.log("clicked nav item:", item.name);
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Hamburger menu */}
        <div className="md:hidden">
          <button
            className="text-black hover:text-[#335f6d] transition duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed w-full h-[280px]
            left-0
            top-0
            z-20
            py-14
            px-12
            bg-white"
          >
            <nav className="fixed md:relative w-screen flex flex-col gap-4 justify-start items-start">
              <div className="fixed top-4 left-8 text-black z-30 font-normalhover:underline hover:opacity-65 hover:text-[#335f6d] transition duration-300 ease-in-out underline w-screen">
                <div className="fixed text-black z-30 font-normalhover:underline hover:opacity-65 hover:text-[#335f6d] transition duration-300 ease-in-out underline text-left w-1/2 pb-4 text-xs">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-black hover:underline hover:opacity-65"
                  >
                    Close
                  </button>
                </div>
              </div>

              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="text-black hover:underline hover:opacity-65 mt-2"
                  onClick={() => {
                    console.log("clicked nav item:", item.name);
                    setIsMenuOpen(false); // Close the menu after clicking a nav item
                  }}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}

        <div className="w-28">
          <HeaderIcn icon={SearchIcn} />
          <HeaderIcn icon={ProfileIcon} />
        </div>
      </div>
    </header>
  );
}

export default Header;
