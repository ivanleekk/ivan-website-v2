export default function Header () {
    return (
        <div className="flex justify-center items-center py-4">
            <div className=" self-stretch  justify-start items-center gap-[30px] inline-flex">
                <div className=" text-lg font-semibold  leading-7">Home</div>
                <div className=" text-lg font-semibold  leading-7">About</div>
                <div className=" text-lg font-semibold  leading-7">Resume</div>
                <div className=" text-lg font-semibold  leading-7">Projects</div>
                <div className=" text-lg font-semibold  leading-7">Photos</div>
                <div className=" text-lg font-semibold  leading-7">Activities
                </div>
                <div className=" text-lg font-semibold  leading-7">Contact</div>
            </div>
        </div>
    )
}