import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
} from "@/components/ui/carousel";
import CarouselCard from "@/components/carousel-card";
import mountCook from '../../public/mount-cook.webp'
import seals from '../../public/seals.webp'
import yaowarat from '../../public/yaowarat.webp'
import sungeiBuloh from '../../public/sungei-buloh.webp'

export default function PhotosSection() {
    return (
        <div className={'content-center flex flex-col items-center pb-[25vh] bg-zinc-800 py-10 px-16 '}>
            <hr className={'my-10 border-0'}/>
            <div className={'text-5xl font-semibold text-center underline'}>Photos</div>

            <Carousel opts={{
                align: 'start',
                loop: true,
            }}
                      className="w-full max-w-5xl items-stretch pt-10">
                <CarouselContent className={'-ml-4 '}>
                    <CarouselItem className={'landscape:basis-1/2 md:basis-1/2 lg:landscape:basis-1/3 pl-4 flex flex-grow'}>
                        <CarouselCard src={mountCook} alt={'Mount Cook, New Zealand'} caption={true}
                        />
                    </CarouselItem>
                    <CarouselItem
                        className={'landscape:basis-1/2 md:basis-1/2 lg:landscape:basis-1/3 pl-4 flex flex-grow'}>
                        <CarouselCard src={seals} alt={'Seals in New Zealand'} caption={true}
                        />
                    </CarouselItem>
                    <CarouselItem
                        className={'landscape:basis-1/2 md:basis-1/2 lg:landscape:basis-1/3 pl-4 flex flex-grow'}>
                        <CarouselCard src={yaowarat} alt={'Yaowarat, Bangkok'} caption={true}
                        />
                    </CarouselItem>
                    <CarouselItem
                        className={'landscape:basis-1/2 md:basis-1/2 lg:landscape:basis-1/3 pl-4 flex flex-grow'}>
                        <CarouselCard src={sungeiBuloh} alt={'Sungei Buloh, Singapore'} caption={true}
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselDots/>
            </Carousel>
        </div>
    )
}