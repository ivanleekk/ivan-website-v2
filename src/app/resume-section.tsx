import WorkEducationCard from "@/components/work-education-card";

export default function ResumeSection() {
    return (
        <div className={'flex flex-col items-center pb-[25vh] bg-zinc-800'}>
            <div>
                <hr className={'my-10 border-0'}/>
                <div className={'text-5xl font-semibold text-center'}>Work Experience</div>
                <div className={'flex content-start items-start justify-center flex-wrap gap-8 p-10'}>
                    <WorkEducationCard companyOrDegree={'KPMG'} jobTitleOrSchool={'Forensic Data Analyst Intern'}
                                       startDate={'May 2024'} endDate={'Current'}/>
                    <WorkEducationCard companyOrDegree={'Invigilo AI'} jobTitleOrSchool={'Software Engineer Intern'}
                                       startDate={'May 2023'} endDate={'Aug 2023'}/>
                    <WorkEducationCard companyOrDegree={'PSA Corporation'} jobTitleOrSchool={'Engineering Intern'}
                                       startDate={'Nov 2021'} endDate={'May 2022'}/>
                    <WorkEducationCard companyOrDegree={'SAF'} jobTitleOrSchool={'Platoon Sergeant'}
                                       startDate={'Jan 2020'} endDate={'Nov 2021'}/>
                    <WorkEducationCard companyOrDegree={'SLA'} jobTitleOrSchool={'Geospatial Intern'}
                                       startDate={'Nov 2018'} endDate={'Dec 2018'}/>
                </div>
            </div>
            <hr className={'my-8'}/>
            <div>
                <div className={'text-5xl font-semibold text-center'}>Education</div>
                <div className={'flex content-start items-start justify-center flex-wrap gap-8 pt-10'}>
                    <WorkEducationCard companyOrDegree={'Computer Science'} jobTitleOrSchool={'National University of Singapore (NUS)'}
                                       startDate={'Aug 2022'} endDate={'Current'}/>
                    <WorkEducationCard companyOrDegree={'Business Administration'} jobTitleOrSchool={'National University of Singapore (NUS)'}
                                       startDate={'Aug 2022'} endDate={'Current'}/>
                </div>
            </div>
        </div>
    )
}