import InfoCard from "./InfoCard";
import BannerCarousel from "./BannerCarousel";
import CategoriesSection from "../categories/CategoriesSection";

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <CategoriesSection />
      <InfoCard />
    </div>
  );
};

export default Home;
