import { FC } from "react";
import { IconType } from "react-icons";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
}
const ServiceCard: FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary text-white rounded-full mb-4 text-3xl">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
