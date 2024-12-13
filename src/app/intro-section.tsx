import intro_profile from "/public/intro-profile.webp";
import LazyImage from "@/components/ui/lazy-image";

export default function IntroSection() {
    return (
        <div id={'about'} className={'place-items-center min-h-screen'}>
            <div className={'flex landscape:flex-row portrait:flex-col portrait:gap-8 portrait:mx-auto '}>
                <div className={'relative landscape:w-[33vw] h-[100vh] portrait:w-screen portrait:h-[33vh]'}>
                    <LazyImage src={intro_profile} alt={'profile pic'} fill={true}
                               className={'object-cover'} placeholder={'blur'}/>
                </div>

                <div className={'flex-grow content-center mx-auto my-auto p-10'}>
                    <div className={'max-w-3xl mx-auto'}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <div className={'text-5xl font-bold mb-12'}>👋 Hey it's me, Ivan</div>
                        <div className={'text-sm font-bold text-zinc-400'}>QUICK FACTS</div>
                        <div className={'text-lg font-semibold mb-8 text-pretty'}>I’m a photographer 📸,
                            dancer 🕺 and guitarist 🎸
                        </div>
                        <div className={'text-sm font-bold text-zinc-400'}>ACADEMICS</div>
                        <div className={'text-lg font-semibold mb-8 text-pretty'}>I’m doing a double degree in Computer
                            Science (AI) 🧑‍💻 and
                            Business Administration (Finance) 📈 at the National University of Singapore (NUS)
                        </div>
                        <div className={'text-sm font-bold text-zinc-400'}>INTERESTS</div>
                        <div className={'text-lg font-semibold mb-8 text-pretty'}>My current interests are in Artificial
                            Intelligence 🤖,
                            Data Analysis 📊, and Finance 🏦
                            
                        </div>
                        <div className={'text-lg font-semibold mb-8 text-pretty'}>
                            Building new tools and applications is my passion, and I love to learn new things! Looking
                            at problems and finding solutions is what I do best. And is what inspired my two most recent
                            projects, a <a href={"https://finance.ivanleekaikiat.com"}>Finance Tracker</a> to
                            replace my excel sheet and a bill splitting telegram bot (@cashshare_bot on telegram).
                        </div>
                    </div>
                
                </div>
            </div>
        
        </div>
    )
}