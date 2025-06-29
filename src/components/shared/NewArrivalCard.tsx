import React from "react";

interface NewArrivalCardProps {
  image: string;
}

const NewArrivalCard: React.FC<NewArrivalCardProps> = ({ image }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer h-28">
      <img src={image} className="w-full h-full object-cover rounded-md" />
    </div>
  );
};

export default NewArrivalCard;
