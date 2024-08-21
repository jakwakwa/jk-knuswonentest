import Image from "next/image";
import CTABgElemntAlt from "@/public/assets/CTA-backgroundElement-2.svg";
import CTABgElement from "@/public/assets/CTA-backgroundElement.svg";
import CTAImg from "@/public/assets/cta-img.png";
import CTAImgTwo from "@/public/assets/cta-img2.png";
import CtaBtn from "../Buttons/CtaBtn";
import { Overlock } from "next/font/google";

const overlock = Overlock({
  variable: "--font-overlock",
  subsets: ["latin"],
  weight: ["700"],
});

function Cta({
  variant = "left",
  body,
  title,
  ctaText,
}: {
  readonly variant: string;
  readonly body: string;
  readonly title: string;
  readonly ctaText: string;
}) {
  const shadowStyle = `shadow-[0px_79px_22px_0px_rgba(0,0,0,0.00),0px_50px_20px_0px_rgba(0,0,0,0.01),0px_28px_17px_0px_rgba(0,0,0,0.03),0px_13px_13px_0px_rgba(0,0,0,0.05),0px_3px_7px_0px_rgba(0,0,0,0.06)]`;
  return (
    <section className="pt-[24px] md:pt-[64px] pb-[24px] md:pb-[84px] relative bg-white z-10 px-12 md:px-24 w-screen">
      <div
        className={`w-full md:max-w-screen-md lg:max-w-full flex gap-8 flex-col-reverse md:flex-row justify-center items-center lg:items-start relative z-10 overflow-x-hidden  md:overflow-visible ${
          variant === "left" ? "flex-row" : "lg:flex-row-reverse"
        } `}
      >
        <div
          className={`w-[238px] h-[136px] lg:w-[496px] lg:h-[372px] ${shadowStyle} rounded-xl hidden lg:inline`}
        >
          <Image
            src={variant === "left" ? CTAImg : CTAImgTwo}
            alt="placeholder"
            width={496}
            height={372}
            className="w-[496px] h-[372px] rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col gap-[21px] max-w-screen-md w-full lg:w-[597px] justify-start md:items-start">
          <div
            className={`w-full lg:w-[597px] text-[32px]  leading-tight font-bold ${
              variant === "left" ? "text-[#35bce7]" : "text-[#FF6B38]"
            } ${overlock.className}`}
          >
            {title}
          </div>
          <div className="w-full lg:max-w-[496px] text-black text-base font-normal font-body bg-white">
            {body}
            <br />
            <br />
            {ctaText}
          </div>
          <CtaBtn variant={variant as "left" | "right"}>Lees meer</CtaBtn>
        </div>
      </div>

      <div
        className={`w-[254px] h-[274px] hidden lg:inline md:visible absolute ${
          variant === "left"
            ? "xl:left-[8.9%] lg:left-[3%] top-[5%]"
            : "bottom-[7%] xl:right-[8.9%] lg:right-[3%]"
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
