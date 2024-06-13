import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import LazyImage from "@/components/ui/lazy-image";
import {Button} from "@/components/ui/button";
import Link from "next/link";


type CarouselCardProps = {
    title?: string;
    description?: string;
    src: any;
    alt: string;
    href?: string;
    caption?: boolean
};


/**
 * @param title
 * @param description
 * @param src
 * @param alt
 * @param href
 */

export default function CarouselCard({title, description, src, alt, href, caption}: CarouselCardProps) {

    return (
        <div className={'w-full h-full'}>
            <Card
                className={'bg-white rounded-md shadow flex-col items-start gap-2 inline-flex self-stretch justify-between h-full w-full'}>
                <CardHeader className={'pb-0 px-4'}>
                    {title && <CardTitle>{title}</CardTitle>}
                    {description && <CardDescription className={'text-lg'}>{description}</CardDescription>}

                </CardHeader>
                <div className={'w-full'}>
                    <div className={'px-4 w-full'}>
                        <div className={'relative aspect-square '}>
                            <LazyImage src={src} alt={alt} fill={true}
                                       className={'object-cover rounded-md'} placeholder={'blur'}/>
                        </div>
                    </div>
                    {caption && <CardFooter className={'px-4 pt-4'}>
                        <p className={'text-sm text-gray-500'}>{alt}</p>
                    </CardFooter>}
                    {href && <CardFooter className={'px-4 pt-4'}><Button><Link href={href}>Learn
                        More</Link></Button></CardFooter>}

                </div>
            </Card>

        </div>
    );
}