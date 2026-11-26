import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Vtex from "@/components/sections/Vtex";
import ReactSection from "@/components/sections/ReactSection";
import Cinemark from "@/components/sections/Cinemark";
import Stack from "@/components/sections/Stack";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Vtex />
        <ReactSection />
        <Cinemark />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
