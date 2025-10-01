import Image from "next/image";
import Twos from "../../public/two.png";

export default function Two() {
    return (
        <div className="mt-8 py-8 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-around items-center gap-5 px-4 lg:px-0">
                {/* left */}
                <div className="flex items-center justify-center group overflow-hidden rounded-lg">
                    <Image
                        src={Twos}
                        alt="Two"
                        width={500}
                        height={500}
                        className="h-[400px] w-[600px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                </div>

                {/* right */}
                <div className="max-w-lg">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
                        <span className="text-sky-500">More Than</span> Just a Card Game
                    </h1>
                    <p className="mt-6 text-xl text-gray-700">
                        At Momento Cards, we believe the best memories aren’t just made—they’re shared. Whether it’s a family game night, a team challenge, or a milestone celebration, our cards bring people together through fun, creativity, and connection.
                    </p>
                    <button className="mt-8 inline-block px-6 py-3 bg-sky-500 text-white font-semibold rounded-sm shadow-md hover:brightness-110 transition">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
}
