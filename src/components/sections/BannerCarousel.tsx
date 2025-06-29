import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaArrowDown } from "react-icons/fa";

const BannerCarousel = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden max-h-[700px]">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={4000}
        stopOnHover
        swipeable
        emulateTouch
        className="h-full"
      >
        {/* Slide 1 */}
        <div className="relative w-full h-[70vh]">
          {/* Background Image */}
          <img
            src="/laptop.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to PremiumShop
              </h1>
              <p className="text-lg md:text-xl">
                Discover the best deals today!
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-[70vh]">
          {/* Background Image */}
          <img
            src="/laptop.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to PremiumShop
              </h1>
              <p className="text-lg md:text-xl">
                Discover the best deals today!
              </p>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full h-[70vh]">
          {/* Background Image */}
          <img
            src="/laptop.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to PremiumShop
              </h1>
              <p className="text-lg md:text-xl">
                Discover the best deals today!
              </p>
            </div>
          </div>
        </div>
        {/* Slide 4 */}
        <div className="relative w-full h-[70vh]">
          {/* Background Image */}
          <img
            src="/laptop.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to PremiumShop
              </h1>
              <p className="text-lg md:text-xl">
                Discover the best deals today!
              </p>
            </div>
          </div>
        </div>
      </Carousel>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10">
        <FaArrowDown size={22} />
      </div>
    </section>
  );
};

export default BannerCarousel;
