import Image from "next/image";
import Link from "next/link";
import { FaRegSquareCheck } from "react-icons/fa6";
import cardsTradition from "../../public/ronaldo.webp";

export default function Tradition() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Left Content */}
            <div className="space-y-6">
                <h1 className="text-4xl md:text-3xl font-extrabold text-gray-800 uppercase">
                    Traditional Playing Cards
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Create your own set of traditional playing cards with fully customizable faces and themes. Perfect for game nights, gifts, or making every shuffle personal.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                    <FaRegSquareCheck className="inline mr-2 pb-1 text-[#3CA9FF]" />
                    54 premium playing cards with standard face designs <br />
                    <FaRegSquareCheck className="inline mr-2 pb-1 text-[#3CA9FF]" />
                    Smooth shuffle & durable finish for long-lasting use <br />
                    <FaRegSquareCheck className="inline mr-2 pb-1 text-[#3CA9FF]" />
                    Ideal for poker nights, magic tricks, and casual gaming
                </p>

                <div className="flex gap-4">
                    <Link
                        href="/shop"
                        className="px-12 py-3 bg-[#3CA9FF] text-white font-medium rounded-md shadow hover:bg-[#FF6F3C] transform hover:scale-105 transition duration-300"
                    >
                        Start Customizing
                    </Link>
                    <Link
                        href="/shop"
                        className="px-12 py-3 text-[#3CA9FF] border border-[#3CA9FF] font-medium rounded-md shadow hover:text-[#FF6F3C] hover:border-[#FF6F3C] transform hover:scale-105 transition duration-300"
                    >
                        Explore Pre-Made Deck
                    </Link>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end">
                <Image
                    src={cardsTradition}
                    alt="Tradition"
                    className="rounded-lg transform hover:scale-105 transition duration-300"
                />
            </div>
        </section>
    );
}
