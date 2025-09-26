"use client";

import ShopCardSkeleton from "@/app/componnent/ShopCardSkeleton";
import { useEffect, useState } from "react";
import ShopCard from "../../componnent/ShopCard";

const About = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("http://tony.sardaritskillshare.com/api/shop");
                const data = await res.json();

                if (data.success) {
                    // Map API data to ShopCard-friendly structure
                    const mappedProducts = data.data.data.map((p) => ({
                        id: p.id,
                        name: p.name,
                        price: p.price,
                        offer_price: p.offer_price,
                        final_price: p.final_price,
                        image: p.image,
                        customizable: p.type === "customizable",
                        type: p.type,
                        badges: [],
                    }));
                    setProducts(mappedProducts);
                } else {
                    console.error("Failed to fetch products");
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);



    if (loading) return <ShopCardSkeleton />;

    return (
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
            {products.map((product) => (
                <ShopCard
                    key={product.id}
                    product={product}
                    onAddToCart={(p) => console.log("Add to Cart", p)}
                    onCustomize={(p) => console.log("Customize", p)}
                />
            ))}
        </div>
    );
}

export default About;