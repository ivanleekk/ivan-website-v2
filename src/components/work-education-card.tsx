import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


type WorkCardProps = {
    companyOrDegree?: string;
    jobTitleOrSchool?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
};


/**
 * @param companyOrDegree
 * @param jobTitleOrSchool
 * @param startDate
 * @param endDate
 * @param description
 */
export default function WorkEducationCard({companyOrDegree, jobTitleOrSchool, startDate, endDate, description}:WorkCardProps) {
    return (
        <Card className={'flex flex-col w-64 self-stretch justify-between'}>
            <CardHeader>
                <CardTitle>
                    {companyOrDegree}
                </CardTitle>
                <CardDescription className={'text-lg'}>
                    {jobTitleOrSchool}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                {startDate && endDate && <p>{startDate} - {endDate}</p>}
                {description && <p>{description}</p>}
            </CardFooter>
        </Card>
    );
}