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
        <Card className={'flex flex-col self-stretch justify-between'}>
            <CardHeader>
                <CardTitle>
                    Contact Me!
                </CardTitle>

            </CardHeader>
            {email && <CardContent>
                <div className={'flex-row flex justify-between gap-4'}>
                    <div className={'flex-col flex'}>
                        <CardDescription className={'text-lg'}>
                            Email
                        </CardDescription>

                        <p>{email}</p>
                    </div>
                    <Button className={'my-auto'} onClick={() => navigator.clipboard.writeText(email)}>
                        <Copy/>
                    </Button>
                </div>
            </CardContent>}
            {linkedin && <CardContent>
                <div className={'flex-row flex justify-between gap-4'}>
                    <div className={'flex-col flex'}>
                        <CardDescription className={'text-lg'}>
                            LinkedIn
                        </CardDescription>

                        <p>{linkedin}</p>
                    </div>
                    <Button className={'my-auto'} onClick={() => navigator.clipboard.writeText(linkedin)}>
                        <Copy/>
                    </Button>
                </div>
            </CardContent>}

            <CardFooter/>
        </Card>
    );
}