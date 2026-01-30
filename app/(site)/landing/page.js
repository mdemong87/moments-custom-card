'use client';

import { Play } from 'lucide-react';
import Button from '../../componnent/newlandingpage/Button';
import FinalCTA from '../../componnent/newlandingpage/FinalCTA';
import Hero from '../../componnent/newlandingpage/Hero';
import HowItWorks from '../../componnent/newlandingpage/HowitWork';
import PremiumQuality from '../../componnent/newlandingpage/PremiumQuality';
import Products from '../../componnent/newlandingpage/Product';
import SocialProof from '../../componnent/newlandingpage/SocialProof';
import WhyMomento from '../../componnent/newlandingpage/WhyMomento';

export default function Page() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/5">
            <Hero />

            {/* Explainer Video Section */}
            <section className="py-20 md:py-32 px-4 bg-muted/30">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                        See How Momento Works
                    </h2>
                    <p className="text-xl text-muted-foreground mb-4 text-balance">
                        From your people to the table.
                    </p>
                    <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
                        A short explainer showing how Momento turns real people into playable cards — from customization to game night.
                    </p>

                    {/* Video Placeholder */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/10 hover:border-primary/30 transition-colors">
                        <div className="text-center">
                            <Play className="w-16 h-16 text-primary mx-auto mb-4 fill-primary" />
                            <p className="text-muted-foreground">Video walkthrough + real-life gameplay</p>
                        </div>
                    </div>

                    <Button className="mt-12 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full">
                        Create Your Deck
                    </Button>
                </div>
            </section>

            {/* What is Momento */}
            <section className="py-20 md:py-32 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                            What Is Momento?
                        </h2>
                        <p className="text-xl text-primary font-semibold mb-6">
                            Real people. Real cards. Real game nights.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-foreground leading-relaxed">
                                Momento turns the people you care about into playable cards.
                            </p>
                            <p className="text-lg text-foreground leading-relaxed">
                                Design custom cards inspired by friends, family, or favorite characters — choosing their look, vibe, and personality. We professionally print and ship everything straight to your door.
                            </p>
                            <p className="text-2xl font-bold text-primary italic">
                                Memories you can shuffle.
                            </p>
                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full mt-8">
                                Start Creating Your Deck
                            </Button>
                        </div>

                        <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/50 to-accent/30 flex items-center justify-center border-2 border-primary/10">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🂡</div>
                                <p className="text-muted-foreground">Card close-ups • Premium finish</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Products />
            <HowItWorks />
            <WhyMomento />
            <SocialProof />
            <PremiumQuality />
            <FinalCTA />
        </main>
    );
}
