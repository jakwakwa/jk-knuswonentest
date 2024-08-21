import FacebookIcn from "@/public/assets/facebook.svg";
import LinkedInIcn from "@/public/assets/linkedin.svg";
import Image from "next/image";
import { Overlock } from "next/font/google";
import Link from "next/link";

const overlock = Overlock({
  variable: "--font-overlock",
  subsets: ["latin"],
  weight: ["700"],
});

function Footer() {
  const footerSections = [
    {
      title: "Bel of mail ons",
      body: "012 - 345 67 89",
    },
    {
      title: "Openingstijden",
      body: "Maandag t/m donderdag van 8:30 tot 16:30 uur.",
    },
    {
      title: "Kom langs op afspraak",
      body: "Straatweglaan 123",
    },
    {
      title: "Volg ons op onze sociale kanalen",
      body: null,
      icons: [
        {
          src: FacebookIcn,
          alt: "Facebook",
          link: "https://www.facebook.com",
        },
        {
          src: LinkedInIcn,
          alt: "LinkedIn",
          link: "https://www.linkedin.com",
        },
      ],
    },
  ];

  const bootomFooterSections = [
    {
      title: "Privacy",
      link: "#privacy",
    },
    {
      title: "Cookieverklaring",
      link: "#cookieverklaring",
    },
    {
      title: "Disclaimer",
      link: "#disclaimer",
    },
  ];

  return (
    <footer className="w-full h-auto md:h-[284px] flex flex-col items-center bg-[#e4e4e4] pt-12">
      <div className="w-5/6 flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center mt-4 mb-12 max-w-screen-xl gap-4 md:gap-8">
        {footerSections.map((section, index) => (
          <div
            className="w-full h-[84px] flex flex-col items-start"
            key={index}
          >
            <div
              className={`text-[#1e1e1e] text-xl font-bold ${overlock.className}`}
            >
              {section.title}
            </div>
            <div className="text-[#1e1e1e] text-base  font-body mt-2 font-normal">
              {section.body}
            </div>

            {section.icons && (
              <div className="flex gap-2 mt-2">
                {section.icons.map((icon, index) => (
                  <Link
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    <Image src={icon.src} alt={icon.alt} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className=" w-full h-18 md:h-12 bg-white">
        <div className="w-5/6 flex flex-col md:flex-row justify-between items-center mt-4 mb-12 max-w-screen-xl mx-auto gap-4 md:gap-0">
          <div
            className="w-full flex gap-3  items-start justify-start"
            id="bottom-links"
          >
            {bootomFooterSections.map((section, index) => (
              <Link
                className="text-[#1e1e1e] text-sm font-normal font-body hover:underline"
                id={section.link}
                key={index}
                href={`#${section.link}`}
              >
                {section.title}
              </Link>
            ))}
          </div>
          <div className="w-full flex items-center justify-end">
            <div className="text-xs font-normal font-body w-full inline-flex text-right justify-start md:justify-end text-black">
              © KnusWonen 2024
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
