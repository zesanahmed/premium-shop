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
            {
                phones.map(phone => <PhoneCard
                key={phone.id}
                phone={phone}
                />)
            }
        </div>
    );
};

export default AllProducts;