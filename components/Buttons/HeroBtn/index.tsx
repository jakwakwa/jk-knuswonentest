import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

function HeroBtn({
  title = "default",
  icon,
}: {
  readonly title: string;
  readonly icon: StaticImport;
}) {
  return (
    <button className="flex gap-2 p-4 justify-start items-center w-72 h-16  bg-white hover:bg-slate-200 transition duration-300 ease-in-out rounded-xl shadow text-[#39468c] text-lg font-semibold font-['Poppins']">
      <div className="w-8 h-8 relative">
        <Image src={icon} alt="hammer-icon" />
      </div>
      <div className=" relative">{title}</div>
    </button>
  );
}

export default HeroBtn;
