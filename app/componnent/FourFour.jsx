import Link from "next/link";
import { FaGamepad, FaPaintRoller } from "react-icons/fa";

export default function Four() {
    return (
        <section className="bg-[#E6F0F8] py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Heading */}
                <h1 className="text-xl md:text-2xl font-bold uppercase text-gray-800 leading-[35px]">
                    From custom playing cards to game decks that spark competition, and trading cards
                    designed for collectors, <br className="hidden md:block" />
                    <span className="text-sky-600">Momento Cards</span> transforms simple decks into powerful experiences.
                </h1>

                {/* Icon Row */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 text-lg font-medium text-[#0570a2]">
                    <span className="flex items-center gap-2">
                        <FaPaintRoller className="text-xl" />
                        Create something special—crafted for YOU.
                    </span>
                    <span className="flex items-center gap-2">
                        <FaGamepad className="text-xl" />
                        Play, collect, and connect with the people that matter.
                    </span>
                </div>

                {/* CTA Button */}
                <div className="mt-10">
                    <Link href="/shop" className="px-8 py-3 bg-[#00A6F4] text-white text-lg font-semibold rounded-md shadow-md hover:brightness-110 transition">
                        Start Customizing
                    </Link>
                </div>
            </div>
        </section>
    );
}
