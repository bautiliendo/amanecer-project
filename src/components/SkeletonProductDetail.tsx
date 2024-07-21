export const SkeletonProductDeatail = () => (
    <div className='w-full py-32 px-4 animate-pulse'>
        <div className="h-8 w-24 bg-gray-200 rounded mb-4 sm:hidden"></div>
        <div className="gap-2 bg-white w-full mx-auto md:flex max-w-auto min-w-auto xl:max-w-[1240px] xl:min-w-[1240px] rounded-md">
            <div className='flex justify-center items-center md:shadow-lg min-w-[40%]'>
                <div className="h-60 w-60 sm:h-80 sm:w-80 bg-gray-200 rounded-md"></div>
            </div>
            <div className='flex flex-col shadow-lg p-2 w-full'>
                <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded mb-4 w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4 w-1/2"></div>

                <div className='flex p-3'>
                    <div className="h-10 w-40 bg-gray-200 rounded"></div>
                </div>
                <div className='p-3 flex gap-2 mb-2'>
                    <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                </div>
            </div>
        </div>
    </div>
);