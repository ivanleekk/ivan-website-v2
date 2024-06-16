import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import ContactCard from "@/components/contact-card";


export default function ContactSection() {
    return (
        <div className={'flex flex-col items-center pb-[25vh] bg-zinc-800 min-h-screen justify-center'}>
            <div>
                <hr className={'my-10 border-0'}/>
                <div className={'text-5xl font-semibold text-center underline'}>Contact</div>
                <div className={'max-w-5xl flex content-start justify-center flex-wrap gap-8 p-10 items-stretch'}>
                    <ContactCard email={'ivanleekaikiat@gmail.com'}
                                 linkedin={'https://www.linkedin.com/in/ivanleekaikiat/'}/>
                </div>
            </div>
        </div>
    )
}