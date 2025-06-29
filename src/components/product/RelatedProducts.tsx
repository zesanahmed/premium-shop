type MyComponentProps = {
  category?: string;
};
const RelatedProducts = ({ category }: MyComponentProps) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Example Cards */}
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="card bg-base-100 shadow-md">
            <figure>
              <img
                src={`https://via.placeholder.com/300x300?text=Product+${num}`}
                alt={`Product ${num}`}
                className="h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Product {num}</h2>
              <p>$99.99</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
