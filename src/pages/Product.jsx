import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default function Product() {
    // "https://dummyjson.com/products"
    const PRODUCT_URL = "https://dummyjson.com/products";
    const { id, sku } = useParams();
    const [singleProduct, setSingleProduct] = useState({});

    async function getProduct(endPoint) {
        try {
            const myProduct = await axios.get(`${PRODUCT_URL}`)
            console.log(myProduct.data.products);          
            setSingleProduct(myProduct);
        } catch (err) {
            console.error(`We hava an Error: ${err.message}`)
        }
    }
    useEffect(() => {
      getProduct('products')
    },[])
    
  return (
    <>
        
    </>
  )
}
