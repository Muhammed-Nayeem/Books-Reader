import React from "react";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
  const { books } = useLoaderData();

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-0">
        <div className="text-center py-20">
          <h1 className="text-4xl text-gray-800 font-bold">Books Page</h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-10">
          {books.map((book) => (
            <Book key={book.isbn13} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
