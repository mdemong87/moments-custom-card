const ApplicationSkeleton = () => {
    return (
        <div className="animate-pulse w-screen h-screen fixed grid grid-cols-12 gap-2 bg-gray-100">
            {/* Sidebar skeleton */}
            <div className="col-span-12 lg:col-span-2 w-full h-full bg-gray-200"></div>

            {/* Main area */}
            <div className="col-span-10 h-full">
                <div className="grid grid-cols-10 h-full">
                    {/* Card Preview skeleton */}
                    <div className="col-span-10 lg:col-span-6 flex items-center justify-center">
                        <div className="w-80 h-96 bg-gray-300 rounded-xl"></div>
                    </div>

                    {/* Side Controller skeleton */}
                    <div className="col-span-10 lg:col-span-4 w-full h-full bg-white border-t lg:border-l border-gray-200 px-2 md:px-7 lg:px-6 mt-2 lg:mt-0">
                        <div className="space-y-4 mt-5">
                            <div className="w-full h-10 bg-gray-200 rounded"></div>
                            <div className="w-full h-10 bg-gray-200 rounded"></div>
                            <div className="w-full h-10 bg-gray-200 rounded"></div>
                            <div className="w-32 h-10 bg-gray-200 rounded"></div>

                            <div className="w-full h-10 bg-gray-200 rounded"></div>
                            <div className="w-full h-10 bg-gray-200 rounded"></div>
                            <div className="w-full h-10 bg-gray-200 rounded"></div>
                            <div className="w-32 h-10 bg-gray-200 rounded"></div>


                            <div className="w-full h-10 bg-gray-200 rounded"></div>
                            <div className="w-full h-10 bg-gray-200 rounded"></div>
                            <div className="w-full h-10 bg-gray-200 rounded"></div>
                            <div className="w-32 h-10 bg-gray-200 rounded"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ApplicationSkeleton;