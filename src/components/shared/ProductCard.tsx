import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative bg-white rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 p-4 cursor-pointer">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 group-hover:scale-105"
        />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-primary font-bold text-xl">${product.price}</p>
      </Link>

      {/* Button positioned at bottom right */}
      <button
        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary text-white px-1 py-0.5 rounded-md shadow"
        onClick={(e) => {
          e.stopPropagation(); // prevent bubbling to parent
          e.preventDefault(); // prevent Link click
          console.log("Add to cart clicked", product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
