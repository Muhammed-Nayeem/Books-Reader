import React from "react";

const Book = ({ book }) => {
  const { image, title, subtitle, price } = book;

  return (
    <div className="bg-white shadow-lg rounded relative overflow-hidden transition-all duration-200 transform hover:-translate-y-2 hover:shadow-2xl">
      <div className="w-full">
        <img className="w-full" src={image} alt="Book Cover" />
      </div>
      <div className="bg-black text-white w-full h-full transition-all duration-200 opacity-0 hover:opacity-80 rounded p-3 absolute inset-0">
        <div className="w-full h-full border rounded flex flex-col p-3">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="my-2 text-gray-200">{subtitle.substring(0, 45)}....</p>
          <p className="mt-auto">Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
