interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 cursor-pointer">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-primary font-bold text-xl">${product.price}</p>
    </div>
  );
};

export default ProductCard;
