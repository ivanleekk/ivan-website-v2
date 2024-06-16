'use client';
import {
    Card, CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Copy} from "lucide-react";
import {Button} from "@/components/ui/button";
import { toast } from "sonner"


type WorkCardProps = {
    email?: string;
    linkedin?: string;
};


/**
 * @param email
 * @param linkedin
 */
export default function ContactCard({email, linkedin}: WorkCardProps) {
    return (
        <Card className={'flex flex-col self-stretch justify-between max-w-[90vw]'}>
            <CardHeader>
                <CardTitle>
                    Contact Me!
                </CardTitle>

            </CardHeader>
            {email && <CardContent>
                <div className={'flex-row flex justify-between gap-4'}>
                    <div className={'flex-col flex min-w-0'}>
                        <CardDescription className={'text-lg'}>
                            Email
                        </CardDescription>

                        <p className={'text-ellipsis overflow-hidden ...'}>{email}</p>
                    </div>
                    <Button className={'my-auto'} onClick={() => {
                        navigator.clipboard.writeText(email)
                        toast('Copied to clipboard!')
                    }}>
                        <Copy/>
                    </Button>
                </div>
            </CardContent>}
            {linkedin && <CardContent>
                <div className={'flex-row flex justify-between gap-4'}>
                    <div className={'flex-col flex min-w-0 '}>
                        <CardDescription className={'text-lg'}>
                            LinkedIn
                        </CardDescription>

                        <p className={'text-ellipsis overflow-hidden ...'}>{linkedin}</p>
                    </div>
                    <Button className={'my-auto'} onClick={() => {
                        navigator.clipboard.writeText(linkedin)
                        toast('Copied to clipboard!')
                    }}>
                        <Copy/>
                    </Button>
                </div>
            </CardContent>}

            <CardFooter/>
        </Card>
    );
}