'use client'

import usedeshboardsidebercontroller from "@/store/deshboardsidebercontroller";
import useLogedUserStore from "@/store/useLogedUser";
import getCookie from "@/utilis/helper/cookie/gettooken";
import setCookie from "@/utilis/helper/cookie/setcookie";
import MakePost from "@/utilis/requestrespose/post";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMdSettings } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";

const Deshboardlayout = ({ children }) => {

    const token = getCookie();
    const router = useRouter();
    const { loginUser, setLoginUser } = useLogedUserStore();
    const { isSideberOpen, setisSideberOpen } = usedeshboardsidebercontroller();







    console.log(isSideberOpen);




    /*************** handle logout funciton is here ******************/
    const handlelogout = async () => {

        const response = await MakePost('api/auth/logout', {}, token);

        if (response.success) {

            setCookie("token", '', 1);
            setCookie("id", '', 1)
            setCookie("name", '', 1);
            setCookie("role", '', 1);
            setLoginUser({ name: null, token: null, role: null });
            router.push('/signin');
            toast.success(response.message);
        } else {
            toast.error("Somethign went Wrong");
        }


    }


    return (
        <div className="h-screen text-black">
            {
                !isSideberOpen && <div onClick={() => { setisSideberOpen(true) }} className={`absolute flex lg:hidden z-50 bg-sky-400 text-white  items-center justify-center rounded-md  p-2 -translate-x-3 mt-4 cursor-pointer`}>
                    <IoMdSettings className="animate-spin" />
                </div>
            }
            <div className="">
                <div className={`fixed bg-white border-r border-gray-200 w-[250px] h-screen px-3 py-4 ${isSideberOpen ? "block lg:block" : "hidden lg:block"}`}>

                    <div onClick={() => { setisSideberOpen(false) }} className={`absolute w-[25px] h-[25px] right-0 top-0 bg-sky-300 rounded-sm cursor-pointer text-white flex lg:hidden items-center justify-center hover:rotate-180 transition duration-400`}>
                        <RxCross2 className="" />
                    </div>


                    {
                        loginUser?.role != "Admin" ? (

                            <div className="flex flex-col items-start lg:items-center gap-4 lg:gap-2 text-gray-500 mt-3 w-full">
                                <Link className="font-semibold text-md text-nowrap py-3 px-2 rounded-md lg:px-4 lg:py-3 hover:bg-sky-100 w-full" href={'/deshboard/admin'}>Deshboard</Link>
                                <Link className="font-semibold text-md text-nowrap py-3 px-2 rounded-md lg:px-4 lg:py-3 hover:bg-sky-100 w-full" href={'/deshboard/admin/orders'}>All Orders</Link>
                                <Link className="font-semibold text-md text-nowrap py-3 px-2 rounded-md lg:px-4 lg:py-3 hover:bg-sky-100 w-full" href={'/deshboard/admin/category'}>Add Category</Link>
                                <Link className="font-semibold text-md text-nowrap py-3 px-2 rounded-md lg:px-4 lg:py-3 hover:bg-sky-100 w-full" href={'/deshboard/admin/product'}>Add Product</Link>
                                <Link className="font-semibold text-md text-nowrap py-3 px-2 rounded-md lg:px-4 lg:py-3 hover:bg-sky-100 w-full" href={'/deshboard/admin/contact'}>Contact</Link>
                                <Link className="font-semibold text-md text-nowrap py-3 px-2 rounded-md lg:px-4 lg:py-3 hover:bg-sky-100 w-full" href={'/deshboard/profile'}>Profile</Link>

                            </div>


                        ) : (

                            <div className="flex flex-col items-start lg:items-center gap-4 lg:gap-2 text-gray-500 mt-3 w-full">
                                <Link className="font-semibold text-md text-nowrap py-3 px-2 rounded-md lg:px-4 lg:py-3 hover:bg-sky-100 w-full" href={'/deshboard/customer'}>Deshboard</Link>
                                <Link className="font-semibold text-md text-nowrap py-3 px-2 rounded-md lg:px-4 lg:py-3 hover:bg-sky-100 w-full" href={'/deshboard/customer/orders'}>My Orders</Link>
                                <Link className="font-semibold text-md text-nowrap py-3 px-2 rounded-md lg:px-4 lg:py-3 hover:bg-sky-100 w-full" href={'/deshboard/profile'}>Profile</Link>
                            </div>

                        )
                    }






                    <button onClick={() => { handlelogout() }} className="bg-sky-400 text-white w-[90%] text-center py-2 rounded-md absolute bottom-24 left-3 cursor-pointer">Log out</button>
                </div>
                <div className="px-6 w-full pt-6 pl-[270px]">
                    {children}
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Deshboardlayout;