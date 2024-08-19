import React from "react";

function Footer() {
  return (
    <footer className="w-[1512px] h-[284px] relative">
      <div className="w-[1512px] h-[236px]  bg-[#e4e4e4]" />
      <div className="w-8 h-8 left-[1115px] top-[100px] absolute" />
      <div className="w-8 h-8 left-[1075px] top-[100px] absolute" />
      <div className="w-72 h-[84px] left-[144px] top-[64px] absolute">
        <div className="left-0 top-0 absolute text-[#1e1e1e] text-xl font-bold font-['Overlock']">
          Bel of mail ons
        </div>
        <div className="w-72 left-0 top-[36px] absolute text-[#1e1e1e] text-base font-normal font-['Poppins']">
          012 - 345 67 89
          <br />
          klantenservice@knuswonen.nu
        </div>
      </div>
      <div className="w-72 h-[108px] left-[456px] top-[64px] absolute">
        <div className="left-0 top-0 absolute text-[#1e1e1e] text-xl font-bold font-['Overlock']">
          Openingstijden
        </div>
        <div className="w-72 left-0 top-[36px] absolute text-[#1e1e1e] text-base font-normal font-['Poppins']">
          Maandag t/m donderdag van 8:30 tot 16:30 uur.
          <br />
          Vrijdag van 8:30 tot 12:00 uur
        </div>
      </div>
      <div className="w-72 h-[84px] left-[768px] top-[64px] absolute">
        <div className="left-0 top-0 absolute text-[#1e1e1e] text-xl font-bold font-['Overlock']">
          Kom langs op afspraak
        </div>
        <div className="w-72 left-0 top-[36px] absolute text-[#1e1e1e] text-base font-normal font-['Poppins']">
          Straatweglaan 123
          <br />
          1234 AB Dorpstad
        </div>
      </div>
      <div className="left-[1080px] top-[64px] absolute text-[#1e1e1e] text-xl font-bold font-['Overlock']">
        Volg ons op onze sociale kanalen
      </div>
      <div className="w-[1512px] h-12 left-0 top-[236px] absolute">
        <div className="w-[1512px] h-12 left-0 top-0 absolute bg-white" />
        <div className="left-[1252px] top-[15px] absolute text-black text-xs font-normal font-['Poppins']">
          © KnusWonen 2024
        </div>
        <div className="left-[144px] top-[15px] absolute text-black text-xs font-normal font-['Poppins'] underline">
          Privacy
        </div>
        <div className="left-[212px] top-[15px] absolute text-black text-xs font-normal font-['Poppins'] underline">
          Cookieverklaring
        </div>
        <div className="left-[337px] top-[15px] absolute text-black text-xs font-normal font-['Poppins'] underline">
          Disclaimer
        </div>
      </div>
    </footer>
  );
}

export default Footer;
