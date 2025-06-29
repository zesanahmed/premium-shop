import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }: { review: any }) => {
  const stars = Array.from({ length: review.rating }, (_, i) => (
    <FaStar key={i} className="text-yellow-400" />
  ));

  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-primary"
        />
        <div>
          <h3 className="font-semibold text-lg">{review.name}</h3>
          <div className="flex items-center">{stars}</div>
        </div>
      </div>
      <p className="text-sm text-gray-600">“{review.comment}”</p>
    </div>
  );
};

export default ReviewCard;
