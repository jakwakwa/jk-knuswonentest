import Image from "next/image";
import NewsImgOne from "../../public/assets/news-01.jpg";
import NewsImgTwo from "../../public/assets/news-02.jpg";
import NewsImgThree from "../../public/assets/news-03.jpg";
import { Overlock } from "next/font/google";

const overlock = Overlock({
  variable: "--font-overlock",
  subsets: ["latin"],
  weight: ["400"],
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
      body: "KnusWonen werkt hard aan het energiezuiniger maken van ...",
      newsImg: NewsImgTwo,
    },
    {
      id: 3,
      date: "30 januari 2024",
      title: "Energietoeslag: Heeft u er recht op?",
      body: "Steeds meer mensen hebben moeite om hun energierekening te ...",
      newsImg: NewsImgThree,
    },
  ];
  return (
    <section className="w-full h-[572px] relative  bg-[#99a3d8] px-64 py-12">
      <div className="flex flex-col gap-4 w-full h-[444px]">
        <div
          className={`w-[597px] text-[#39468c] text-[32px] font-bold ${overlock.className}
        `}
        >
          Laatste nieuws
        </div>
        <div className="h-[336px] justify-center items-center gap-6 flex">
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
              <div className="w-[264px] h-[152px] left-[12px] top-[172px] absolute">
                <div className="h-[99px] flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-[#999999] text-[11px] font-semibold font-body uppercase">
                    {article.date}
                  </div>
                  <div
                    className={`self-stretch text-[#39468c] text-xl font-bold ${overlock.className}`}
                  >
                    {article.title}
                  </div>
                  <div
                    className={`self-stretch h-[42px] text-[#39468c] text-sm font-normal  font-body
                    `}
                  >
                    {article.body}
                  </div>
                </div>
                <div className="left-[172px] top-[135px] absolute justify-start items-center gap-1 inline-flex">
                  <div className="text-[#39468c] text-sm font-medium font-body">
                    Lees meer
                  </div>
                  <div className="w-4 h-4 relative" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-[21px]  justify-end items-center gap-1 flex">
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
