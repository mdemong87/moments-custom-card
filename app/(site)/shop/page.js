"use client";

import ShopCardSkeleton from "@/app/componnent/ShopCardSkeleton";
import MakeGet from "@/utilis/requestrespose/get";
import { useEffect, useState } from "react";
import ShopCard from "../../componnent/ShopCard";

const About = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);



    const fetchProducts = async () => {

        const res = await MakeGet(`api/shop`);

        if (res.success) {
            setProducts(res?.data);
            setLoading(false);
        } else {
            setLoading(false);
            console.error("Failed to fetch products");
        }

    };



    console.log(products);


    useEffect(() => {
        fetchProducts();
    }, []);














    if (loading) return <ShopCardSkeleton />;

    return (
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 max-w-7xl mx-auto">
            {products?.data?.map((product) => (
                <ShopCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default About;