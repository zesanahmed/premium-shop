import { FaCartPlus, FaBolt } from "react-icons/fa";
export type Product = {
  id: string | number;
  title: string;
  image: string;
  price: number;
  rating: number;
  discount?: number;
  originalPrice?: number;
  stock?: number;
  category?: string;
  brand?: string;
  description?: string;
  thumbnails?: string[];
};

type ProductInfoProps = {
  product: Product;
};
const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-xl text-primary font-semibold">
        ${product.price}{" "}
        <span className="line-through text-gray-400 ml-2">
          ${product.originalPrice}
        </span>
      </p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      <p className="text-green-600 font-medium">In Stock</p>

      {/* Quantity Selector */}
      <div className="flex items-center gap-2">
        <span>Qty:</span>
        <input
          type="number"
          className="input input-bordered w-20"
          defaultValue={1}
          min={1}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-4">
        <button className="btn btn-primary flex items-center gap-2">
          <FaCartPlus /> Add to Cart
        </button>
        <button className="btn btn-secondary flex items-center gap-2">
          <FaBolt /> Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
