import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { FaceFrownIcon } from "@heroicons/react/24/solid";

const ErrorPage = () => {
  const { status, statusText, error } = useRouteError();

  return (
    <section className="py-5">
      <div className="container mx-auto px-5">
        <div className="h-[100vh] flex flex-col gap-10 md:flex-row justify-center items-center bg-white shadow-2xl rounded-lg px-5 py-2">
          <div className="px-2 pt-5">
            <div className="w-72 h-72 bg-gray-100 rounded-full flex flex-col items-center justify-center shadow-lg animate-pulse">
              <FaceFrownIcon className='w-16 h-16 text-blue-500' />
              <h1 className="text-8xl font-extrabold text-gray-300 mb-3">{status || 404}</h1>
              <h5 className="text-lg font-medium text-gray-400">Page {statusText}</h5>
            </div>
          </div>
          <div className="px-2 text-center">
            <h1 className="text-6xl text-blue-500 font-bold mb-8">Oops!</h1>
            <h5 className="text-xl font-bold text-gray-800 uppercase">Unexpected Error Has Occurred</h5>
            <p className="my-3 text-lg font-medium text-teal-900">{error?.message}</p>
            <Link to="/" className="bg-blue-400 text-white px-5 py-2 mt-3 inline-block rounded-full transition-colors hover:bg-blue-500">Go To Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
