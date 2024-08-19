"use client";
import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import ProfileIcon from "@/public/assets/profile-icon.svg";
import HeaderIcn from "@/components/Icons/HeaderIcn";
import SearchIcn from "@/public/assets/search-icon.svg";

function Header() {
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
      <div className="flex flex-row items-center w-screen h-20 bg-white shadow px-24 justify-around">
        <div className="w-[208px] h-[20px] relative">
          <Image src={Logo} alt="logo" className="w-full h-full object-cover" />
        </div>

        <nav className="flex flex-row gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="text-black"
              onClick={() => {
                console.log("clicked nav item:", item.name);
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>
        <div className="w-28">
          <HeaderIcn icon={SearchIcn} />
          <HeaderIcn icon={ProfileIcon} />
        </div>
      </div>
    </header>
  );
}

export default Header;
