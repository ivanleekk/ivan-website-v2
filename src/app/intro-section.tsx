import Image from "next/image";
import intro_profile from "/public/intro-profile.webp";

export default function IntroSection() {
    return (
        <div id={'about'} className={'static'}>
            <div className={'flex gap-16'}>
                    <div className={'absolute h-1/3 w-1/3'}>
                        <Image src={intro_profile} alt={'profile pic'} fill={true}
                               className={'object-cover rounded-md'} placeholder={'blur'}/>
                    </div>

                <div className={'w-1/2'}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <div className={'text-5xl font-bold mb-12'}>Hey it's me, Ivan</div>
                    <div className={'text-3xl font-semibold mb-8'}>Some quick facts about me, I’m a photographer,
                        dancer, guitarist
                    </div>
                    <div className={'text-3xl font-semibold mb-8'}>Academics wise I’m doing a double degree in Computer
                        Science and
                        Business Administration at the National University of Singapore
                    </div>
                    <div className={'text-3xl font-semibold mb-8'}>My current interests are in Artificial Intelligence,
                        Data Analysis, and Finance
                    </div>
                </div>
            </div>

        </div>
    )
}