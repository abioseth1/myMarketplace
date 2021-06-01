import React, { useEffect, useState } from 'react';
import axios from "axios";
import Product from '../components/Product.js';
import LoadingBox from '../components/LoadingBox.js';
import MessageBox from '../components/MessageBox.js';



export default function HomeScreen() {

    // hook to get data from API
    const [products, setProducts] = useState([]);

    // another hook to show loading
    const [loading, setLoading] = useState(false);

    // error report
    const [error, setError] = useState(false); 

    useEffect(() => {
        const fetchData = async() => {
            try {
                // activate loading before getting data
                setLoading(true);
                const {data} = await axios.get('/api/products');
                // deactivate loading after getting data
                setLoading(false);
                setProducts(data);
            }
            catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [])

    return (
        <div>
            {loading ? (<LoadingBox></LoadingBox>
             ) : 
            error ? (<MessageBox variant = "danger">{error}</MessageBox>
            ) : (
                <div className="row center">
                    {
                    products.map((product) => (
                        <Product key ={product._id} product = {product}></Product>
                        ))
                    } 
                </div>
            )}
        </div>
    );
}
