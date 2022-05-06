import Image from "next/image";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import CashDelivery from "../components/CashDelivery";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const discount = Math.floor(Math.random() * 6);
  const totalCost = cart.total + discount;
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const amount = totalCost.toFixed();
  const currency = "USD";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const customerData = await response.json();
      response.status === 201 && router.push(`/order/${customerData._id}`);
      dispatch(reset());
    } catch (error) {
      console.log(error);
    }
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customerName: shipping.name.full_name,
                customerAddress: shipping.address.address_line_1,
                contactInfo: "example@email.com, 01234567",
                total: totalCost,
                paymentMethod: 1,
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <>
      <Head>
        <title>
          Pizza Earth - Order Pizza and have it delivered at light-speed.
        </title>
        <meta
          name="description"
          content="Order your favorite pizza online and have it delivered at light-speed."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-food border-t">
        <div className="container mx-auto p-20">
          <div className="max-w-md mx-auto bg-food2 bg-neutral-50 shadow-lg rounded-lg md:max-w-5xl">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5">
                <div className="md:grid md:grid-cols-3 gap-2 ">
                  <div className="col-span-2 p-5">
                    <h1 className="text-xl font-bold text-neutral-900">
                      Order Listing
                    </h1>
                    {cart.products.map((product) => (
                      <div className="" key={product._id}>
                        <div className="flex justify-between items-center mt-6 pt-6">
                          <div className="flex items-center">
                            <Image
                              src={product.img}
                              width={60}
                              height={60}
                              className="rounded-full "
                              alt="Pizza"
                            />
                            <div className="flex flex-col ml-3">
                              <span className="md:text-md font-medium">
                                {product.title}
                              </span>
                              <span className="text-xs font-light text-gray-400">
                                #{Math.floor(Math.random() * 90000) + 10000}
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-center items-center">
                            <div className="pr-8 flex ">
                              <input
                                type="text"
                                className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                                placeholder={product.quantity}
                              />
                            </div>
                            <div className="pr-8 ">
                              {" "}
                              <div className="sr-only">Extra Ingredients</div>
                              <span className="text-xs font-medium">
                                {product.extras.map((extra) => (
                                  <span key={extra._id}>{extra.ing}, </span>
                                ))}
                              </span>
                            </div>
                            <div className="pr-8 ">
                              {" "}
                              <span className="text-xs font-bold">
                                ${product.price.toFixed(2)}
                              </span>
                            </div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="z-10 p-5 bg-neutral-900 rounded overflow-visible">
                    <span className="text-xl font-bold text-gray-100 block pb-3">
                      Order Summary
                    </span>{" "}
                    <div className="flex justify-between mt-10 mb-5">
                      <span className="font-semibold text-medium text-white">
                        Pizza(s)
                      </span>
                      <span className="font-semibold text-medium text-yellow-600">
                        &#40;{cart.quantity}&#41;
                      </span>
                    </div>
                    <div className="flex justify-between mt-5 mb-5">
                      <span className="font-semibold text-medium text-white">
                        Subtotal
                      </span>
                      <span className="font-semibold text-medium text-yellow-600">
                        ${cart.total.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between mt-5 mb-5">
                      <span className="font-semibold text-medium text-white">
                        Discount
                      </span>
                      <span className="font-semibold text-medium text-yellow-600">
                        ${discount.toFixed(2)}
                      </span>
                    </div>
                    <div className="border-t mt-8">
                      <div className="flex font-bold justify-between py-6 text-lg text-white">
                        <span>Total cost</span>
                        <span className="text-yellow-600">
                          ${totalCost.toFixed(2)}
                        </span>
                      </div>
                      {open ? (
                        <div className="">
                          <PayPalScriptProvider
                            options={{
                              "client-id":
                                "Ae1PEaBOIHm1q4KZszZ-EDpnrEa0CQQoXPKPt_G_tm81n-ATZDwVB9cPo-l-hrUqcTlbGtJk7YWu1uWT",
                              components: "buttons",
                              currency: "USD",
                            }}
                          >
                            <ButtonWrapper
                              currency={currency}
                              showSpinner={false}
                            />
                          </PayPalScriptProvider>
                          <button
                            className="bg-neutral-800 hover:bg-neutral-700 py-3 text-sm text-white font-sans rounded-md capitalize w-full"
                            onClick={() => setCash(true)}
                          >
                            Payment on delivery?
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setOpen(true)}
                          className="bg-yellow-500 font-semibold hover:bg-yellow-600 py-3 text-sm text-white uppercase w-full"
                        >
                          Checkout
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {cash && (
          <CashDelivery
            total={totalCost.toFixed(2)}
            createOrder={createOrder}
          />
        )}
      </div>
    </>
  );
}
