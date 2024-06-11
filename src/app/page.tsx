import Header from "@/components/header";
import FirstSection from "@/app/first-section";
import IntroSection from "@/app/intro-section";

export default function Page() {
  return (
      <div className={" background bg-[url('/astro-bg.webp')] bg-cover w-screen h-screen"}>
          <div ></div>
          <Header/>
          <FirstSection/>
          <IntroSection/>
      </div>
  );
}