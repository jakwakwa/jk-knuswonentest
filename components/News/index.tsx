import Image from "next/image";
import NewsImgOne from "../../public/assets/news-01.jpg";
import NewsImgTwo from "../../public/assets/news-02.jpg";
import NewsImgThree from "../../public/assets/news-03.jpg";
import Arrow from "@/public/assets/arrow.svg";
import { Overlock } from "next/font/google";

const overlock = Overlock({
  variable: "--font-overlock",
  subsets: ["latin"],
  weight: ["700"],
});

function News() {
  const newsArticles = [
    {
      id: 1,
      date: "5 maart 2024",
      title: "Telefoonstoring",
      body: "Update: Telefoonstoring verholpen",
      newsImg: NewsImgOne,
    },
    {
      id: 2,
      date: "17 februari 2024",
      title: "Energiebesparing - Wat doet KnusWonen?",
      body: "KnusWonen werkt hard aan het energiezuiniger maken van...",
      newsImg: NewsImgTwo,
    },
    {
      id: 3,
      date: "30 januari 2024",
      title: "Energietoeslag: Heeft u er recht op?",
      body: "Steeds meer mensen hebben moeite om hun energierekening te...",
      newsImg: NewsImgThree,
    },
  ];
  return (
    <section className="w-screen h-auto md:h-[572px] relative  bg-[#99a3d8] px-12 lg:px-64 xl:px-128 pt-0 pb-12 md:py-12">
      <div className="flex flex-col gap-4 w-full lg:max-w-screen-lg h-auto md:h-[444px] mx-auto">
        <div
          className={`w-3/4 px-12 pt-6 md:px-0 md:pt-0 md:w-[597px] text-[#39468c] text-[32px] font-extrabold ${overlock.className}
        `}
        >
          Laatste nieuws
        </div>
        <div className="md:h-[336px] justify-center items-center gap-6 flex flex-col md:flex-row">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="w-72 h-[336px] relative bg-white rounded-xl shadow-xl"
            >
              <Image
                className="w-72 h-40 rounded-tl-xl rounded-tr-xl"
                src={article.newsImg}
                alt="placeholder"
                width={288}
                height={160}
              />
              <div className="flex flex-col w-full h-full px-4  pt-4">
                <div className="flex flex-col justify-start items-start gap-2 w-full h-[130px]">
                  <div className="self-stretch text-[#999999] text-[11px] font-semibold font-body uppercase leading-[0px] mb-2 mt-1">
                    {article.date}
                  </div>
                  <div
                    className={`self-stretch text-[#39468c] text-xl font-bold ${overlock.className} leading-[1]`}
                  >
                    {article.title}
                  </div>
                  <div
                    className={`self-stretch h-[42px] text-[#39468c] text-sm font-normal mt-2 font-body
                    `}
                  >
                    {article.body}
                  </div>
                </div>
                <div className="justify-end items-center gap-2 flex">
                  <div className="text-[#39468c] text-sm font-medium font-body">
                    Lees meer
                  </div>
                  <div className="w-4 h-4 relative">
                    <Image
                      src={Arrow}
                      alt="placeholder"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-[21px]  justify-end items-center gap-1 flex mt-2">
          <div className="text-[#39468c] text-sm font-medium font-body">
            Bekijk alle nieuwsberichten
          </div>
          <div className="w-4 h-4 relative" />
        </div>
      </div>
    </section>
  );
}

export default News;
