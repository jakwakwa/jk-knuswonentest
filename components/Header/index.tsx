import Image from "next/image";
import Logo from "../../public/assets/logo.svg";
import SearchIcon from "../../public/assets/search-icon.svg";
import ProfileIcon from "../../public/assets/profile-icon.svg";

function Header() {
  return (
    <header>
      <div
        className="flex flex-row items-center w-screen h-20 bg-white shadow px-24
      justify-around

      "
      >
        <div className="w-[208px] h-[20px] relative">
          <Image src={Logo} alt="logo" className="w-full h-full object-cover" />
        </div>
        <div className="flex w-[353px] h-20 relative">
          <div className="px-3 h-full inline-flex items-center">
            <div className="text-[#39468c] text-base font-semibold font-['Poppins']">
              Ik huur
            </div>
          </div>
          <div className="px-3 h-full inline-flex items-center">
            <div className="text-[#39468c] text-base font-semibold font-['Poppins']">
              Ik zoek
            </div>
          </div>
          <div className="px-3 h-full inline-flex items-center">
            <div className="text-[#39468c] text-base font-semibold font-['Poppins']">
              Over ons
            </div>
          </div>
          <div className="px-3 h-full inline-flex items-center">
            <div className="text-[#39468c] text-base font-semibold font-['Poppins']">
              Projecten
            </div>
          </div>
        </div>
        <div
          className="
        w-28

        "
        >
          <div className="w-12 h-12 p-2.5 justify-start items-center gap-2.5 inline-flex">
            <div className="w-7 h-7 relative">
              <Image
                src={SearchIcon}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-12 h-12 p-2.5 justify-start items-center gap-2.5 inline-flex">
            <div className="w-7 h-7 relative">
              <Image
                src={ProfileIcon}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
