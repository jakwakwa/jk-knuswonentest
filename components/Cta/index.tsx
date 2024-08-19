import Image from "next/image";
import CTABgElemntAlt from "../../public/assets/CTA-backgroundElement-2.svg";
import CTABgElement from "../../public/assets/CTA-backgroundElement.svg";
import CTAImg from "../../public/assets/cta-img.png";
import CTAImgTwo from "../../public/assets/cta-img2.png";
import CtaBtn from "../Buttons/CtaBtn";

function Cta({ variant = "left" }) {
  return (
    <section className="pt-[64px] pb-[84px] w-screen relative bg-[#f5f5f5] z-10">
      <div
        className={`flex gap-8 flex-row ${
          variant === "left" ? "flex-row" : "flex-row-reverse"
        } justify-center items-start relative z-10`}
      >
        <div className="w-[496px] h-[372px] shadow-[0px_79px_22px_0px_rgba(0,0,0,0.00),0px_50px_20px_0px_rgba(0,0,0,0.01),0px_28px_17px_0px_rgba(0,0,0,0.03),0px_13px_13px_0px_rgba(0,0,0,0.05),0px_3px_7px_0px_rgba(0,0,0,0.06)] rounded-xl overflow-hidden">
          <Image
            src={variant === "left" ? CTAImg : CTAImgTwo}
            alt="placeholder"
            width={496}
            height={372}
            className="w-[496px] h-[372px] rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-[24px] w-[597px]">
          <div
            className={`w-[597px]

            ${variant === "left" ? "text-[#35bce7]" : "text-[#FF6B38]"}

             text-[32px] font-bold font-['Overlock']`}
          >
            We verbeteren onze woningen
          </div>
          <div className="w-full max-w-[496px]  text-black text-base font-normal font-['Poppins']">
            Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en
            duurzamer te maken. We verbeteren de isolatie met dubbelglas en
            plaatsen moderne cv-ketels en zonnepanelen. Hierdoor stijgt het
            wooncomfort, dalen de energiekosten, en verminderen we de
            CO2-uitstoot. Ons doel is dat al onze huurders kunnen genieten van
            een warme, veilige en toekomstbestendige woning.
            <br />
            <br />
            Wilt u meer weten over onze energiebesparende maatregelen?
          </div>
          <CtaBtn variant={variant as "left" | "right"}>Lees meer</CtaBtn>
        </div>
      </div>

      <div
        className={`w-[254px] h-[274px] absolute ${
          variant === "left" ? "left-[7%] top-[5%]" : "right-[7%] bottom-[7%]"
        }  z-0  `}
      >
        <Image
          src={variant === "left" ? CTABgElement : CTABgElemntAlt}
          alt="placeholder"
          width={597}
          height={597}
          className="object-cover"
        />
      </div>
    </section>
  );
}

export default Cta;
