import { useState,useEffect } from "react";
import axios from "axios";

function useFetch(url){
    const [productlist, setProductlist] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        try {
            const products = await axios.get(url);
            setProductlist(products.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }


    useEffect(() => {
        getProducts();
    }, []);

    return {loading, productlist};
}
export default useFetch;
