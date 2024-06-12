import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


type WorkCardProps = {
    companyOrDegree: string;
    jobTitleOrSchool: string;
    startDate: string;
    endDate: string;
};


/**
 * @param companyOrDegree
 * @param jobTitleOrSchool
 * @param startDate
 * @param endDate
 */
export default function WorkEducationCard({companyOrDegree, jobTitleOrSchool, startDate, endDate}:WorkCardProps) {
    return (
        <Card className={'w-64'}>
            <CardHeader>
                <CardTitle>
                    {companyOrDegree}
                </CardTitle>
                <CardDescription className={'text-lg'}>
                    {jobTitleOrSchool}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>{startDate} - {endDate}</p>
            </CardContent>
        </Card>
    );
}