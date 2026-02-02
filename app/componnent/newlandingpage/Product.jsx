'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const products = [
    {
        icon: '🂡',
        title: 'Portrait Deck',
        subtitle: '(Signature)',
        description: 'A full playing card deck — built from your people.',
        features: [
            'Best place to start',
            'Designed for full game nights',
            'The deck everyone recognizes'
        ]
    },
    {
        icon: '🃏',
        title: 'Momento Trading Cards',
        description: 'Capture real moments — one card at a time.',
        features: [
            'Capture real-life moments',
            'Perfect for memories & milestones',
            'Keep, gift, or collect over time'
        ]
    },
    {
        icon: '⚡',
        title: 'Chaos Cards',
        description: 'Instant chaos. Real cards. Wild rules.',
        features: [
            'Intense wild cards',
            'Rule-bending moments',
            'Mix into any game night'
        ]
    }
];

export default function Products() {
    return (
        <section className="py-20 md:py-24 px-4 bg-sky-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4 text-balance">
                        Experience Momento Game Night — Three Ways
                    </h2>
                    <p className="text-xl text-gray-600/70">
                        Each product brings a different layer of personalization to the table.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {products.map((product, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30"
                        >
                            {/* Decorative accent */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative space-y-6">
                                <div className="text-5xl">{product.icon}</div>

                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-gray-700">
                                        {product.title}
                                    </h3>
                                    {product.subtitle && (
                                        <p className="text-sm text-gray-600 italic">
                                            {product.subtitle}
                                        </p>
                                    )}
                                </div>

                                <p className="text-lg text-gray-600/80 leading-relaxed">
                                    {product.description}
                                </p>

                                <ul className="space-y-3">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-sky-400 font-bold mt-1">•</span>
                                            <span className="text-gray-600/60">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href={'/shop'}
                                    variant="ghost"
                                    className="text-sky-400 hover:text-primary hover:bg-primary/5 p-0 h-auto font-semibold group/btn flex items-center justify-start"
                                >
                                    <span>Create {product.title.split(' ')[0]}</span>
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center rounded-2xl pt-3">
                    <p className="text-lg font-semibold text-gray-600">
                        Each Momento product works on its own — and even better together.
                    </p>
                </div>
            </div>
        </section>
    );
}
