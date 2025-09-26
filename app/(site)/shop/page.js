"use client";

import Development from "@/app/componnent/Development";
import getCookie from "@/utilis/helper/cookie/gettooken";
import MakeGet from "@/utilis/requestrespose/get";
import { useEffect, useState } from "react";
import ShopCard from "../../componnent/ShopCard";

const About = () => {

    const token = getCookie();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchProducts = async () => {

        const res = await MakeGet(`api/shop`, token);


        console.log(res);

        if (res.success) {
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

    };




    useEffect(() => {
        fetchProducts();
    }, []);



    if (loading) return <Development />;

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