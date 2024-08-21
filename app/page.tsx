import Cta from "@/components/Cta";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  const ctaTextOne = {
    variant: "left",
    title: "We verbeteren onze woningen",
    body: `Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en duurzamer te maken. We verbeteren de isolatie met dubbelglas en plaatsen moderne cv-ketels en zonnepanelen. Hierdoor stijgt het wooncomfort, dalen de energiekosten, en verminderen we de CO2-uitstoot. Ons doel is dat al onze huurders kunnen genieten van een warme, veilige en toekomstbestendige woning.`,
    cta: `Wilt u meer weten over onze energiebesparende maatregelen?`,
  };

  const ctaTextTwo = {
    variant: "right",
    title: "Schrijf je in voor onze nieuwsbrief",
    body: `Wil je als eerste op de hoogte zijn van het laatste nieuws over jouw woning en buurt? Schrijf je dan in voor de nieuwsbrief van KnusWonen! Iedere maand sturen we je een update met belangrijk nieuws, praktische tips, en informatie over onderhoudsprojecten en buurtactiviteiten. Of je nu wilt weten wanneer er werkzaamheden gepland zijn, of je geïnteresseerd bent in nieuwe initiatieven in de wijk, onze nieuwsbrief zorgt ervoor dat je niets mist.`,
    cta: `Schrijf je vandaag nog in en blijf verbonden met KnusWonen!`,
  };

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
      <Cta
        variant="left"
        title={ctaTextOne.title}
        body={ctaTextOne.body}
        ctaText={ctaTextOne.cta}
      />

      <News />
      <Cta
        variant="right"
        title={ctaTextTwo.title}
        body={ctaTextTwo.body}
        ctaText={ctaTextTwo.cta}
      />
      <Footer />
    </main>
  );
}
