import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import CarouselCard from "@/components/carousel-card";
import seedlink from '../../public/seedlink.png'
import beatit from '../../public/beatit.png'
import dataAnalysis from '../../public/data-analysis.webp'

export default function ProjectsSection() {
    return (
        <div className={'content-center flex flex-col items-center pb-[25vh] bg-zinc-700  py-10 px-16 '}>
            <hr className={'my-10 border-0'}/>
            <div className={'text-5xl font-semibold text-center underline'}>Projects</div>

            <Carousel opts={{
                align: 'start',
                loop: true,
            }}
                      className="w-full max-w-5xl items-stretch p-10">
                <CarouselContent className={'-ml-4 '}>
                    <CarouselItem className={'landscape:basis-1/2 md:basis-1/2 lg:landscape:basis-1/3 pl-4 flex flex-grow'}>
                        <CarouselCard title={'Seedlink'} description={'24 hour hackathon for hacksingapore'}
                                      src={seedlink} alt={'Seedlink Logo'}
                                      href={'https://github.com/ivanleekk/seedlink'}/>
                    </CarouselItem>
                    <CarouselItem className={'landscape:basis-1/2 md:basis-1/2 lg:landscape:basis-1/3 pl-4 flex flex-grow'}>
                        <CarouselCard title={'BeatIt'} description={'NUS Orbital Project'}
                                      src={beatit} alt={'BeatIt Logo'}
                                      href={'https://github.com/ivanleekk/BeatIt'}/>
                    </CarouselItem>
                    <CarouselItem className={'landscape:basis-1/2 md:basis-1/2 lg:landscape:basis-1/3 pl-4 flex flex-grow'}>
                        <CarouselCard title={'Data Breakdown Analysis'} description={'Project to analyse freeform text'}
                                      src={dataAnalysis} alt={'Generic data picture'}
                                      href={'https://github.com/ivanleekk/Breakdown-Analysis-Clean'}/>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious variant={'secondary'}/>
                <CarouselNext variant={'secondary'}/>
            </Carousel>
        </div>
    )
}