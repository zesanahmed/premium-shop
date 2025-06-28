// CategoryCard.tsx
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  productCount: number;
  link: string;
  bgColor?: string;
}

const CategoryCard = ({
  title,
  image,
  productCount,
  link,
  bgColor = "bg-[#FFF3F3]",
}: CategoryCardProps) => {
  return (
    <Link
      to={link}
      className={`w-[270px] h-[339px] rounded-lg p-4 shadow-md transition-all duration-300 hover:brightness-90 ${bgColor} flex flex-col items-center justify-center`}
    >
      <img
        src={image}
        alt={title}
        className="w-[235px] h-[235px] object-contain"
      />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-sm text-gray-600">{productCount} Products</p>
    </Link>
  );
};

export default CategoryCard;
