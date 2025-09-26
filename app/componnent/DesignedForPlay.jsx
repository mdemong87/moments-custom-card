import Image from "next/image";
import { FaCheckSquare } from "react-icons/fa";
import CardsMerged from "../../public/three.png"; // merged right-side image

export default function DesignedForPlay() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Left side */}
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-[1.0]">
                        DESIGNED FOR PLAY. BUILT FOR MEANINGFUL CONNECTIONS.
                    </h2>

                    <div className="mt-8 space-y-6 text-lg text-gray-700">
                        <div className="flex items-start gap-3">
                            <FaCheckSquare className="text-sky-500 mt-1" />
                            <p><strong>For families & teams –</strong> Strengthen bonds and create unforgettable moments.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <FaCheckSquare className="text-sky-500 mt-1" />
                            <p><strong>For game lovers –</strong> Custom decks built for strategy, storytelling, and excitement.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <FaCheckSquare className="text-sky-500 mt-1" />
                            <p><strong>For creators –</strong> Personalize every card to bring your ideas to life.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <FaCheckSquare className="text-sky-500 mt-1" />
                            <p><strong>For collectors –</strong> Craft custom Momento Trading Cards as personal collectibles.</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex gap-4">
                        <button className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-md shadow-md hover:brightness-110 transition">
                            START CUSTOMIZING
                        </button>
                        <button className="px-6 py-3 border border-sky-500 text-sky-500 font-semibold rounded-md shadow-md hover:bg-sky-50 transition">
                            EXPLORE PRE-MADE DECK
                        </button>
                    </div>
                </div>

                {/* Right side (single merged image) */}
                <div className="h-[500px] w-full bg-[#E6F0F8] rounded-md flex-1 flex justify-center lg:justify-center items-center">
                    <Image
                        src={CardsMerged}
                        alt="Stacked Cards"
                        className="w-[600px] lg:w-[650px] h-[400px] transition-transform duration-500 hover:scale-105 object-cover "
                    />
                </div>
            </div>
        </section>
    );
}
