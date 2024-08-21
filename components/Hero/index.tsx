import HeroBackgroundImg from "@/public/assets/HeroBackground.png";
import HeroBtn from "../Buttons/HeroBtn";
import HammerIcon from "@/public/assets/HammerIcon.svg";
import HandDepositIcon from "@/public/assets/HandDepositIcon.svg";
import ChatCircleIcon from "@/public/assets/ChatsCircle.svg";
import HeroBg from "./components/HeroBg";

function Hero() {
  return (
    <div className="w-screen h-[560px] relative">
      <div className="w-full h-[560px] flex items-end gap-3 relative z-10 py-6">
        <div className="w-full flex flex-col  items-center justify-center md:justify-center md:items-center gap-4">
          <div
            className={`relative z-10 text-white bg-[#9d1ea9]/50 md:bg-white/0 text-[24px] gap-2 text-left md:w-[60%] font-medium w-[90vw] p-2`}
          >
            Waarmee kunnen we je helpen?
          </div>
          <div className="flex flex-col w-full md:w-5/6 lg:w-1/2 justify-center items-center md:flex-row lg:gap-12 md:gap-8 gap-4">
            <HeroBtn title="Reparatie melden" icon={HammerIcon} />
            <HeroBtn title="Huur betalen" icon={HandDepositIcon} />
            <HeroBtn title="Contact opnemen" icon={ChatCircleIcon} />
          </div>
        </div>
      </div>
      <HeroBg HeroBgSrc={HeroBackgroundImg} />
    </div>
  );
}

export default Hero;
