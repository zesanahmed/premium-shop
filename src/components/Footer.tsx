

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Premium Shop</h2>
            <p className="text-gray-400">
              Your one-stop destination for quality products. Shop the latest phones, books, laptops, and digital devices at unbeatable prices.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="/" className="text-gray-400 hover:text-gray-200">Home</a></li>
              <li className="mb-2"><a href="/shop" className="text-gray-400 hover:text-gray-200">Shop</a></li>
              <li className="mb-2"><a href="/about" className="text-gray-400 hover:text-gray-200">About Us</a></li>
              <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-gray-200">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-2">Email: support@premiumshop.com</p>
            <p className="text-gray-400 mb-2">Phone: +1 (234) 567-890</p>
            <p className="text-gray-400 mb-6">Address: 1234 Market St, San Francisco, CA 94103</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" className="text-gray-400 hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.348C0 23.405.595 24 1.325 24h11.495v-9.294H9.444v-3.622h3.377V8.413c0-3.348 2.033-5.166 5.006-5.166 1.423 0 2.644.106 3.004.154v3.484H18.74c-1.477 0-1.764.703-1.764 1.734v2.276h3.528l-.46 3.622h-3.068V24h6.003C23.405 24 24 23.405 24 22.675V1.326C24 .595 23.405 0 22.675 0z" /></svg>
              </a>
              <a href="https://www.twitter.com" className="text-gray-400 hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.86 9.86 0 01-3.127 1.195 4.92 4.92 0 00-8.379 4.482c-4.086-.205-7.699-2.164-10.124-5.144a4.822 4.822 0 00-.666 2.475c0 1.708.869 3.216 2.188 4.099a4.93 4.93 0 01-2.229-.616v.061c0 2.386 1.698 4.374 3.95 4.828a4.902 4.902 0 01-2.224.085 4.929 4.929 0 004.604 3.417A9.864 9.864 0 010 19.54 13.9 13.9 0 007.548 21c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" /></svg>
              </a>
              <a href="https://www.instagram.com" className="text-gray-400 hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.96.24 2.413.413.546.213.93.466 1.348.883.417.417.67.802.883 1.348.174.453.359 1.242.413 2.413.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.96-.413 2.413-.213.546-.466.93-.883 1.348-.417.417-.802.67-1.348.883-.453.174-1.242.359-2.413.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.96-.24-2.413-.413a3.944 3.944 0 01-1.348-.883 3.944 3.944 0 01-.883-1.348c-.174-.453-.359-1.242-.413-2.413-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.96.413-2.413a3.944 3.944 0 01.883-1.348 3.944 3.944 0 011.348-.883c.453-.174 1.242-.359 2.413-.413 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.071-1.281.058-2.153.272-2.909.583-.807.331-1.5.779-2.183 1.461-.683.683-1.131 1.376-1.461 2.183-.311.756-.525 1.628-.583 2.909-.059 1.28-.071 1.688-.071 4.947s.012 3.667.071 4.947c.058 1.281.272 2.153.583 2.909.331.807.779 1.5 1.461 2.183.683.683 1.376 1.131 2.183 1.461.756.311 1.628.525 2.909.583 1.28.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.281-.058 2.153-.272 2.909-.583.807-.331 1.5-.779 2.183-1.461.683-.683 1.131-1.376 1.461-2.183.311-.756.525-1.628.583-2.909.059-1.28.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.058-1.281-.272-2.153-.583-2.909-.331-.807-.779-1.5-1.461-2.183-.683-.683-1.376-1.131-2.183-1.461-.756-.311-1.628-.525-2.909-.583-1.28-.059-1.688-.071-4.947-.071zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.262c-2.259 0-4.1-1.841-4.1-4.1s1.841-4.1 4.1-4.1 4.1 1.841 4.1 4.1-1.841 4.1-4.1 4.1zm6.406-11.845c-.796 0-1.44.645-1.44 1.44s.645 1.44 1.44 1.44 1.44-.645 1.44-1.44-.645-1.44-1.44-1.44z" /></svg>
              </a>
              <a href="https://www.linkedin.com" className="text-gray-400 hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.451 20.451h-3.63v-5.293c0-1.261-.023-2.88-1.76-2.88-1.761 0-2.031 1.376-2.031 2.796v5.377h-3.63V9h3.48v1.561h.05c.486-.92 1.676-1.887 3.452-1.887 3.691 0 4.373 2.43 4.373 5.587v6.19zM5.337 7.433c-1.169 0-2.116-.948-2.116-2.116s.948-2.116 2.116-2.116 2.116.948 2.116 2.116-.948 2.116-2.116 2.116zM6.936 20.451H3.738V9h3.198v11.451zM22.225 0H1.771C.793 0 0 .793 0 1.771v20.454C0 23.207.793 24 1.771 24h20.454C23.207 24 24 23.207 24 22.225V1.771C24 .793 23.207 0 22.225 0z" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Premium Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
