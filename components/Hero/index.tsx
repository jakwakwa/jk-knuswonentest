import Image from "next/image";
import HeroBg from "../../public/assets/HeroBackground.png";
import HeroBtn from "../Buttons/HeroBtn";
import HammerIcon from "../../public/assets/HammerIcon.svg";
import HandDepositIcon from "../../public/assets/HandDepositIcon.svg";
import ChatCircleIcon from "../../public/assets/ChatsCircle.svg";

function Hero() {
  return (
    <div className="w-[1512px] h-[560px] relative">
      <div className="w-[1512px] h-[560px] left-0 top-0 ">
        <div className="w-[1512px] h-[560px] left-0 top-0 absolute bg-[#d9d9d9]" />
        <div className="w-[1512px] h-[560px] left-0 top-0 absolute">
          <Image
            src={HeroBg}
            alt="hero-bg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-[912px] h-[116px] left-[300px] top-[420px] absolute">
        <div className="w-72 h-16 p-4 left-0 top-[52px] absolute justify-start items-center gap-3 inline-flex">
          <HeroBtn title="Reparatie melden" icon={HammerIcon} />
        </div>
        <div className="w-72 h-16 p-4 left-[312px] top-[52px] absolute justify-start items-center gap-3 inline-flex">
          <HeroBtn title="Huur betalen" icon={HandDepositIcon} />
        </div>
        <div className="w-72 h-16 p-4 left-[624px] top-[52px] absolute justify-start items-center gap-3 inline-flex">
          <HeroBtn title="Contact opnemen" icon={ChatCircleIcon} />
        </div>
        <div className="left-0 top-0 absolute text-white text-2xl font-medium font-['Poppins']">
          Waarmee kunnen we je helpen?
        </div>
      </div>
    </div>
  );
}

export default Hero;
