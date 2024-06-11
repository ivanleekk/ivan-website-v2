import { Github, Linkedin, Mail} from "lucide-react";
import Image from 'next/image'

export default function FirstSection() {
    return (
        <div className=" flex-col justify-center items-center inline-flex gap-8 w-screen h-screen">
            <div className=" text-5xl font-extrabold ">Ivan Lee
            </div>
            <div
                className=" text-3xl font-semibold ">Data
                Analyst | Software Engineer
            </div>
            <div
                className=" text-sm font-medium ">Pic:
                Southern Cross by Ivan Lee
            </div>
            <div className="justify-start items-start inline-flex gap-8">
                <Github size={24} className='text-zinc-50'/>
                <Linkedin size={24} className='text-zinc-50'/>
                <Mail size={24} className='text-zinc-50'/>
            </div>
            {/*<Image src={'/astro-bg.webp'} alt={'background image'} fill={true} className={'bg-blend-normal opacity-50 bg-no-repeat'}/>*/}

        </div>
    )
}