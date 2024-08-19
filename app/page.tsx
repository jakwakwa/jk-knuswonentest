import Cta from "@/components/Cta";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="
      w-screen
      h-screen
      bg-[#f5f5f5]
      flex
      flex-col
      items-center
      flex-start
    "
    >
      <Header />
      <Hero />
      <Cta variant="left" />
      <News />
      <Cta variant="right" />
      <Footer />
    </main>
  );
}
