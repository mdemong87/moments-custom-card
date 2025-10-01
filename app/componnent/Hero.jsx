"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const cards = [
    "https://i0.wp.com/momentocardgames.com/wp-content/uploads/2025/06/trading-3.png?w=1050&ssl=1",
    "https://i0.wp.com/momentocardgames.com/wp-content/uploads/2025/06/king-heart.png?w=995&ssl=1",
    "https://i0.wp.com/momentocardgames.com/wp-content/uploads/2025/06/green-skip.png?w=960&ssl=1",
    "https://i0.wp.com/momentocardgames.com/wp-content/uploads/2025/06/Pick-Next-Card-1.png?w=961&ssl=1",
    "https://i0.wp.com/momentocardgames.com/wp-content/uploads/2025/06/back.png?w=995&ssl=1",
];
const tickerItems = ["Free Delivery", "Premium Quality", "Long Lasting", "Easily Customizable"];



const Hero = () => {


    const [mounted, setMounted] = useState(false);
    const tickerRef = useRef(null);
    const offset = useRef(0);
    const dragging = useRef(false);
    const lastX = useRef(0);
    useEffect(() => {
        setTimeout(() => setMounted(true), 100);
    }, []);
    useEffect(() => {
        let animFrame;
        const animate = () => {
            if (tickerRef.current && !dragging.current) {
                offset.current -= 1; // speed of the ticker
                const width = tickerRef.current.scrollWidth / 2; // half of duplicated content
                if (Math.abs(offset.current) >= width) {
                    offset.current = 0; // reset smoothly
                }
                tickerRef.current.style.transform = `translateX(${offset.current}px)`;
            }
            animFrame = requestAnimationFrame(animate);
        };
        animate();
        const handleMouseDown = (e) => {
            dragging.current = true;
            lastX.current = e.clientX;
        };
        const handleMouseMove = (e) => {
            if (!dragging.current) return;
            const delta = e.clientX - lastX.current;
            lastX.current = e.clientX;
            offset.current += delta;
            tickerRef.current.style.transform = `translateX(${offset.current}px)`;
        };
        const handleMouseUp = () => (dragging.current = false);
        const ticker = tickerRef.current;
        if (ticker) ticker.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            cancelAnimationFrame(animFrame);
            if (ticker) ticker.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);



    return (
        <>
            <section className="h-[95vh] lg:h-[90vh] w-screen relative bg-gray-50 py-16 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <div
                        className="w-full h-full bg-[url('https://momentocardgames.com/wp-content/uploads/2025/06/spade-icon.svg')] bg-no-repeat bg-top bg-cover opacity-10"
                    />
                </div>
                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-center gap-10 py-16 md:py-12 translate-y-[50px] lg:translate-y-[70px]">
                    {/* Left Text */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 md:space-y-4 lg:space-y-6 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[50px] md:leading-[60px] lg:leading-[75px] uppercase text-[#333333]">
                            Turning <br />
                            <span className="text-[#3CA9FF]">Moments</span> <br /> Into Play
                        </h1>
                        <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0">
                            Every deck holds a purpose, every design tells a story, and every card reflects a moment.
                            Momento Cards isn’t just a game—it’s a way to preserve memories, craft experiences, and turn moments into play.
                        </p>
                        <button className="bg-[#3CA9FF] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#FF6F3C] transition">
                            Explore Cards
                        </button>
                    </div>
                    {/* Right Cards */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center relative h-[40vw] md:h-[25vw] lg:h-[420px]">
                        {cards.map((src, index) => {
                            const isLast = index === cards.length - 1;
                            const targetRotate = isLast ? 0 : -(cards.length - 1 - index) * 13;
                            const step = typeof window !== "undefined" && window.innerWidth < 640 ? 0.03 : 0.05;
                            // const scale = 1 - ((cards.length - 1 - index) * step);
                            const scale = 1 - ((cards.length - 1 + index) * .2 * step);
                            return (
                                <div
                                    key={index}
                                    className="absolute bottom-5 left-[65%] lg:left-[70%] xl:left-[75%] lg:bottom-0 transition-transform duration-700 ease-out"
                                    style={{
                                        transformOrigin: "bottom left",
                                        transform: mounted
                                            ? `translateX(-50%) rotate(${targetRotate}deg) scale(${scale})`
                                            : `translateX(-50%) rotate(0deg) scale(1)`,
                                        zIndex: index,
                                    }}
                                >
                                    <div className="relative w-[35vw] sm:w-[25vw] lg:w-[300px] aspect-[3/4]">
                                        <Image
                                            src={src}
                                            alt={`Card ${index + 1}`}
                                            fill
                                            className="rounded-xl object-contain"
                                            unoptimized
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Smooth Infinite Ticker */}
            <div className="absolute bottom-0 left-0 overflow-hidden w-screen">
                <div className="block lg:block bg-[#3CA9FF] text-white overflow-hidden  py-3 relative cursor-grab">
                    <div
                        ref={tickerRef}
                        className="flex whitespace-nowrap select-none"
                        style={{ transform: "translateX(0)" }}
                    >
                        {/* Duplicate content to enable smooth infinite scroll */}
                        {[...tickerItems, ...tickerItems].map((text, i) => (
                            <span key={i} className="mx-8 text-lg sm:text-xl lg:text-2xl">
                                {text}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;