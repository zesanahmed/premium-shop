import InfoCard from "./InfoCard";
import BannerCarousel from "../sections/BannerCarousel";
import CategoriesSection from "../categories/CategoriesSection";
import FeaturedProducts from "../sections/FeaturedProducts";
import FlashSaleSection from "../sections/FlashSaleSection";
import NewArrivalsSection from "../sections/NewArrivalsSection";
import ServicesSection from "../sections/ServicesSection";
import NewsletterSection from "../sections/NewsletterSection";
import ReviewSection from "../sections/ReviewSection";

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <CategoriesSection />
      <FeaturedProducts />
      <FlashSaleSection />
      <NewArrivalsSection />
      <ServicesSection />
      <NewsletterSection />
      <ReviewSection />
      <InfoCard />
    </div>
  );
};

export default Home;
