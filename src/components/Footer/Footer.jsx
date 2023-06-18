import React from "react";

const Footer = () => {
  const getYear = () => {
    const year = new Date();
    return year.getFullYear();
  };

  return (
    <footer className="bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm font-normal text-gray-500">
            &copy; {getYear()} BooksReader Inc. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
