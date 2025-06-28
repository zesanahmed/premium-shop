import InfoCard from "./InfoCard";
import BannerCarousel from "./BannerCarousel";
import CategoriesSection from "../categories/CategoriesSection";
import FeaturedProducts from "./FeaturedProducts";
import FlashSaleSection from "./FlashSaleSection";

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <CategoriesSection />
      <FeaturedProducts />
      <FlashSaleSection />
      <InfoCard />
    </div>
  );
};

export default Home;
