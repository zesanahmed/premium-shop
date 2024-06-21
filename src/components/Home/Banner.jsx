
import InfoCard from './InfoCard';

const Banner = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-5 pb-6 text-center">
        <div className="mb-8">
          <img
            src="/public/banner.avif"
            alt="Premium Shop Banner"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Premium Shop</h1>
        <p className="text-lg text-gray-600 mb-4">
          Your One-Stop Destination for Quality Products
        </p>
        <p className="text-md text-gray-600 mb-6">
          Discover the Best Deals on Top-Quality Products!
        </p>
        <InfoCard/>
        <p className="text-lg text-gray-600 mt-8">Built with the Latest Technology:</p>
        <ul className="text-lg text-gray-600 mb-8">
          <li>React for a dynamic and responsive user experience</li>
          <li>Express for robust and scalable backend services</li>
          <li>MongoDB for secure and efficient data management</li>
          <li>Tailwind CSS & DaisyUI for a beautiful, modern, and customizable design</li>
        </ul>
        <a
          href="/shop"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg text-lg shadow-md hover:bg-blue-700"
        >
          Shop Now and Enjoy Exclusive Offers!
        </a>
      </div>
    </div>
  );
};

export default Banner;
