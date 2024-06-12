import intro_profile from "/public/intro-profile.webp";
import LazyImage from "@/components/ui/lazy-image";

export default function IntroSection() {
    return (
        <div id={'about'} className={'place-items-center'}>
            <div className={'portrait:hidden flex flex-row'}> {/* landscape mode */}
                <div className={'relative w-[33vw]'}>
                    <LazyImage src={intro_profile} alt={'profile pic'} fill={true}
                               className={'object-cover'} placeholder={'blur'}/>
                </div>

                <div className={'flex-grow content-center my-auto p-10'}>
                    <div className={'max-w-3xl mx-auto'}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <div className={'text-5xl font-bold mb-12'}>Hey it's me, Ivan</div>
                        <div className={'text-lg font-semibold mb-8'}>Some quick facts about me, I’m a photographer,
                            dancer, guitarist
                        </div>
                        <div className={'text-lg font-semibold mb-8'}>Academics wise I’m doing a double degree in Computer
                            Science and
                            Business Administration at the National University of Singapore
                        </div>
                        <div className={'text-lg font-semibold mb-8'}>My current interests are in Artificial Intelligence,
                            Data Analysis, and Finance
                        </div>
                    </div>

                </div>
            </div>
            <div className={'landscape:hidden flex-inline gap-16 mx-auto min-h-[67vh]'}> {/* portrait mode */}
                <div className={'relative w-screen h-[33vh]'}>
                    <LazyImage src={intro_profile} alt={'profile pic'} fill={true}
                               className={'object-cover'} placeholder={'blur'}/>
                </div>

                <div className={'max-w-3xl content-center mx-auto p-10 flex-grow my-auto'}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <div className={'text-5xl font-bold mb-12'}>Hey it's me, Ivan</div>
                    <div className={'text-lg font-semibold mb-8'}>Some quick facts about me, I’m a photographer,
                        dancer, guitarist
                    </div>
                    <div className={'text-lg font-semibold mb-8'}>Academics wise I’m doing a double degree in Computer
                        Science and
                        Business Administration at the National University of Singapore
                    </div>
                    <div className={'text-lg font-semibold mb-8'}>My current interests are in Artificial Intelligence,
                        Data Analysis, and Finance
                    </div>
                </div>
            </div>

        </div>
    )
}