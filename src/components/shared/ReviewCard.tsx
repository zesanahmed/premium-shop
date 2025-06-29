import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }: { review: any }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{review.name}</h3>
          <div className="flex text-yellow-500">
            {Array.from({ length: review.rating }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">“{review.comment}”</p>
    </div>
  );
};

export default ReviewCard;
