export const SkeletonOfertas = () => (
    <div className="animate-pulse">
        <div className="h-6 w-48 bg-gray-200 rounded mb-4"></div>
        <div className="relative">
            <div className="w-full h-[600px] bg-gray-200 rounded-lg"></div>
            <div className="absolute top-1/2 -translate-y-1/2 left-5 w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="absolute top-1/2 -translate-y-1/2 right-5 w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center py-2">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="w-4 h-4 mx-1 rounded-full bg-gray-300"></div>
                ))}
            </div>
        </div>
    </div>
);