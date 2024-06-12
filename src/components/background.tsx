import Image from 'next/image'
import astrobg from '../../public/astro-bg.webp'
import LazyImage from "@/components/ui/lazy-image";

export default function Background() {
    return (
        <div className={'absolute h-screen w-screen overflow-hidden z-[-1]'}>
            <LazyImage
                className={'object-cover'}
                alt="Stars in the night sky"
                src={astrobg}
                placeholder="blur"
                quality={100}
                fill={true}
                sizes={'100vw'}
            />
        </div>
    )
}