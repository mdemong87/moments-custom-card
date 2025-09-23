'use client'

import getCookie from "@/utilis/helper/cookie/gettooken";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDashboard, MdOutlineAccountCircle } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import logo from "../../public/logo.svg";
import useNavIsOpenStore from "../../store/useNavIsOpenStore";
import Navigation from "../componnent/Navigation";

const Header = () => {

    const { isOpen, setisOpen } = useNavIsOpenStore();

    const token = getCookie();



    return (
        <header className="bg-white border border-b border-gray-200 h-[75px] w-full fixed z-9000">
            <div className="px-2 md:px-7 lg:px-10 h-full flex items-center justify-between">
                <Link href={'/'} className="flex items-center h-full">
                    <Image src={logo} alt="Logo" className="w-[120px]" />
                </Link>
                <Navigation isOpen={isOpen} setisOpen={setisOpen} />




                {
                    token ? (
                        <div className="flex items-center gap-3 h-full text-gray-500 relative group ">
                            <Link className="font-semibold text-md" href={'/account'}>My Account</Link>
                            <MdOutlineAccountCircle className="text-4xl" />

                            <div className="hidden absolute top-[53px] right-0 shadow-xl bg-white border border-gray-200 rounded-lg min-w-[220px] min-h-[120px] p-4 group-hover:block">
                                <div className="flex flex-col gap-2">
                                    <Link href="/deshboard/" className="text-gray-600 text-md font-semibold hover:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                                        <MdDashboard className="text-xl" />
                                        <span>Deshboard</span>
                                    </Link>

                                    <button className="text-gray-600 text-md font-semibold hover:bg-gray-200 rounded-md p-2 flex items-center gap-2 cursor-pointer">
                                        <TbLogout2 className="text-xl" />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </div>


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