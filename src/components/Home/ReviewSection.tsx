import ReviewCard from "../shared/ReviewCard";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    comment:
      "This website is amazing! The products are top-notch and the service is excellent. Highly recommended!",
  },
  {
    id: 2,
    name: "David Lee",
    image: "https://i.pravatar.cc/100?img=32",
    rating: 4,
    comment:
      "Very professional experience and smooth checkout process. I got my order in time. Will come back again.",
  },
  {
    id: 3,
    name: "Maria Gomez",
    image: "https://i.pravatar.cc/100?img=47",
    rating: 5,
    comment:
      "I loved the customer support and the product quality. Great service and beautiful design!",
  },
];

const ReviewSection = () => {
  return (
    <section className="py-16 bg-base-200 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Customers Say
        </h2>
        <p className="text-base-content mb-10">
          We’re proud to serve thousands of happy customers across the globe.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
