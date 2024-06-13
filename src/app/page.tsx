import Header from "@/components/header";
import HeroSection from "@/app/hero-section";
import IntroSection from "@/app/intro-section";
import ResumeSection from "@/app/resume-section";
import Background from "@/components/background";
import ProjectsSection from "@/app/projects-section";
import PhotosSection from "@/app/photos-section";

export default function Page() {
    return (
        <div>
            <Background/>
            {/*<Header/>*/}
            <HeroSection/>
            <IntroSection/>
            <ResumeSection/>
            <ProjectsSection/>
            <PhotosSection/>
        </div>
    );
}