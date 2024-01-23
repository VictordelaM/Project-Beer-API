import { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import axios from "axios";

const AllBeers = () => {
    const [products, setProducts] = useState([])

    const api = "https://ih-beers-api2.herokuapp.com/beers"

    useEffect(() => {
        const fetchApi = async () => {
            const resp = await axios.get(api)
            setProducts(resp.data)
        }
        fetchApi()
    }, [])



    return ( 
        <>
        <div>ProductsList</div>
            {products.map((product, index) => {
                return (
                    <div key={index}>
                        <ProductsCard
                            product={product}
                        />
                    </div>
                )
            })}
        <Nav/>
        </>
     );
}
 
export default AllBeers;