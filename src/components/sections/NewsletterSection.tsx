import NewsletterForm from "../shared/NewsletterForm";

const NewsletterSection = () => {
  return (
    <section className="bg-base-100 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-base-content mb-8">
          Get the latest updates, exclusive offers, and more straight to your
          inbox.
        </p>

        <NewsletterForm />
      </div>
    </section>
  );
};

export default NewsletterSection;
