import HeroBackgroundImg from "@/public/assets/HeroBackground.png";
import HeroBtn from "../Buttons/HeroBtn";
import HammerIcon from "@/public/assets/HammerIcon.svg";
import HandDepositIcon from "@/public/assets/HandDepositIcon.svg";
import ChatCircleIcon from "@/public/assets/ChatsCircle.svg";
import HeroBg from "./components/HeroBg";

function Hero() {
  return (
    <div className="w-full h-[560px] relative ">
      <div className="w-full h-[560px] flex items-end gap-3 relative z-10 py-12">
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <div className="relative z-10  text-white text-2xl font-medium font-['Poppins'] gap-2 text-left w-[80%]">
            Waarmee kunnen we je helpen?
          </div>
          <div className="flex gap-12">
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
