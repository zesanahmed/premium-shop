

const AddProduct = () => {

    const handleSubmit =async(e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image_Url.value;
        const data = {title,brand,price,description,image};
        console.log(data)

        await fetch("http://localhost:5000/phones",{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset();
        })
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
           <h1 className="mt-4 mb-6 text-4xl font-bold text-center">Add a Product</h1>
            <label className="input input-bordered flex items-center gap-2 my-3">
  
  <input 
  type="text" 
  className="grow" 
  placeholder="Title" 
  name="title"
  />
  
</label>
<label className="input input-bordered flex items-center gap-2 my-3">
  
  <input 
  type="text" 
  className="grow" 
  placeholder="Brand"
  name="brand"
  />
</label>
           <label className="input input-bordered flex items-center gap-2 my-3">

  <input 
  type="number" 
  className="grow" 
  placeholder="Price"
  name="price"
  />
</label>
<label className="input input-bordered flex items-center gap-2 my-3">

  <input 
  type="text" 
  className="grow" 
  placeholder="Description"
  name="description"
  />
</label>
           <label className="input input-bordered flex items-center gap-2 my-3">
  
  <input 
  type="text" 
  className="grow" 
  placeholder="Image URL"
  name="image_Url"
  />
</label>

<button
                    type="submit"
                    className="bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
           </form>
        </div>
    );
};

export default AddProduct;