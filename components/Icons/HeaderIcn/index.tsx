import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

function HeaderIcn({ icon }: { readonly icon: StaticImport }) {
  return (
    <div className="w-12 h-12 p-2.5 justify-start items-center gap-2.5 inline-flex">
      <div className="w-7 h-7 relative">
        <Image src={icon} alt="logo" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default HeaderIcn;
