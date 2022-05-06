import { useState } from "react";
import AddNewProduct from "./AddNewProduct";
import PizzaList from "./PizzaList";
import PricingButton from "./PricingButton";
export default function Pricing({ pizzaList, admin }) {
  const [closeButton, setCloseButton] = useState(true);
  return (
    <div
      id="menu"
      className="relative px-8 py-10 bg-menu border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0"
    >
      <div className="container flex flex-col items-center h-full max-w-6xl mx-auto">
        <h2 className="my-5 text-base font-medium tracking-tight text-red-500 uppercase">
          Our Menu
        </h2>
        <h3 className="w-full max-w-2xl px-5 px-8 mt-2 text-2xl font-black leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-6xl md:px-0">
          Explore our Hot and Spicy Pizza Menu for everyone
        </h3>
        <div className="">
          {admin && <PricingButton setCloseButton={setCloseButton} />}
          {!closeButton && <AddNewProduct setCloseButton={setCloseButton} />}
        </div>
        <div className="flex flex-wrap mt-0 p-5 sm:mt-10 lg:mt-20 items-center justify-center">
          <PizzaList
            pizzaList={pizzaList}
            className="w-full h-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
          />
        </div>
      </div>
    </div>
  );
}
