import { Github, Linkedin, Mail} from "lucide-react";
import Link from "next/link";

export default function FirstSection() {
    // noinspection XmlDeprecatedElement
    return (
        <div id={'home'} className=" flex-col justify-center items-center inline-flex gap-8 w-screen h-screen">
            <div className=" text-5xl font-extrabold ">Ivan Lee
            </div>
            <div
                className=" text-3xl font-semibold ">Data
                Analyst | Software Engineer
            </div>
            <div
                className=" text-sm font-medium ">Pic:
                Southern Cross by me!
            </div>
            <div className="justify-start items-start inline-flex gap-8">
                <Link href={'https://github.com/ivanleekk'}>
                    <Github size={24} className='text-zinc-50'/>
                </Link>
                <Link href={'https://www.linkedin.com/in/ivanleekaikiat/'}>
                    <Linkedin size={24} className='text-zinc-50'/>
                </Link>
                <Link href={'mailto:ivanleekaikiat@gmail.com'}>
                    <Mail size={24} className='text-zinc-50'/>
                </Link>
            </div>
        </div>
    )
}