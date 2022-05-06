import Link from "next/link";
import Image from "next/image";

export default function PizzaCard({ pizza }) {
  return (
    <div className="p-4">
      <div className="md:flex max-w-md shadow-lg rounded-lg overflow-hidden bg-neutral-50 bg-food2">
        <div className="flex items-center justify-center md:shrink-0">
          <Image
            className="h-48 w-full md:h-full md:w-48 object-cover"
            src={pizza.img}
            alt="Pizza"
            width={192}
            height={192}
          />
        </div>
        <div className="p-4">
          <h1 className="text-neutral-900 font-bold text-2xl">{pizza.title}</h1>
          <p className="mt-2 text-neutral-800 text-sm">{pizza.desc}</p>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-yellow-600 font-bold text-xl">
              ${pizza.prices[0]}
            </h1>
            <Link href={`/product/${pizza._id}`}>
              <a className="px-3 py-2 border text-white bg-yellow-600 hover:bg-transparent hover:bg-yellow-800 text-xs font-bold uppercase rounded">
                Order
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
