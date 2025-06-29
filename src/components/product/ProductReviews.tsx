import { reviews } from "../../data/reviews";

interface ProductReviewsProps {
  productId: string;
}

const ProductReviews = ({ productId }: ProductReviewsProps) => {
  const productReviews = reviews.filter(
    (review) => review.productId === productId
  );

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Customer Reviews</h2>

      {productReviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet.</p>
      ) : (
        productReviews.map((review) => (
          <div
            key={review.id}
            className="border p-4 rounded-lg shadow-sm bg-base-100"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold">{review.userName}</h4>
              <span className="text-yellow-500">⭐ {review.rating}</span>
            </div>
            <p className="text-gray-600">{review.comment}</p>
            <small className="text-sm text-gray-400">
              {new Date(review.createdAt).toLocaleDateString()}
            </small>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductReviews;
