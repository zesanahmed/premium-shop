import FlashSaleCard from "../shared/FlashSaleCard";
import { FaFire } from "react-icons/fa";

const flashProducts = [
  // Replace with dynamic data
  {
    id: 1,
    title: "Wireless Headphones",
    image: "/public/headphone.jpg",
    price: 49.99,
    rating: 4.5,
    discount: 40,
  },
  {
    id: 2,
    title: "Smart Watch",
    image: "/public/smartwatch.jpg",
    price: 89.99,
    rating: 4.2,
    discount: 30,
  },
  {
    id: 1,
    title: "Wireless Headphones",
    image: "/public/headphone.jpg",
    price: 49.99,
    rating: 4.5,
    discount: 40,
  },
  {
    id: 2,
    title: "Smart Watch",
    image: "/public/smartwatch.jpg",
    price: 89.99,
    rating: 4.2,
    discount: 30,
  },
  {
    id: 1,
    title: "Wireless Headphones",
    image: "/public/headphone.jpg",
    price: 49.99,
    rating: 4.5,
    discount: 40,
  },
  {
    id: 2,
    title: "Smart Watch",
    image: "/public/smartwatch.jpg",
    price: 89.99,
    rating: 4.2,
    discount: 30,
  },
  {
    id: 1,
    title: "Wireless Headphones",
    image: "/public/headphone.jpg",
    price: 49.99,
    rating: 4.5,
    discount: 40,
  },
  {
    id: 2,
    title: "Smart Watch",
    image: "/public/smartwatch.jpg",
    price: 89.99,
    rating: 4.2,
    discount: 30,
  },
  {
    id: 1,
    title: "Wireless Headphones",
    image: "/public/headphone.jpg",
    price: 49.99,
    rating: 4.5,
    discount: 40,
  },
  {
    id: 2,
    title: "Smart Watch",
    image: "/public/smartwatch.jpg",
    price: 89.99,
    rating: 4.2,
    discount: 30,
  },

  // Add 8 more products...
];

const FlashSaleSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-6 gap-8">
        {/* Left Banner Image */}
        <div className="col-span-1 row-span-2">
          <img
            src="/public/laptop.jpg"
            alt="Flash Sale Banner"
            className="h-full w-full object-cover rounded-l-xl"
          />
        </div>

        {/* Flash Sale Cards */}
        <div className="flex flex-row text-3xl font-bold">
          <h2 className="">Flash Sale</h2>
          <span className="text-red-500 ">
            <FaFire />
          </span>
        </div>
        <div className="col-span-5 grid grid-cols-5 gap-0">
          {flashProducts.map((product) => (
            <FlashSaleCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSaleSection;
