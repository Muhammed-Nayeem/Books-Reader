import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const [miniMise, setMiniMise] = useState(true);
  const book = useLoaderData();
  const { image, title, authors, desc, language, pages, price, publisher, year, rating, url } = book;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="p-5 flex flex-col sm:flex-row sm:justify-evenly sm:items-center sm:mx-auto">
          <div className="basis-full sm:basis-2/5 border border-gray-200 rounded mb-5 sm:mb-0">
            <img className="w-full h-full" src={image} alt="Book Image" />
          </div>
          <div className="basis-full sm:basis-2/5">
            <span className="badge">brand new</span>
            <h1 className="text-gray-800 font-bold text-xl lg:text-3xl mb-2">{title}</h1>
            <p className="text-gray-700 my-1">Author: {authors}</p>
            <p className="text-gray-700 my-1">Publisher: {publisher}</p>
            <p className="text-gray-700 my-1">Year: {year}</p>
            <p className="text-gray-700 my-1">Language: {language}</p>
            <p className="text-gray-700 my-1">Pages: {pages}</p>
            <p className="text-gray-700 my-1">Rating: {rating}</p>
            <div className="mt-3">
              {miniMise ? (
                <p className="text-gray-500">
                  {desc.substring(0, 100)}....<span className="text-blue-700 transition-colors hover:text-blue-600 cursor-pointer" onClick={() => setMiniMise(!miniMise)}>Read More</span>
                </p>
              ) : (
                <p className="text-gray-500">
                  {desc}....<span className="text-blue-700 transition-colors hover:text-blue-600 cursor-pointer" onClick={() => setMiniMise(!miniMise)}>Read Less</span>
                </p>
              )}
            </div>
            <div className="flex items-center mt-5">
              <a className="bg-blue-400 text-white font-medium px-5 py-2 rounded transition-colors hover:bg-blue-500" href={url} target="_blank">Buy Now</a>
              <p className="ml-8 font-medium text-teal-950">Price: <span className="text-yellow-500 font-bold">{price}</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
