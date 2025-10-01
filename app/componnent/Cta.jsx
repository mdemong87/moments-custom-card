import Image from "next/image";
import bgCards from "../../public/club.png"; // example bg image

export default function Cta() {
    return (
        <div className="relative py-20 max-w-7xl mx-2 xl:mx-auto my-16 rounded-2xl text-center flex flex-col justify-center items-center overflow-hidden">
            {/* Background Image */}
            <Image
                src={bgCards}
                alt="CTA Background"
                fill
                className="absolute z-0 w-full h-full left-0 object-contain opacity-50"
            />
            {/* Overlay Color */}
            <div className="absolute inset-0 bg-[#3CA9FF]/80" />

            {/* Content */}
            <div className="relative z-10 px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white uppercase">
                    Design your custom deck today
                </h1>
                <p className="text-lg text-white mt-4">
                    Start creating, sharing, and playing with purpose.
                </p>
                <button className="mt-10 px-8 py-3 bg-[#FF6F3C] text-[#ffffff] text-lg font-semibold rounded-md shadow-md hover:brightness-110 transition">
                    Start Customizing
                </button>
            </div>
        </div>
    );
}
