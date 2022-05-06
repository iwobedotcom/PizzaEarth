import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64 bg-wooden bg-cover">
      <div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
        <div className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
          <h1 className="relative mb-4 text-5xl uppercase font-black leading-tight text-white sm:text-6xl xl:mb-8">
            Hot and <span className="text-red-500">spicy</span>{" "}
            <span className="text-yellow-600">pizza</span>
          </h1>
          <p className="pr-0 mb-8 text-base text-white sm:text-lg xl:text-xl lg:pr-20 font-black">
            We cook your favorite pizza recipe and have it delivered at
            light-speed
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link href="#menu">
              <a className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-transparent border hover:border-yellow-600 hover:bg-yellow-600 border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0 uppercase">
                Order Online
              </a>
            </Link>
            <Link href="#menu">
              <a className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-yellow-600 hover:border hover:bg-yellow-700 border-yellow-800 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0 uppercase">
                Explore Menu
              </a>
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
          <div className="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen">
            <Image
              src="/images/hero/Hero.png"
              alt="Hero Image"
              width="900"
              height="900"
              className="w-full h-auto mt-20 mb-20 ml-0 lg:mt-24 xl:mt-40 lg:mb-0 lg:h-full lg:-ml-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
