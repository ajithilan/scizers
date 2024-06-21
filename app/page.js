import { Section_1 } from "./components/section1/section1";
import { Section_2 } from "./components/section2/section2";
import { Section_3 } from "./components/section3/section3";
import { FeatureSection } from "./components/featuresection/featuresection";
import { Footer } from "./components/footer/footer";

export default function Home() {

  return (
    <main className="font-poppins flex flex-col items-center min-h-screen w-[1450px] ph:w-dvw m-auto overflow-hidden">
      <Section_1/>
      <FeatureSection/>
      <div className="w-[1120px] ph:w-full">
        <Section_2/>
        <Section_3/>
      </div>
      <Footer/>
    </main>
  );
}
