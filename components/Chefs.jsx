import Image from "next/image";
import Link from "next/link";

export default function Chefs() {
  return (
    <div
      id="chefs"
      className="flex items-center justify-center w-full px-8 py-10 border-gray-100 md:py-16 lg:py-24 xl:py-40 xl:px-0 bg-chef bg-cover border-t"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex-col items-center">
          <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center mb-10">
            <p className="my-5 text-base font-medium tracking-tight text-red-500 uppercase">
              Our customers love our Pizzas
            </p>
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
              Top Chefs
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center max-w-2xl py-8 mx-auto xl:flex-row xl:max-w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <Link href="#">
                      <a className="block relative">
                        <Image
                          src="/images/chefs/1.jpg"
                          alt="Chef"
                          width="159"
                          height="159"
                          className="mx-auto object-cover rounded-full h-20 w-20"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-white text-lg font-medium">
                      Hean Hiut
                    </span>
                    <span className="text-yellow-600 text-md">Belgium</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <Link href="#">
                      <a className="block relative">
                        <Image
                          src="/images/chefs/3.jpg"
                          alt="Chef"
                          width="159"
                          height="159"
                          className="mx-auto object-cover rounded-full h-20 w-20"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-white text-lg font-medium">
                      Igor Novak
                    </span>
                    <span className="text-yellow-600 text-md">Ukraine</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <Link href="#">
                      <a className="block relative">
                        <Image
                          src="/images/chefs/2.jpg"
                          alt="Chef"
                          width="159"
                          height="159"
                          className="mx-auto object-cover rounded-full h-20 w-20"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-white text-lg font-medium">
                      Jig sa Hiut
                    </span>
                    <span className="text-yellow-600 text-md">Spain</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <Link href="#">
                      <a className="block relative">
                        <Image
                          src="/images/chefs/4.jpg"
                          alt="Chef"
                          width="159"
                          height="159"
                          className="mx-auto object-cover rounded-full h-20 w-20"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-white text-lg font-medium">
                      Norman Tuck
                    </span>
                    <span className="text-yellow-600 text-md">Italy</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <Link href="#">
                      <a className="block relative">
                        <Image
                          src="/images/chefs/5.jpg"
                          alt="Chef"
                          width="159"
                          height="159"
                          className="mx-auto object-cover rounded-full h-20 w-20"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-white text-lg font-medium">
                      Masrt kik
                    </span>
                    <span className="text-yellow-600 text-md">Turkey</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <Link href="#">
                      <a className="block relative">
                        <Image
                          src="/images/chefs/6.jpg"
                          alt="Chef"
                          width="159"
                          height="159"
                          className="mx-auto object-cover rounded-full h-20 w-20"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-white text-lg font-medium">
                      Louis Bol
                    </span>
                    <span className="text-yellow-600 text-md">
                      South Africa
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <Link href="#">
                      <a className="block relative">
                        <Image
                          src="/images/chefs/7.jpg"
                          alt="Chef"
                          width="159"
                          height="159"
                          className="mx-auto object-cover rounded-full h-20 w-20"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-white text-lg font-medium">
                      Izno Madrarin
                    </span>
                    <span className="text-yellow-600 text-md">Brazil</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <Link href="#">
                      <a className="block relative">
                        <Image
                          src="/images/chefs/1.jpg"
                          alt="Chef"
                          width="159"
                          height="159"
                          className="mx-auto object-cover rounded-full h-20 w-20"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-white text-lg font-medium">
                      Serena Quille
                    </span>
                    <span className="text-yellow-600 text-md">
                      United Kingdom
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <Link href="#">
                      <a className="block relative">
                        <Image
                          src="/images/chefs/4.jpg"
                          alt="Chef"
                          width="159"
                          height="159"
                          className="mx-auto object-cover rounded-full h-20 w-20"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-white text-lg font-medium">
                      Edouard Sert
                    </span>
                    <span className="text-yellow-600 text-md">Bulgaria</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <Link href="#">
                      <a className="block relative">
                        <Image
                          src="/images/chefs/6.jpg"
                          alt="Chef"
                          width="159"
                          height="159"
                          className="mx-auto object-cover rounded-full h-20 w-20"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-white text-lg font-medium">
                      Parki Son
                    </span>
                    <span className="text-yellow-600 text-md">Canada</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <Link href="#">
                      <a className="block relative">
                        <Image
                          src="/images/chefs/2.jpg"
                          alt="Chef"
                          width="159"
                          height="159"
                          className="mx-auto object-cover rounded-full h-20 w-20"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-white text-lg font-medium">
                      Marine Lo
                    </span>
                    <span className="text-yellow-600 text-md">Mexico</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <Link href="#">
                      <a className="block relative">
                        <Image
                          src="/images/chefs/3.jpg"
                          alt="Chef"
                          width="159"
                          height="159"
                          className="mx-auto object-cover rounded-full h-20 w-20"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-white text-lg font-medium">
                      Mickal Poul
                    </span>
                    <span className="text-yellow-600 text-md">Sweden</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
