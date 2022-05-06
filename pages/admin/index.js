import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";

export default function Index({ orders, products }) {
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const preparationStage = [
    "Chef Baking...",
    "Delivery in process...",
    "Pizza Delivered",
  ];

  async function handleDelete(id) {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/products/${id}`
      );
      setProductList(productList.filter((product) => product._id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleStatus(id) {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStage = item.status;
    try {
      const response = await axios.put(
        `http://localhost:3000/api/orders/${id}`,
        { status: currentStage + 1 }
      );
      setOrderList([
        response.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Head>
        <title>
          Admin - Pizza Earth - Order Pizza and have it delivered at
          light-speed.
        </title>
        <meta
          name="description"
          content="Order your favorite pizza online and have it delivered at light-speed."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* component */}
      <div className="w-full block overflow-x-auto p-20 bg-neutral-100 bg-food2">
        <h1 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl p-3">
          Products
        </h1>
        <table className="border w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="border-r p-2">
                <input type="checkbox" />
              </th>
              <th className="p-2 border-r cursor-pointer text-md font-thin text-neutral-700">
                <div className="flex items-center justify-center">ID</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-md font-thin text-neutral-700">
                <div className="flex items-center justify-center">
                  Pizza Image
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-md font-thin text-neutral-700">
                <div className="flex items-center justify-center">
                  Pizza Title
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-md font-thin text-neutral-700">
                <div className="flex items-center justify-center">Price</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-md font-thin text-neutral-700">
                <div className="flex items-center justify-center">Action</div>
              </th>
            </tr>
          </thead>
          {productList.map((product) => (
            <tbody key={products._id}>
              <tr className="bg-gray-50 text-center">
                <td className="p-2 border-r"></td>
                <td className="p-2 border-r">
                  <input type="text" className="border p-1" />
                </td>
                <td className="p-2 border-r">
                  <input type="text" className="border p-1" />
                </td>
                <td className="p-2 border-r">
                  <input type="text" className="border p-1" />
                </td>
                <td className="p-2 border-r">
                  <input type="text" className="border p-1" />
                </td>
                <td className="p-2">
                  <input type="text" className="border p-1" />
                </td>
              </tr>
              <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                <td className="p-2 border-r">
                  <input type="checkbox" />
                </td>
                <td className="p-2 border-r">#{product._id.slice(0, 9)}...</td>
                <td className="p-2 border-r">
                  <Image
                    src={product.img}
                    width={60}
                    height={60}
                    className="rounded-full "
                    alt="Pizza"
                  />
                </td>
                <td className="p-2 border-r">{product.title}</td>
                <td className="p-2 border-r">${product.prices[0]}</td>
                <td>
                  <a
                    href="#"
                    className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                    onClick={() => handleDelete(product._id)}
                  >
                    Remove
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      <div className="w-full block overflow-x-auto px-20 pb-20 bg-neutral-100 bg-food2">
        <h1 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl p-3">
          Orders
        </h1>
        <table className="border w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="border-r p-2">
                <input type="checkbox" />
              </th>
              <th className="p-2 border-r cursor-pointer text-md font-thin text-neutral-700">
                <div className="flex items-center justify-center">ID</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-md font-thin text-neutral-700">
                <div className="flex items-center justify-center">
                  Customer Name
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-md font-thin text-neutral-700">
                <div className="flex items-center justify-center">
                  Total Cost
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-md font-thin text-neutral-700">
                <div className="flex items-center justify-center">
                  Payment Status
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-md font-thin text-neutral-700">
                <div className="flex items-center justify-center">
                  Preparation Stage
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-md font-thin text-neutral-700">
                <div className="flex items-center justify-center">Action</div>
              </th>
            </tr>
          </thead>
          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr className="bg-gray-50 text-center">
                <td className="p-2 border-r"></td>
                <td className="p-2 border-r">
                  <input type="text" className="border p-1" />
                </td>
                <td className="p-2 border-r">
                  <input type="text" className="border p-1" />
                </td>
                <td className="p-2 border-r">
                  <input type="text" className="border p-1" />
                </td>
                <td className="p-2 border-r">
                  <input type="text" className="border p-1" />
                </td>
                <td className="p-2 border-r">
                  <input type="text" className="border p-1" />
                </td>
                <td className="p-2">
                  <input type="text" className="border p-1" />
                </td>
              </tr>
              <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                <td className="p-2 border-r">
                  <input type="checkbox" />
                </td>
                <td className="p-2 border-r">#{order._id.slice(0, 9)}...</td>
                <td className="p-2 border-r">{order.customerName}</td>
                <td className="p-2 border-r">${order.total}</td>
                <td className="p-2 border-r">
                  {order.paymentMethod === 0 ? (
                    <span>CASH</span>
                  ) : (
                    <span>PAID</span>
                  )}
                </td>
                <td className="p-2 border-r">
                  {preparationStage[order.status]}
                </td>
                <td>
                  <a
                    onClick={() => handleStatus(order._id)}
                    href="#"
                    className="bg-yellow-600 focus:bg-yellow-700 p-2 text-white hover:shadow-lg text-xs font-thin"
                  >
                    Next Stage
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
  const productResponse = await axios.get("http://localhost:3000/api/products");
  const orderResponse = await axios.get("http://localhost:3000/api/orders");
  return {
    props: {
      orders: orderResponse.data,
      products: productResponse.data,
    },
  };
}
