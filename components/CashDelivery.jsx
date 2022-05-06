import { useState } from "react";

export default function CashDelivery({ total, createOrder }) {
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [showModal, setShowModal] = useState(true);

  function handleClick() {
    createOrder({
      customerName,
      customerAddress,
      contactInfo: "example@email.com, 01234567",
      total,
      paymentMethod: 0,
    });
  }
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-100 bg-food2 outline-none focus:outline-none">
                <div className="flex items-end justify-end">
                  <button
                    onClick={() => setShowModal(false)}
                    type="button"
                    className="rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-10">
                  <div className="w-full space-y-6">
                    <div className="w-full -mt-2">
                      <div className=" relative ">
                        <div className="w-full">
                          <div className=" relative ">
                            <h3 className="text-xl font-bold text-neutral-900">
                              You will be charged $20 on delivery
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className=" relative ">
                        <input
                          type="text"
                          id="search-form-price"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                          placeholder="Jane Doe"
                          onChange={(e) => setCustomerName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className=" relative ">
                        <input
                          type="number"
                          id="search-form-location"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                          placeholder="+0 123 456 789"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className=" relative ">
                        <input
                          onChange={(e) => setCustomerAddress(e.target.value)}
                          type="text"
                          id="search-form-name"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                          placeholder="1 Main Street..."
                        />
                      </div>
                    </div>
                    <div>
                      <span className="block w-full rounded-md shadow-sm">
                        <button
                          type="submit"
                          className="py-2 px-4 bg-yellow-500 font-semibold hover:bg-yellow-600 text-sm text-white uppercase w-full rounded-md"
                          onClick={handleClick}
                        >
                          Order
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
