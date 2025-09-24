'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useLoadingStore from "../../../store/useLoadingStore";
import logingandsignupmakepost from "../../../utilis/requestrespose/logingandsignupmakepost";


const SignUP = () => {


    const router = useRouter();
    const { isLoading, setLoading } = useLoadingStore();
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [res, setres] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();


        if (name && email && password) {
            setLoading(true);
            const response = await logingandsignupmakepost("api/register", { name, email, password });
            if (response) {
                setres(response);
                setLoading(false);
                router.push('/signin');
            } else {
                setLoading(false);
                alert("There was a Server side Problem");
            }
        } else {
            alert("Required All Feilds");
        }

    };




    return (
        <div className="w-screen h-[60vh] flex justify-center items-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
                <h2 className="text-xl text-black font-bold mb-4">Sign Up</h2>

                <form onSubmit={handleSubmit} className="space-y-4 text-gray-600">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none "
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none "
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none "
                    />

                    <button
                        disabled={isLoading}
                        className="w-full bg-sky-400 text-white font-semibold py-2 rounded-md hover:bg-sky-600 transition cursor-pointer flex items-center justify-center gap-2"
                    >
                        {
                            isLoading && <div className="w-[20px] h-[20px] rounded-full border-b-3 border-l-3 bordergray-50 animate-spin">
                            </div>
                        }

                        Sign Up
                    </button>
                </form>

                <span className="flex items-center text-gray-500 gap-1 pt-2 justify-center">Already have an Account ? <Link href="signin" className="text-sm hover:underline text-sky-500">
                    sign In
                </Link></span>
            </div>
        </div>
    );
};

export default SignUP;
