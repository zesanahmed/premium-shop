import InfoCard from "./InfoCard";
import BannerCarousel from "./BannerCarousel";
import CategoriesSection from "../categories/CategoriesSection";
import FeaturedProducts from "./FeaturedProducts";
import FlashSaleSection from "./FlashSaleSection";
import NewArrivalsSection from "./NewArrivalsSection";
import ServicesSection from "./ServicesSection";

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <CategoriesSection />
      <FeaturedProducts />
      <FlashSaleSection />
      <NewArrivalsSection />
      <ServicesSection />
      <InfoCard />
    </div>
  );
};

export default Home;
