import WorkEducationCard from "@/components/work-education-card";

export default function ActivitiesSection() {
    return (
        <div className={'flex flex-col items-center pb-[25vh] py-10 min-h-screen justify-center'}>
            <div>
                <hr className={'my-10 border-0'}/>
                <div className={'text-5xl font-semibold text-center underline'}>Activities</div>
                <div className={'max-w-5xl flex content-start justify-center flex-wrap gap-8 p-10 items-stretch'}>
                    <WorkEducationCard companyOrDegree={'NUS Dance Ensemble'} jobTitleOrSchool={'Productions Head / Member'}
                                       startDate={'Aug 2022'} endDate={'Current'}/>
                    <WorkEducationCard companyOrDegree={'Tembusu College Astronomy Club'} jobTitleOrSchool={'Club Head'}
                                       startDate={'Jan 2023'} endDate={'Apr 2024'}/>
                    <WorkEducationCard companyOrDegree={'Various Bands'} jobTitleOrSchool={'Guitarist/Bassist'}
                                       startDate={'Jan 2024'} endDate={'Current'}/>
                </div>
            </div>
            <hr className={'my-8'}/>
            <div>
                <div className={'text-5xl font-semibold text-center underline'}>Competitions</div>
                <div className={'max-w-5xl flex content-start justify-center flex-wrap gap-8 pt-10 items-stretch'}>
                    <WorkEducationCard companyOrDegree={'NES GroundZero 2024'}
                                       jobTitleOrSchool={'Finalist (Top 3 in category)'}
                                       description={'Start-up Pitching Competition'}/>
                    <WorkEducationCard companyOrDegree={'hacksingapore24'}
                                       jobTitleOrSchool={'Participation'}
                                       description={'24 hour hackathon to create a solution for encouraging volunteering'}/>
                    <WorkEducationCard companyOrDegree={"L'Oreal Brandstorm 2023"}
                                       jobTitleOrSchool={'Participation'}
                                       description={'International Innovation Challenge to reinvent their products'}/>
                </div>
            </div>
        </div>
    )
}