import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

export default function Product({ pizza }) {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);

  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const diffPrice = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(diffPrice);
  };

  const handleChange = (e, option) => {
    const checkedIng = e.target.checked;

    if (checkedIng) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  };
  return (
    <div className="bg-neutral-50 bg-food2 border-t">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <Link href="/">
                  <a className="mr-2 text-sm font-medium text-neutral-900 uppercase hover:text-yellow-600">
                    Home
                  </a>
                </Link>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-5 text-neutral-800"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <Link href="#">
                  <a className="mr-2 text-sm font-medium text-neutral-900 uppercase hover:text-yellow-600">
                    Menu
                  </a>
                </Link>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-5 text-neutral-800"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <Link href="#">
                <a
                  href="#"
                  aria-current="page"
                  className="font-medium text-yellow-600 uppercase hover:text-yellow-700"
                >
                  {pizza.title}
                </a>
              </Link>
            </li>
          </ol>
        </nav>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-5xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
              {pizza.title}
            </h1>
          </div>
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-yellow-600 hover:text-yellow-700 hover:cursor-pointer">
              ${price.toFixed(2)}
            </p>
            <p className="text-base text-neutral-800 mt-5">{pizza.desc}</p>
            <form className="mt-5">
              {/* Colors */}
              <div>
                <h3 className="text-lg text-neutral-900 font-bold">
                  Choose a size
                </h3>
                <fieldset className="mt-4">
                  <div className="flex items-center space-x-3">
                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                      <Image
                        src="/images/menu/icon.png"
                        width={60}
                        height={60}
                        alt="Pizza Icon"
                        className=""
                        onClick={() => handleSize(0)}
                      />
                      <span className="absolute -right-2 -top-2 bg-red-600 top right p-1 rounded-full m-0 text-white text-sm  leading-tight text-center">
                        Small
                      </span>
                    </label>
                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                      <Image
                        src="/images/menu/icon.png"
                        width={80}
                        height={80}
                        alt="Pizza Icon"
                        className=""
                        onClick={() => handleSize(1)}
                      />
                      <span className="absolute -right-2 -top-1 bg-red-600 top right p-1 rounded-full m-0 text-white text-sm  leading-tight text-center">
                        Medium
                      </span>
                    </label>
                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                      <Image
                        src="/images/menu/icon.png"
                        width={100}
                        height={100}
                        alt="Pizza Icon"
                        className=""
                        onClick={() => handleSize(2)}
                      />
                      <span className="absolute right-2 top-0 bg-red-600 top right p-1 rounded-full m-0 text-white text-sm  leading-tight text-center">
                        Large
                      </span>
                    </label>
                  </div>
                </fieldset>
                <h3 className="text-lg text-neutral-900 font-bold">
                  Extra ingredients?
                </h3>
                <fieldset className="mt-4 mb-7">
                  <div className="flex items-center space-x-3">
                    {pizza.extraIng.map((option) => (
                      <div className="" key={option._id}>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="w-7 h-7 text-red-600 border-neutral-300 rounded-full focus:ring-0"
                            id={option.ing}
                            name={option.ing}
                            onChange={(e) => handleChange(e, option)}
                          />
                          <span className="ml-2 text-neutral-800 text-base">
                            {option.ing}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
                <h3 className="text-lg text-neutral-900 font-bold">Quantity</h3>
                <fieldset className="mt-4 mb-7">
                  <div className="flex items-center space-x-3">
                    <input
                      type="number"
                      defaultValue={1}
                      className=" w-10 h-10 rounded text-neutral-800 border-neutral-300 focus:ring-0 focus:border-neutral-400"
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                </fieldset>
              </div>

              <Link href="#">
                <a
                  className="relative self-start inline-block w-auto p-3 mx-auto mt-10 text-base font-bold text-white bg-yellow-600 hover:bg-transparent hover:bg-yellow-800 border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0 uppercase"
                  onClick={handleClick}
                >
                  Add to cart
                </a>
              </Link>
            </form>
          </div>

          <div className="py-5 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <div className="">
                  <Image
                    src={pizza.img}
                    width={512}
                    height={512}
                    alt="Pizza"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const response = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: response.data,
    },
  };
}
