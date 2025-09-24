'use client'

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import useNavIsOpenStore from "../../store/useNavIsOpenStore";
import Navigation from "../componnent/Navigation";
import HeaderAuth from "./HeaderAuth";

const Header = () => {

    const { isOpen, setisOpen } = useNavIsOpenStore();


    return (
        <header className="bg-white border border-b border-gray-200 h-[75px] w-full fixed z-9000">
            <div className="px-2 md:px-7 lg:px-10 h-full flex items-center justify-between">
                <Link href={'/'} className="flex items-center h-full">
                    <Image src={logo} alt="Logo" className="w-[120px]" />
                </Link>
                <Navigation isOpen={isOpen} setisOpen={setisOpen} />


                <HeaderAuth isOpen={isOpen} setisOpen={setisOpen} />

            </div>
        </header>
    )
}

export default Header;