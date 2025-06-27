
const PhoneCard = ({phone}) => {
    const {title,brand,price,description,image} = phone;
    
    return (
      <div className="card h-96 bg-base-100 shadow-2xl hover:text-amber-500">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-2xl mb-2">{brand}</h2>
                    <p className='text-lg text-zinc-500'>{title}</p>
                    <p className='text-lg text-zinc-500'>{price}</p>
                    <p className='text-lg text-zinc-500'>{description}</p>
                </div>
            </div>
    );
};

export default PhoneCard;

{/* <div className="card w-80 bg-base-100 shadow-xl">
  <figure className="h-1/2">
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
</div> */}