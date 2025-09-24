import Link from "next/link";

const Navigation = ({ isOpen, setisOpen }) => {
    return (
        <nav className={`${isOpen ? "flex items-start" : "hidden"} lg:flex lg:items-center h-screen w-screen lg:w-fit lg:h-full absolute top-[75px] left-0 lg:static h-screen bg-white border border-r border-gray-300 lg:border-0`}>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-7 text-gray-500 mt-10 lg:mt-0 px-4 pr-6 lg:pr-0 lg:pl-0 w-full">
                <Link onClick={() => { setisOpen(false) }} className="font-semibold text-md text-nowrap py-3 px-2 rounded-md lg:px-1 lg:py-0 hover:bg-sky-100 w-full" href={'/'}>Home</Link>
                <Link onClick={() => { setisOpen(false) }} className="font-semibold text-md text-nowrap py-3 px-2 rounded-md lg:px-1 lg:py-0 hover:bg-sky-100 w-full" href={'/shop'}>Shop</Link>
                <Link onClick={() => { setisOpen(false) }} className="font-semibold text-md text-nowrap py-3 px-2 rounded-md lg:px-1 lg:py-0 hover:bg-sky-100 w-full" href={'/application'}>Card Customization</Link>
                <Link onClick={() => { setisOpen(false) }} className="font-semibold text-md text-nowrap py-3 px-2 rounded-md lg:px-1 lg:py-0 hover:bg-sky-100 w-full" href={'/inspirations'}>Inspirations</Link>
                <Link onClick={() => { setisOpen(false) }} className="font-semibold text-md text-nowrap py-3 px-2 rounded-md lg:px-1 lg:py-0 hover:bg-sky-100 w-full" href={'/contact'}>Contact Us</Link>
            </div>
        </nav >
    )
}

export default Navigation;