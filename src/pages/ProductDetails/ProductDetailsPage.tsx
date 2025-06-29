import { useParams } from "react-router-dom";
import ProductDescription from "../../components/product/ProductDescription";
import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";
import ProductReviews from "../../components/product/ProductReviews";
import RelatedProducts from "../../components/product/RelatedProducts";
import flashProducts from "../../data/flashProducts";

const ProductDetailsPage = () => {
  const { id } = useParams<string>();
  const product = flashProducts.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ProductGallery images={product.thumbnails || []} />
        <ProductInfo product={product} />
      </div>

      <ProductDescription description={product.description} />
      <ProductReviews productId={id!} />

      <RelatedProducts category={product.category} />
    </div>
  );
};

export default ProductDetailsPage;
