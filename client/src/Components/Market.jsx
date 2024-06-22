import React from "react";
import list from "../list.json";
import Card from "./Card";
function Market() {
  return (
    <>
      <section className="py-12 bg-white sm:py-16 lg:py-20 dark:bg-black">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              Our Exclusive Book Store
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-black dark:text-white">
              Welcome to ReadersZone, your haven for literary treasures! Whether
              you're searching for the latest bestsellers, timeless classics, or
              hidden gems, we are here to cater to your every reading desire.
              Explore our diverse collection, enjoy personalized
              recommendations, and immerse yourself in a world of words. Happy
              reading!
            </p>
          </div>
 
          <div className="mt-12 grid mmd:grid-cols-2 grid-cols-1 gap-6 xl:grid-cols-3 ">
            {list.map((item) => (
              <div className="flex justify-center items-center">

                <Card key={item.id} item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Market;
