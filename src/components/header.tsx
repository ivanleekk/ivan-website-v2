import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-center items-center py-4">
            <div className=" self-stretch  justify-start items-center gap-[30px] inline-flex">
                <Link href={'#home'} className=" text-lg font-semibold  leading-7">Home</Link>
                <Link href={'#about'} className=" text-lg font-semibold  leading-7">About</Link>
                <Link href={'#resume'} className=" text-lg font-semibold  leading-7">Resume</Link>
                <Link href={'#projects'} className=" text-lg font-semibold  leading-7">Projects</Link>
                <Link href={'#photos'} className=" text-lg font-semibold  leading-7">Photos</Link>
                <Link href={'#activities'} className=" text-lg font-semibold  leading-7">Activities
                </Link>
                <Link href={'#contact'} className=" text-lg font-semibold  leading-7">Contact</Link>
            </div>
        </div>
    )
}