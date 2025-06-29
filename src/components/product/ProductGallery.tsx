import { useState } from "react";

type ProductGalleryProps = {
  images?: string[];
};

const ProductGallery = ({ images = [] }: ProductGalleryProps) => {
  const [mainImage, setMainImage] = useState<string | undefined>(images[0]);
  return (
    <div className="flex gap-4">
      {/* main image */}
      <img src={mainImage} alt="Main Product" className="w-3/4 rounded-lg" />

      {/* thumbnails */}
      <div className="flex flex-col gap-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumbnail ${i + 1}`}
            className="w-20 h-20 object-cover rounded-md cursor-pointer"
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
