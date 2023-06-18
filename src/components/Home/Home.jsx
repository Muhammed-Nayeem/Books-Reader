import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import reader from "../../assets/reader.json";

const Home = () => {
  return (
    <section className="h-[calc(100vh-120px)] py-10">
      <div className="container mx-auto px-4">
        <div className="sm:flex flex-col sm:flex-row sm:justify-between sm:items-center gap-10 h-[calc(100vh-120px)]">
          <div className="basis-full sm:basis-2/5 mb-20 sm:mb-0">
            <span className="badge">on sale!</span>
            <h1 className="text-4xl font-bold text-gray-800">
              A reader lives a<br />
              thousand lives <span className="text-blue-500">before he dies</span>.
            </h1>
            <p className="my-6 text-lg leading-7">
              Books are a uniquely portable magic. Books serve to show a man
              that those original thoughts of his aren’t very new after all. The
              man who does not read good books is no better than the man who
              can’t.
            </p>
            <div className="flex items-center">
              <Link to="/books" className="inline-flex items-center bg-blue-400 transition-all hover:bg-blue-600 text-white px-5 py-2 rounded mr-4">
                <span className="font-medium">Visit Store</span>
                <ShoppingCartIcon className="h-5 w-5 ml-2 text-white" />
              </Link>
              <Link to="/about" className="font-medium text-gray-800 transition-colors hover:text-blue-600">Learn More</Link>
            </div>
          </div>
          <div className="basis-full sm:basis-2/5">
            <div className="w-full">
              <Lottie animationData={reader} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
