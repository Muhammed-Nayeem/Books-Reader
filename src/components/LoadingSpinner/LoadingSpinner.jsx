import React from "react";

const LoadingSpinner = () => {
  return (
    <section className="h-[calc(100vh-120px)]">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="flex justify-center items-center h-[calc(100vh-120px)]">
          <p className="text-7xl font-thin">L</p>
          <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-400"></div>
          <p className='text-7xl font-thin'>ading....</p>
        </div>
      </div>
    </section>
  );
};

export default LoadingSpinner;
