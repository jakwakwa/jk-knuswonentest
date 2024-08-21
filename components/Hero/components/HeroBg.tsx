import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

function HeroBg({ HeroBgSrc }: { readonly HeroBgSrc: StaticImport }) {
  return (
    <div className="w-screen h-[560px] left-0 top-0 overflow-x-hidden">
      <div className="w-full h-[560px] left-0 top-0 absolute z-0">
        <Image
          src={HeroBgSrc}
          alt="hero-bg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default HeroBg;
