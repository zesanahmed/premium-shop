import { FaCartPlus, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
  discount: number;
}

const FlashSaleCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative bg-white hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Discount Badge */}
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
        -{product.discount}%
      </div>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-md font-semibold">{product.title}</h3>
        <div className="flex items-center gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={
                i < product.rating ? "text-yellow-400" : "text-gray-300"
              }
              size={14}
            />
          ))}
        </div>
        <p className="text-lg font-bold text-primary">${product.price}</p>
      </div>

      {/* Hidden Buttons (hover) */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <Link
          to={`/product/${product.id}`}
          className="btn btn-md bg-white text-primary font-semibold hover:bg-primary hover:text-white"
        >
          View
        </Link>
        <button className="btn btn-md btn-circle bg-white text-primary hover:bg-primary hover:text-white">
          <FaCartPlus />
        </button>
      </div>
    </div>
  );
};

export default FlashSaleCard;
