import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-4 pt-12 pb-8 text-white bg-neutral-900 border-t border-gray-200">
      <div className="container flex flex-col justify-between max-w-6xl px-4 mx-auto overflow-hidden lg:flex-row">
        <div className="w-full pl-12 mr-4 text-left lg:w-1/4 sm:text-center sm:pl-0 lg:text-left">
          <Link href="/">
            <a className="flex justify-start block text-left sm:text-center lg:text-left sm:justify-center lg:justify-start">
              <span className="flex items-start sm:items-center">
                <svg
                  className="w-auto h-10 text-gray-800"
                  viewBox="0 0 18 19"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Sketch.</desc>
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Rounded"
                      transform="translate(-783.000000, -3212.000000)"
                    >
                      <g
                        id="Maps"
                        transform="translate(100.000000, 3068.000000)"
                      >
                        <g
                          id="-Round-/-Maps-/-local_pizza"
                          transform="translate(680.000000, 142.000000)"
                        >
                          <g>
                            <polygon
                              id="Path"
                              points="0 0 24 0 24 24 0 24"
                            ></polygon>
                            <path
                              d="M12,2 C9.01,2 6.28,3.08 4.17,4.88 C3.46,5.49 3.31,6.53 3.77,7.34 L11.13,20.45 C11.51,21.13 12.49,21.13 12.87,20.45 L20.23,7.34 C20.69,6.53 20.54,5.48 19.83,4.88 C17.73,3.09 14.99,2 12,2 Z M7,7 C7,5.9 7.9,5 9,5 C10.1,5 11,5.9 11,7 C11,8.1 10.1,9 9,9 C7.9,9 7,8.1 7,7 Z M12,15 C10.9,15 10,14.1 10,13 C10,11.9 10.9,11 12,11 C13.1,11 14,11.9 14,13 C14,14.1 13.1,15 12,15 Z"
                              fill="#ca8a04"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className="ml-1 font-sans text-2xl font-black text-white">
                  Pizza Earth
                  <span className="text-red-500">.</span>
                </span>
              </span>
            </a>
          </Link>
          <p className="mt-6 mr-4 text-base text-white">
            Order your favorite pizza and have it delivered at light-speed.
          </p>
        </div>

        <div className="block w-full pl-10 mt-6 text-sm lg:w-3/4 sm:flex lg:mt-0">
          <ul className="flex flex-col w-full p-0 font-medium text-left text-white list-none">
            <li className="inline-block px-3 py-2 mt-5 font-bold uppercase tracking-wide text-white  md:mt-0">
              Menu
            </li>
            <li>
              <Link href="#">
                <a className="inline-block px-3 py-2 text-neutral-300  no-underline hover:text-yellow-600">
                  Italian Pizza
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="inline-block px-3 py-2 text-neutral-300  no-underline hover:text-yellow-600">
                  Greek Pizza
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="inline-block px-3 py-2 text-neutral-300  no-underline hover:text-yellow-600">
                  Caucasian Pizza
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="inline-block px-3 py-2 text-neutral-300  no-underline hover:text-yellow-600">
                  American Pizza
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="inline-block px-3 py-2 text-neutral-300  no-underline hover:text-yellow-600">
                  Tomato Pie
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="inline-block px-3 py-2 text-neutral-300  no-underline hover:text-yellow-600">
                  Pizza Margherita
                </a>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col w-full p-0 font-medium text-left text-white list-none">
            <li className="inline-block px-3 py-2 mt-5 font-bold uppercase tracking-wide text-white  md:mt-0">
              Company
            </li>
            <li>
              <Link href="#">
                <a className="inline-block px-3 py-2 text-neutral-300  no-underline hover:text-yellow-600">
                  Privacy
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="inline-block px-3 py-2 text-neutral-300  no-underline hover:text-yellow-600">
                  Terms of Service
                </a>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col w-full p-0 font-medium text-left text-white list-none">
            <li className="inline-block px-3 py-2 mt-5 font-bold uppercase tracking-wide text-white  md:mt-0">
              Services
            </li>
            <li>
              <Link href="#">
                <a className="inline-block px-3 py-2 text-neutral-300  no-underline hover:text-yellow-600">
                  Healthy Foods
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="inline-block px-3 py-2 text-neutral-300  no-underline hover:text-yellow-600">
                  Fast Delivery
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="inline-block px-3 py-2 text-neutral-300  no-underline hover:text-yellow-600">
                  Original Recipe
                </a>
              </Link>
            </li>
          </ul>
          <div className="flex flex-col w-full text-white">
            <div className="inline-block px-3 py-2 mt-5 font-bold uppercase text-white  md:mt-0">
              Follow Us
            </div>
            <div className="flex justify-start pl-4 mt-2">
              <Link href="#">
                <a
                  className="flex items-center block mr-6 text-blue-400 no-underline hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                  </svg>
                </a>
              </Link>
              <Link href="#">
                <a
                  className="flex items-center block mr-6 text-blue-700 no-underline hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </a>
              </Link>
              <Link href="#">
                <a
                  className="flex items-center block mr-6 text-red-700 no-underline hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-9 h-9 fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 pt-6 mt-10 text-center text-gray-500 border-gray-100">
        <div className="flex items-center justify-center pl-4 mt-2">
          <Link href="#">
            <a
              className="flex items-center block mr-6 text-white no-underline hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/payments/paypal-color.svg"
                width="64"
                height="64"
                alt="Paypal"
              />
            </a>
          </Link>
          <Link href="#">
            <a
              className="flex items-center block mr-6 text-white no-underline hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/payments/master-card.svg"
                width="80"
                height="80"
                alt="Mastercard"
              />
            </a>
          </Link>
          <Link href="#">
            <a
              className="flex items-center block mr-6 text-white no-underline hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/payments/visa.svg"
                width="120"
                height="120"
                alt="Visa"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="pt-2 pt-4 mt-2 text-center text-neutral-400 border-gray-100">
        © Pizza Earth. All rights reserved.
      </div>
    </div>
  );
}
