// CategorySection.tsx
import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Fashion",
    image: "/public/fashion.webp",
    productCount: 45,
    link: "/category/fashion",
    bgColor: "bg-[#FFFDEB]",
  },
  {
    title: "Devices",
    image: "/public/devices.jpg", // make sure it's a real transparent PNG
    productCount: 120,
    link: "/category/devices",
    bgColor: "bg-[#FFF3F3]",
  },
  {
    title: "Electronics",
    image: "/public/electronics.webp",
    productCount: 80,
    link: "/category/electronics",
    bgColor: "bg-[#F0FAFF]",
  },

  {
    title: "toys",
    image: "/public/toys.webp",
    productCount: 60,
    link: "/category/toys",
    bgColor: "bg-[#EFFBF5]",
  },
];

const CategorySection = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
