'use client'

import Example from "../componnent/howitwork/Example";
import Footer from "../componnent/howitwork/Footer";
import Giftme from "../componnent/howitwork/Giftme";
import Hero from "../componnent/howitwork/Hero";
import Howwork from "../componnent/howitwork/Howwork";
import Video from "../componnent/howitwork/Video";

const HowItWorks = () => {
    return (
        <div>
            <Hero />
            <Video />
            <Howwork />
            <Example />
            <Giftme />
            <Footer />
        </div>
    )
}

export default HowItWorks;