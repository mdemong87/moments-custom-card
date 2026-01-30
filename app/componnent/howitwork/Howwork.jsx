import { ArrowRight, Camera, Eye, Package, Sparkles } from 'lucide-react';

export default function Howwork() {

    const stepImages = [
        "https://res.cloudinary.com/dg83pvgls/image/upload/v1769582765/momentocardgames.com_application_tradingcard_momento-trading-cards-8751_2_jkhy0a.png",

        "https://res.cloudinary.com/dg83pvgls/image/upload/v1769582765/momentocardgames.com_application_tradingcard_momento-trading-cards-8751_1_jocjrg.png",

        "https://res.cloudinary.com/dg83pvgls/image/upload/v1769582766/momentocardgames.com_application_deckcard_momento-playing-deck-cards-2383_2_nxu1lm.png",

        "https://res.cloudinary.com/dg83pvgls/image/upload/v1769582764/momentocardgames.com_application_deckcard_momento-playing-deck-cards-2383_1_fhgg2q.png",

        "https://res.cloudinary.com/dg83pvgls/image/upload/v1769582764/momentocardgames.com_application_deckcard_momento-playing-deck-cards-2383_b7cm7e.png"
    ];




    return (
        <>
            <section className="relative max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-4">
                        How It Works
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        From concept to keepsake in five simple steps
                    </p>
                </div>

                <div className="space-y-32">
                    {/* Step 1 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6" style={{ animation: 'fadeInLeft 0.8s ease-out' }}>
                            <div className="inline-flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <span className="text-white font-black text-xl">1</span>
                                </div>
                                <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">Step One</span>
                            </div>
                            <h3 className="text-4xl font-black tracking-tight text-slate-900">
                                Choose Your Cards
                            </h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Start with the deck that fits your moment. Choose what you want to create:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-xs font-bold">✓</span>
                                    </div>
                                    <div>
                                        <strong className="text-slate-900">Portrait Deck</strong>
                                        <span className="text-slate-600"> – A full deck featuring custom character cards</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-xs font-bold">✓</span>
                                    </div>
                                    <div>
                                        <strong className="text-slate-900">Momento Trading Cards</strong>
                                        <span className="text-slate-600"> – Individual cards with stats and inside jokes</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-rose-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-xs font-bold">✓</span>
                                    </div>
                                    <div>
                                        <strong className="text-slate-900">Chaos Cards</strong>
                                        <span className="text-slate-600"> – Premade high-energy add-on deck with wild rules</span>
                                    </div>
                                </li>
                            </ul>
                            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center gap-2">
                                Start Creating Your Cards
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="relative h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 shadow-xl">
                            <img
                                src={stepImages[0]}
                                alt="Step 1 visual"
                                className="max-w-full mx-auto max-h-full object-contain rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>



                    {/* Step 2 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="lg:order-2 space-y-6" style={{ animation: 'fadeInRight 0.8s ease-out' }}>
                            <div className="inline-flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <span className="text-white font-black text-xl">2</span>
                                </div>
                                <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Step Two</span>
                            </div>
                            <h3 className="text-4xl font-black tracking-tight text-slate-900">
                                Create Your Characters
                            </h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                More than photos — real characters. You don't just upload a photo. You create a fully editable character with interchangeable traits.
                            </p>
                            <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
                                <div className="flex items-center gap-3">
                                    <Camera className="w-6 h-6 text-blue-500" />
                                    <span className="font-bold text-slate-900">Appearance & Style</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Sparkles className="w-6 h-6 text-indigo-500" />
                                    <span className="font-bold text-slate-900">Personality Traits</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Eye className="w-6 h-6 text-purple-500" />
                                    <span className="font-bold text-slate-900">Visual Details & Vibe</span>
                                </div>
                            </div>
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center gap-2">
                                Build Your Character
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="lg:order-1 relative h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 shadow-xl flex items-center justify-center">
                            <div className="w-56 h-80 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/10" />
                                <img
                                    src={stepImages[3]}
                                    alt="Step 1 visual"
                                    className="max-w-full mx-auto max-h-full object-contain rounded-3xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6" style={{ animation: 'fadeInLeft 0.8s ease-out' }}>
                            <div className="inline-flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <span className="text-white font-black text-xl">3</span>
                                </div>
                                <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">Step Three</span>
                            </div>
                            <h3 className="text-4xl font-black tracking-tight text-slate-900">
                                Customize Trading Cards
                            </h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Highlight personalities, moments, and inside jokes. Perfect as standalone keepsakes or add-ons.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white rounded-xl p-4 shadow-lg">
                                    <div className="text-3xl font-black text-purple-500 mb-1">92</div>
                                    <div className="text-sm font-bold text-slate-600">Coffee Addiction</div>
                                </div>
                                <div className="bg-white rounded-xl p-4 shadow-lg">
                                    <div className="text-3xl font-black text-pink-500 mb-1">88</div>
                                    <div className="text-sm font-bold text-slate-600">Dance Moves</div>
                                </div>
                                <div className="bg-white rounded-xl p-4 shadow-lg">
                                    <div className="text-3xl font-black text-orange-500 mb-1">95</div>
                                    <div className="text-sm font-bold text-slate-600">Dad Jokes</div>
                                </div>
                                <div className="bg-white rounded-xl p-4 shadow-lg">
                                    <div className="text-3xl font-black text-blue-500 mb-1">100</div>
                                    <div className="text-sm font-bold text-slate-600">Snack Master</div>
                                </div>
                            </div>
                            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center gap-2">
                                Create a Trading Card
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="relative h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl flex items-center justify-center">
                            <img
                                src={stepImages[1]}
                                alt="Step 1 visual"
                                className="max-w-full mx-auto max-h-full object-contain rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="lg:order-2 space-y-6" style={{ animation: 'fadeInRight 0.8s ease-out' }}>
                            <div className="inline-flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <span className="text-white font-black text-xl">4</span>
                                </div>
                                <span className="text-sm font-bold text-green-600 uppercase tracking-wider">Step Four</span>
                            </div>
                            <h3 className="text-4xl font-black tracking-tight text-slate-900">
                                Live Preview in Real Time
                            </h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                See it before it's printed. As you customize, your cards update instantly. What you see on screen is exactly what gets printed — no guessing.
                            </p>
                            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center gap-2">
                                Preview Your Cards
                                <Eye className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="lg:order-1 relative h-96 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 shadow-xl flex items-center justify-center">

                            <img
                                src={stepImages[0]}
                                alt="Step 1 visual"
                                className="max-w-full mx-auto max-h-full object-contain rounded-3xl shadow-2xl"
                            />
                            <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-ping" />

                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6" style={{ animation: 'fadeInLeft 0.8s ease-out' }}>
                            <div className="inline-flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <span className="text-white font-black text-xl">5</span>
                                </div>
                                <span className="text-sm font-bold text-rose-600 uppercase tracking-wider">Step Five</span>
                            </div>
                            <h3 className="text-4xl font-black tracking-tight text-slate-900">
                                Printed & Delivered
                            </h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                We handle the rest. Once you're happy, your cards are printed with premium card stock, sharp detail, and vibrant color — then shipped straight to your door.
                            </p>
                            <div className="bg-white rounded-2xl p-6 shadow-lg space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                                        <span className="text-rose-600 font-bold">✓</span>
                                    </div>
                                    <span className="text-slate-700">Premium card stock</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                                        <span className="text-rose-600 font-bold">✓</span>
                                    </div>
                                    <span className="text-slate-700">Sharp, vibrant printing</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                                        <span className="text-rose-600 font-bold">✓</span>
                                    </div>
                                    <span className="text-slate-700">Fast delivery to your door</span>
                                </div>
                            </div>
                            <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-red-500 text-white font-bold rounded-xl hover:from-rose-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center gap-2">
                                Complete Your Order
                                <Package className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="relative h-96 bg-gradient-to-br from-rose-100 to-red-100 rounded-3xl p-8 shadow-xl flex items-center justify-center">
                            <img
                                src={stepImages[4]}
                                alt="Step 1 visual"
                                className="max-w-full mx-auto max-h-full object-contain rounded-3xl shadow-2xl"
                            />
                            <Package className="w-32 h-32 text-rose-500 animate-bounce" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
