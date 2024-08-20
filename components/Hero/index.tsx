import HeroBackgroundImg from "@/public/assets/HeroBackground.png";
import HeroBtn from "../Buttons/HeroBtn";
import HammerIcon from "@/public/assets/HammerIcon.svg";
import HandDepositIcon from "@/public/assets/HandDepositIcon.svg";
import ChatCircleIcon from "@/public/assets/ChatsCircle.svg";
import HeroBg from "./components/HeroBg";

function Hero() {
  return (
    <div className="w-full h-[560px] relative ">
      <div className="w-full h-[560px] flex items-end gap-3 relative z-10 py-6">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div
            className={`relative z-10 text-white text-[24px]  gap-2 text-left w-[60%] font-medium`}
          >
            Waarmee kunnen we je helpen?
          </div>
          <div className="flex gap-6">
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
