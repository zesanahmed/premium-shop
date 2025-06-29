import React from "react";
import NewArrivalCard from "../shared/NewArrivalCard";
import { NewArrivalProduct, newArrivalsData } from "../../data/newArrivals";

const NewArrivalsSection: React.FC = () => {
  // filter only newArrival=true and limit max 6
  const newArrivals: NewArrivalProduct[] = newArrivalsData
    .filter((p) => p.newArrival)
    .slice(0, 6);

  if (newArrivals.length === 0) return null;

  // Split right side cards into two columns, 3 rows
  const rightSideCards = newArrivals;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">New Arrivals</h2>

      <div className="grid grid-cols-6 gap-6">
        {/* Left large image */}
        <div className="col-span-4 rounded-lg overflow-hidden shadow-lg  max-h-96">
          <img
            src="/public/shop.jpg"
            alt="New Arrivals Banner"
            className="w-full h-full object-cover aspect-[4/5]"
          />
        </div>

        {/* Right side 2 columns x 3 rows cards */}
        <div className="col-span-2 grid grid-cols-2 gap-4 h-96">
          {rightSideCards.map((product) => (
            <NewArrivalCard key={product.id} image={product.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
