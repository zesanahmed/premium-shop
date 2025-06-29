import { FaPaperPlane } from "react-icons/fa";

const NewsletterForm = () => {
  return (
    <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 items-center">
      <input
        type="email"
        required
        placeholder="Enter your email"
        className="input input-bordered w-full flex-1"
      />
      <button type="submit" className="btn btn-primary flex items-center gap-2">
        <FaPaperPlane />
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
