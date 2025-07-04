import { useEffect, useState } from "react";
import PhoneCard from "../components/Cards/PhoneCard";


const AllProducts = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/phones")
        .then(res => res.json())
        .then(data => setPhones(data))
    },[])
    return (
        <div>
            <h1 className="text-center text-3xl font-bold mb-6">All Products</h1>
            <div className="grid grid-cols-3 gap-4">
            {
                phones.map(phone => <PhoneCard
                key={phone._id}
                phone={phone}
                />)
            }
            </div>
        </div>
    );
};

export default AllProducts;