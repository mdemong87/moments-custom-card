import { Play } from "lucide-react";
import { useState } from "react";

export default function Video() {
    const [playing, setPlaying] = useState(false);

    return (
        <section id="video" className="relative container mx-auto px-6 py-20  mt-0 lg:mt-20">
            <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-2 shadow-2xl">
                    <div className="bg-slate-950 rounded-2xl aspect-video relative overflow-hidden group">

                        {!playing && (
                            <>
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 group-hover:opacity-70 transition-opacity" />

                                {/* Play Button */}
                                <button
                                    onClick={() => setPlaying(true)}
                                    className="absolute inset-0 flex items-center justify-center z-10"
                                >
                                    <span className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                        <Play className="text-white w-8 h-8 ml-1" />
                                    </span>
                                </button>
                            </>
                        )}

                        {/* Video */}
                        {playing && (
                            <video
                                src="https://res.cloudinary.com/dg83pvgls/video/upload/v1769582816/GettyImages-1279811365_daynze.mp4"
                                autoPlay
                                controls
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        )}

                    </div>
                </div>

                <p className="text-center text-slate-600 mt-6 font-semibold">
                    60–90 second explainer showing what Momento is and how it works
                </p>
            </div>
        </section>
    );
}