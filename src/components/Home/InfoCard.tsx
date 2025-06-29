const InfoCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mx-16 text-center py-16">
      <div className="card bg-base-100 shadow-2xl hover:text-amber-500">
        <figure>
          <img src="/public/phone.jpg" alt="" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-2xl mb-2">Phones</h2>
          <p className="text-lg text-zinc-500">
            {" "}
            Latest smartphones at unbeatable prices
          </p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-2xl hover:text-amber-500">
        <figure>
          <img src="/public/books.avif" alt="" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-2xl mb-2">Books</h2>
          <p className="text-lg text-zinc-500">
            {" "}
            A wide range of books for all ages and interests
          </p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-2xl hover:text-amber-500">
        <figure>
          <img src="/public/laptop.jpg" alt="" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-2xl mb-2">Laptops</h2>
          <p className="text-lg text-zinc-500">
            {" "}
            Top brands and models for every need
          </p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-2xl hover:text-amber-500">
        <figure>
          <img src="/public/devices.jpg" alt="" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-2xl mb-2">
            Digital Devices
          </h2>
          <p className="text-lg text-zinc-500">
            {" "}
            Gadgets and accessories for your digital lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
