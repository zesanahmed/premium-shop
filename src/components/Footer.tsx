const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <h2 className="text-2xl font-bold text-primary">PremiumShop</h2>
            <p className="mt-2 text-sm">
              Your one-stop shop for premium products. Quality guaranteed.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a className="link link-hover" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="link link-hover" href="/shop">
                  Shop
                </a>
              </li>
              <li>
                <a className="link link-hover" href="/about">
                  About Us
                </a>
              </li>
              <li>
                <a className="link link-hover" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
            <ul className="space-y-1">
              <li>
                <a className="link link-hover" href="/faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="link link-hover" href="/returns">
                  Returns
                </a>
              </li>
              <li>
                <a className="link link-hover" href="/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="link link-hover" href="/terms">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact + Social */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm">Email: support@premiumshop.com</p>
            <p className="text-sm">Phone: +880-1234-567890</p>

            <div className="flex gap-4 mt-4">
              <a href="#" className="text-xl hover:text-primary">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-xl hover:text-primary">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-xl hover:text-primary">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-xl hover:text-primary">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PremiumShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
