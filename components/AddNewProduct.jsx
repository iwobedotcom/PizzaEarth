import React from "react";
import { useState } from "react";
import axios from "axios";

export default function AddNewProduct({ setCloseButton }) {
  const [showModal, setShowModal] = useState(true);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [img, setImg] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extra, setExtra] = useState(null);
  const [extraIng, setExtraIng] = useState([]);

  function handleExtraInput(e) {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  }
  function handleExtra(e) {
    setExtraIng((prev) => [...prev, extra]);
  }
  function changePrice(e, index) {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  }
  async function handleCreateMenu(params) {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "uploads");
    try {
      const uploadResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/pizzaearth/image/upload",
        data
      );
      const { cloudinaryImg } = uploadResponse.data;
      const newProduct = {
        img: cloudinaryImg,
        title,
        desc,
        prices,
        extraIng,
      };
      await axios.post("http://localhost:3000/api/products", newProduct);
      setCloseButton(true);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-100 bg-food2 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-end justify-end">
                  <button
                    className="rounded-md p-1 inline-flex items-center justify-center text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600"
                    onClick={() => setCloseButton(true)}
                  >
                    <span className="bg-transparent text-neutral-800 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="p-10">
                  <div className="w-full space-y-6">
                    <div className="w-full -mt-2">
                      <div className=" relative ">
                        <div className="w-full">
                          <div className=" relative ">
                            <h3 className="text-xl font-bold text-neutral-900">
                              Add New Pizzas to the Menu 🍕
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className=" relative ">
                        <input
                          type="file"
                          id="search-form-price"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                          placeholder="Choose an image"
                          onChange={(e) => setImg(e.target.files[0])}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className=" relative ">
                        <input
                          type="text"
                          id="search-form-location"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                          placeholder="Pizza Title"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className=" relative ">
                        <textarea
                          type="text"
                          rows={4}
                          id="search-form-location"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                          placeholder="Short Pizza Description..."
                          onChange={(e) => setDesc(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className=" relative flex space-x-4">
                        <input
                          type="number"
                          id="search-form-name"
                          className=" flex flex-col rounded-lg border-transparent flex-1 appearance-none border border-gray-400 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                          placeholder="Pizza [Small]"
                          onChange={(e) => changePrice(e, 0)}
                        />
                        <input
                          type="number"
                          id="search-form-name"
                          className=" flex flex-col rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-1 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                          placeholder="Pizza [Medium]"
                          onChange={(e) => changePrice(e, 1)}
                        />
                        <input
                          type="number"
                          id="search-form-name"
                          className=" flex flex-col rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-1 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                          placeholder="Pizza [Large]"
                          onChange={(e) => changePrice(e, 2)}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className=" relative flex space-x-4">
                        <input
                          type="text"
                          id="search-form-name"
                          name="text"
                          className=" flex flex-col rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-1 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                          placeholder="Item [Extra Ing]"
                          onChange={handleExtraInput}
                        />
                        <input
                          type="number"
                          id="search-form-name"
                          name="price"
                          className=" flex flex-col rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-1 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                          placeholder="Price [Extra Ing]"
                          onChange={handleExtraInput}
                        />
                        <button
                          type="button"
                          className="flex flex-col py-2 px-4 bg-yellow-600 font-semibold hover:bg-yellow-700 text-sm text-white uppercase rounded-md"
                          onClick={handleExtra}
                        >
                          Add
                        </button>
                      </div>
                      <div className="relative flex space-x-4">
                        {extraIng.map((option) => (
                          <span
                            className="p-2 mt-2 bg-neutral-600 font-semibold hover:bg-neutral-700 text-sm text-white capitalize rounded-md cursor-pointer"
                            key={option.text}
                          >
                            {option.text}
                            {": "}${option.price}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="block w-full rounded-md shadow-sm">
                        <button
                          type="submit"
                          className="py-2 px-4 bg-yellow-600 font-semibold hover:bg-yellow-700 text-sm text-white uppercase w-full rounded-md"
                          onClick={handleCreateMenu}
                        >
                          Create Menu
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
