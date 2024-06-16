import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import ContactCard from "@/components/contact-card";


export default function ContactSection() {
    return (
        <div className={'flex flex-col items-center pb-[25vh] bg-zinc-800 min-h-screen justify-center'}>
            <div className={'max-w-5xl'}>
                <hr className={'my-10 border-0'}/>
                <div className={'text-5xl font-semibold text-center underline'}>Contact</div>
                <div className={'flex justify-center gap-8 pt-10 '}>
                    <ContactCard email={'ivanleekaikiat@gmail.com'}
                                 linkedin={'https://www.linkedin.com/in/ivanleekaikiat/'}/>
                </div>
            </div>
        </div>
    )
}