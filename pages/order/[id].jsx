import axios from "axios";
import Image from "next/image";
import styles from "../../styles/Custom.module.css";

export default function Order({ order }) {
  const status = order.status;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <>
      <div className="bg-food">
        <div className="container mx-auto p-20">
          <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-7xl">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5">
                <div className="md:grid md:grid-cols-3 gap-2 ">
                  <div className="col-span-2 p-5">
                    <div className="flex flex-col">
                      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                          <div className="overflow-hidden">
                            <table className="min-w-full text-center">
                              <thead className="bg-neutral-900">
                                <tr>
                                  <th
                                    scope="col"
                                    className="font-semibold text-medium text-white px-0 py-4"
                                  >
                                    Customer Name
                                  </th>
                                  <th
                                    scope="col"
                                    className="font-semibold text-medium text-white px-0 py-4"
                                  >
                                    Delivery Address
                                  </th>
                                  <th
                                    scope="col"
                                    className="font-semibold text-medium text-white px-0 py-4"
                                  >
                                    Shipping Update
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="px-6 py-8 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {order.customerName}
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                    <p>{order.customerAddress}</p>
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <p>
                                      f...@example.com
                                      <br />
                                      +1...40
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <div className="flex justify-between items-center mt-6 pt-6">
                              <div className="items-center">
                                <div className={statusClass(0)}>
                                  <div className="flex">
                                    <Image
                                      src="/images/icons/order.png"
                                      width={40}
                                      height={40}
                                      className=""
                                      alt="Order Made"
                                    />
                                    <span className="right-0 top-0 rounded-full bg-teal-600 w-4 h-4 top right p-0 m-0 text-white text-sm  leading-tight text-center checkedIcon">
                                      &#x2714;
                                    </span>
                                  </div>
                                  <div className="m-0 p-0">
                                    <span className="text-sm">Order Made</span>
                                  </div>
                                </div>
                              </div>
                              <div className="items-center">
                                <div className={statusClass(1)}>
                                  <div className="flex">
                                    <Image
                                      src="/images/icons/prepare.png"
                                      width={40}
                                      height={40}
                                      className=""
                                      alt="Chef baking..."
                                    />
                                    <span className="right-0 top-0 rounded-full bg-teal-600 w-4 h-4 top right p-0 m-0 text-white text-sm  leading-tight text-center">
                                      &#x2714;
                                    </span>
                                  </div>
                                </div>
                                <div className="m-0 p-0">
                                  <div className="text-sm">Chef baking...</div>
                                </div>
                              </div>
                              <div className="items-center">
                                <div className={statusClass(2)}>
                                  <div className="flex">
                                    <Image
                                      src="/images/icons/delivery.png"
                                      width={40}
                                      height={40}
                                      className=""
                                      alt="Delivery process..."
                                    />
                                    <span className="right-0 top-0 rounded-full bg-teal-600 w-4 h-4 top right p-0 m-0 text-white text-sm  leading-tight text-center">
                                      &#x2714;
                                    </span>
                                  </div>
                                  <div className="m-0 p-0">
                                    <div className="text-sm">
                                      Delivery process...
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="items-center">
                                <div className={statusClass(3)}>
                                  <div className="flex">
                                    <Image
                                      src="/images/icons/delivered.png"
                                      width={40}
                                      height={40}
                                      className=""
                                      alt="Pizza Delivered"
                                    />
                                    <span className="right-0 top-0 rounded-full bg-teal-600 w-4 h-4 top right p-0 m-0 text-white text-sm  leading-tight text-center">
                                      &#x2714;
                                    </span>
                                  </div>
                                  <div className="m-0 p-0">
                                    <div className="text-sm">
                                      Pizza delivered
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" p-5 bg-neutral-900 rounded overflow-visible">
                    {" "}
                    <span className="text-xl font-medium text-gray-100 block pb-3">
                      Order Summary
                    </span>{" "}
                    <div className="flex justify-between mt-5 mb-5">
                      <span className="font-semibold text-medium text-white">
                        Subtotal
                      </span>
                      <span className="font-semibold text-medium text-yellow-600">
                        ${order.total}
                      </span>
                    </div>
                    {/* <div className="flex justify-between mt-5 mb-5">
                      <span className="font-semibold text-medium text-white">
                        Discount
                      </span>
                      <span className="font-semibold text-medium text-yellow-600">
                        $0.00
                      </span>
                    </div> */}
                    <div className="border-t mt-8">
                      <div className="flex font-bold justify-between py-6 text-lg text-white">
                        <span>Total cost</span>
                        <span className="text-yellow-600">${order.total}</span>
                      </div>
                      <button className="bg-yellow-500 font-bold hover:bg-yellow-600 py-3 text-sm text-green-800 uppercase w-full">
                        Paid
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const response = await axios.get(
    `http://localhost:3000/api/orders/${params.id}`
  );
  return {
    props: {
      order: response.data,
    },
  };
}
