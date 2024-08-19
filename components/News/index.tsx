import Image from "next/image";
import NewsImgOne from "../../public/assets/news-01.jpg";
import NewsImgTwo from "../../public/assets/news-02.jpg";
import NewsImgThree from "../../public/assets/news-03.jpg";

function News() {
  return (
    <section className="w-[1512px] h-[572px] relative">
      <div className="w-[1512px] h-[572px] left-0 top-0  bg-[#99a3d8]" />
      <div className="w-[912px] h-[444px] left-[300px] top-[64px] absolute">
        <div className="h-[21px] left-[701px] top-[423px] absolute justify-start items-center gap-1 inline-flex">
          <div className="text-[#39468c] text-sm font-medium font-['Poppins']">
            Bekijk alle nieuwsberichten
          </div>
          <div className="w-4 h-4 relative" />
        </div>
        <div className="w-[597px] left-0 top-0 absolute text-[#39468c] text-[32px] font-bold font-['Overlock']">
          Laatste nieuws
        </div>
        <div className="h-[336px] left-0 top-[63px] absolute justify-start items-start gap-6 inline-flex">
          <div className="w-72 h-[336px] relative bg-white rounded-xl shadow">
            <Image
              className="w-72 h-40 left-0 top-0 absolute rounded-tl-xl rounded-tr-xl"
              src={NewsImgOne}
              alt="placeholder"
              width={288}
              height={160}
            />
            <div className="w-[264px] h-[152px] left-[12px] top-[172px] absolute">
              <div className="h-[99px] left-0 top-0 absolute flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-[#999999] text-[11px] font-semibold font-['Poppins'] uppercase">
                  5 maart 2024
                </div>
                <div className="self-stretch text-[#39468c] text-xl font-bold font-['Overlock']">
                  Telefoonstoring
                </div>
                <div className="self-stretch h-[42px] text-[#39468c] text-sm font-normal font-['Poppins']">
                  Update: Telefoonstoring verholpen
                </div>
              </div>
              <div className="left-[172px] top-[135px] absolute justify-start items-center gap-1 inline-flex">
                <div className="text-[#39468c] text-sm font-medium font-['Poppins']">
                  Lees meer
                </div>
                <div className="w-4 h-4 relative" />
              </div>
            </div>
          </div>
          <div className="w-72 h-[336px] relative bg-white rounded-xl shadow">
            <Image
              className="w-72 h-40 left-0 top-0 absolute rounded-tl-xl rounded-tr-xl"
              src={NewsImgTwo}
              alt="placeholder"
              width={288}
              height={160}
            />
            <div className="w-[264px] h-[152px] left-[12px] top-[172px] absolute">
              <div className="h-[123px] left-0 top-0 absolute flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-[#999999] text-[11px] font-semibold font-['Poppins'] uppercase">
                  17 februari 2024
                </div>
                <div className="self-stretch text-[#39468c] text-xl font-bold font-['Overlock']">
                  Energiebesparing - Wat doet KnusWonen?
                </div>
                <div className="self-stretch h-[42px] text-[#39468c] text-sm font-normal font-['Poppins']">
                  KnusWonen werkt hard aan het energiezuiniger maken van ...
                </div>
              </div>
              <div className="left-[172px] top-[135px] absolute justify-start items-center gap-1 inline-flex">
                <div className="text-[#39468c] text-sm font-medium font-['Poppins']">
                  Lees meer
                </div>
                <div className="w-4 h-4 relative" />
              </div>
            </div>
          </div>
          <div className="w-72 h-[336px] relative bg-white rounded-xl shadow">
            <Image
              className="w-72 h-40 left-0 top-0 absolute rounded-tl-xl rounded-tr-xl"
              src={NewsImgThree}
              alt="placeholder"
              width={288}
              height={160}
            />
            <div className="w-[264px] h-[152px] left-[12px] top-[172px] absolute">
              <div className="h-[123px] left-0 top-0 absolute flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-[#999999] text-[11px] font-semibold font-['Poppins'] uppercase">
                  30 januari 2024
                </div>
                <div className="self-stretch text-[#39468c] text-xl font-bold font-['Overlock']">
                  Energietoeslag: Heeft u er recht op?
                </div>
                <div className="self-stretch h-[42px] text-[#39468c] text-sm font-normal font-['Poppins']">
                  Steeds meer mensen hebben moeite om hun energierekening te ...
                </div>
              </div>
              <div className="left-[172px] top-[135px] absolute justify-start items-center gap-1 inline-flex">
                <div className="text-[#39468c] text-sm font-medium font-['Poppins']">
                  Lees meer
                </div>
                <div className="w-4 h-4 relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
