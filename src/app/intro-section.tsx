import Image from "next/image";
import intro_profile from "/public/intro-profile.webp";

export default function IntroSection() {
    return (
        <div className={'flex flex-row justify-center max-w-5xl mx-auto h-screen items-center'}>
            <div className={'h-[50vh] inline-flex gap-8'}>
                <div className={'relative w-1/2'}>
                    <Image src={intro_profile} alt={'profile pic'} fill={true} className={'object-cover rounded-md'}/>
                </div>
                <div className={'w-1/2'}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <div className={'text-5xl font-bold mb-12'}>Hey it's me, Ivan</div>
                    <div className={'text-3xl font-semibold mb-8'}>Some quick facts about me, I’m a photographer, dancer, guitarist</div>
                    <div className={'text-3xl font-semibold'}>Academics wise I’m doing a double degree in Computer Science and
                        Business Administration at the National University of Singapore
                    </div>
                </div>
            </div>

        </div>
    )
}