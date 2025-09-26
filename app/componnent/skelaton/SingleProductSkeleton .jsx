"use client";

const SingleProductSkeleton = () => {
    return (
        <div className="">
            {/* Header Skeleton */}
            <div className="mb-7 items-center flex justify-between sticky top-[70px] bg-white py-4 pt-0">
                <div className="h-10 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex justify-end gap-4 mt-6">
                    <div className="h-10 w-20 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="h-10 w-40 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Left Side Content */}
                <div className="space-y-4 col-span-3">
                    {/* Text Lines */}
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
                    ))}

                    {/* Gallery Title */}
                    <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mt-4 mb-2"></div>

                    {/* Gallery Images */}
                    <div className="flex flex-wrap gap-2">
                        {Array.from({ length: 16 }).map((_, idx) => (
                            <div key={idx} className="w-20 h-20 bg-gray-200 rounded-md animate-pulse"></div>
                        ))}
                    </div>
                </div>

                {/* Right Side Thumbnail */}
                <div className="w-full col-span-1">
                    <div className="h-5 w-24 bg-gray-200 rounded mb-2 animate-pulse"></div>
                    <div className="w-full h-60 bg-gray-200 rounded-md animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductSkeleton;
