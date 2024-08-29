

export const SkeletonOfertas = () => (
    <div className="w-full max-w-4xl mx-auto animate-pulse">
        <div className="w-full h-6 bg-gray-200 rounded mb-4"></div>
        <div className="relative flex flex-col items-center p-4">
            <div className="w-full bg-gray-200 rounded-lg" style={{ minHeight: '800px' }}></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center py-2">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="w-3 h-3 mx-1 rounded-full bg-gray-300"></div>
                ))}
            </div>
        </div>
    </div>
);
