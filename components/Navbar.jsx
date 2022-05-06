import Link from "next/link";
import "../utils/Dropdown";
import { useSelector } from "react-redux";

export default function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className="fixed top-0 inset-x-0 z-50 w-full h-24 bg-neutral-900">
      <div className="container flex item-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
        <div className="mt-10 justify-start">
          <Link href="/">
            <a className="relative flex items-center h-5 font-black leading-none">
              <svg
                className="w-auto h-10 fill-current"
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
                    <g id="Maps" transform="translate(100.000000, 3068.000000)">
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
            </a>
          </Link>
        </div>
        <nav
          id="nav"
          className="absolute top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-sm text-white bg-neutral-900 border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative"
        >
          <Link href="/#menu">
            <a className="ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-yellow-600 uppercase">
              Order Online
            </a>
          </Link>
          <Link href="#features">
            <a className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-yellow-600 uppercase">
              Services
            </a>
          </Link>
          <Link href="#chefs">
            <a className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-yellow-600 uppercase">
              Chefs
            </a>
          </Link>
          <Link href="/">
            <a className="font-bold duration-100 transition-color hover:text-yellow-600 uppercase">
              Tracker
            </a>
          </Link>
          <div className="font-sans block p-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-white hover:text-yellow-600">
            <Link href="/cart">
              <a className="relative flex">
                <svg
                  className="flex-1 w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right font-sans p-0 m-0 text-white text-sm  leading-tight text-center">
                  {quantity}
                </span>
              </a>
            </Link>
          </div>
        </nav>
        <div
          id="nav-mobile-btn"
          className="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10"
        >
          <span className="block w-full h-1 mt-2 duration-200 transform bg-neutral-200 rounded-full sm:mt-1" />
          <span className="block w-full h-1 mt-1 duration-200 transform bg-neutral-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}
