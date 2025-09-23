'use client'

import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdOutlineAccountCircle } from "react-icons/md";
import logo from "../../public/logo.svg";
import useNavIsOpenStore from "../../store/useNavIsOpenStore";
import Navigation from "../componnent/Navigation";

const Header = () => {

    const { isOpen, setisOpen } = useNavIsOpenStore();

    return (
        <header className="bg-white border border-b border-gray-200 h-[75px] w-full fixed z-9000">
            <div className="px-2 md:px-7 lg:px-10 h-full flex items-center justify-between">
                <Link href={'/'} className="flex items-center h-full">
                    <Image src={logo} alt="Logo" className="w-[120px]" />
                </Link>
                <Navigation isOpen={isOpen} setisOpen={setisOpen} />




                {
                    false ? (
                        <div className="flex items-center gap-3 h-full text-gray-500">
                            <Link className="font-semibold text-md" href={'/account'}>My Account</Link>
                            <MdOutlineAccountCircle className="text-4xl" />

                            {
                                isOpen ? (
                                    <ImCross onClick={() => { setisOpen(false) }} className="block lg:hidden text-2xl ml-2 cursor-pointer hover:rotate-180 transition-all duration-300" />
                                ) : (
                                    <FaBars onClick={() => { setisOpen(true) }} className="block lg:hidden text-2xl ml-2 cursor-pointer" />
                                )
                            }
                        </div>
                    ) : (
                        <div className="flex items-center gap-3 h-full text-gray-500">
                            <Link href={'/signin'} className="bg-sky-200 px-2 py-1 rounded-md text-gray-600 font-semibold text-md cursor-pointer">Login</Link>
                        </div>
                    )
                }




            </div>
        </header>
    )
}

export default Header;