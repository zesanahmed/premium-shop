type ProductDescriptionProps = {
  description?: string;
};
const ProductDescription = ({ description }: ProductDescriptionProps) => {
  return (
    <div className="prose max-w-none mt-10">
      <h2>Product Description</h2>
      <p>{description}</p>
      <ul>
        <li>Material: Cotton</li>
        <li>Size: Medium</li>
        <li>Weight: 1.2kg</li>
      </ul>
    </div>
  );
};

export default ProductDescription;
