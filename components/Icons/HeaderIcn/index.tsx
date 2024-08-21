import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

function HeaderIcn({ icon }: { readonly icon: StaticImport }) {
  return (
    <div className="w-9 h-9 md:w-12 md:h-12 p-1 md:p-2.5 justify-end md:justify-start items-center gap-0 md:gap-2.5 inline-flex">
      <div className="w-7 h-7 relative">
        <Image src={icon} alt="logo" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default HeaderIcn;
