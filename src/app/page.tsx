import Header from "@/components/header";
import HeroSection from "@/app/hero-section";
import IntroSection from "@/app/intro-section";
import ResumeSection from "@/app/resume-section";
import Background from "@/components/background";

export default function Page() {
    return (
        <div>
            <Background/>
            <Header/>
            <HeroSection/>
            <IntroSection/>
            <ResumeSection/>
        </div>
    );
}