
const PhoneCard = (phone) => {
    const {title,brand,price,description,image} = phone;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{brand}</h2>
    <h2 className="card-title">{title}</h2>
    <h2 className="card-title">{price}</h2>
    <p>{description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default PhoneCard;