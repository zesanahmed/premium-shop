import flashProducts from "../../data/flashProducts";
import FlashSaleCard from "../shared/FlashSaleCard";
import { FaFire } from "react-icons/fa";

const FlashSaleSection = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-4 pt-12">
      <div className="grid grid-cols-6 gap-4 md:gap-8">
        {/* Left Banner Image */}
        <div className="col-span-1 row-span-2">
          <img
            src="/laptop.jpg"
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
        <div className="col-span-5 grid grid-cols-2 md:grid-cols-5 gap-0">
          {flashProducts.map((product) => (
            <FlashSaleCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSaleSection;
