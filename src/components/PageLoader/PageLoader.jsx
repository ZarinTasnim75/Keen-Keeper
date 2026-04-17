import React from 'react';

const PageLoader = () => {
    return (
        <div className="h-[60vh] flex flex-col justify-center items-center gap-4">
            
            <span className="loading loading-spinner loading-lg text-primary"></span>

            <p className="text-gray-500 font-medium">
                Loading page...
            </p>

        </div>
    );
};

export default PageLoader;