import Image from "next/image";
import Link from "next/link";
import Right from "../../public/ele.png";

export default function AboutPage() {
    return (
        <section className="bg-[#E6F0F8] py-20">
            <div className="h-fit lg:h-[68vh] max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Side */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
                        CUSTOMIZE YOUR <br />
                        <span className="text-sky-500">MOMENTO</span> CARD GAMES
                    </h1>
                    <p className="mt-6 text-xl text-gray-700 max-w-lg">
                        We create cards that make every moment special—whether bringing
                        groups together, personalizing play, or designing collectible
                        keepsakes.
                    </p>
                    <div className="mt-8">
                        <Link href="/shop" className="inline-block px-6 py-3 bg-sky-500 text-white font-semibold rounded-sm shadow-md hover:brightness-110 transition">
                            EXPLORE CUSTOMIZATION
                        </Link>
                    </div>
                </div>

                {/* Right Side (Diamond Grid Image) */}
                <div className="flex justify-center items-center group">
                    <Image
                        src={Right}
                        alt="Diamond"
                        width={1000}
                        height={1000}
                        className="h-[500px] w-[500px] object-container transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                </div>
            </div>
        </section>
    );
}
