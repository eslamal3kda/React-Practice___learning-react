import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SingleProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const Products_URL = "https://dummyjson.com";
    const [product, setProduct] = useState({});
    const [isLoading, setLoading] = useState(true);

    async function getProductData(endpoint) {
        try {
            const productData = await axios.get(`${Products_URL}/${endpoint}`);
            const finalProduct = await productData.data;
            setProduct(finalProduct);
        } catch (err) {
            console.error(err.message);
        } finally {
            setLoading(false)
        }
        
    }

    useEffect(() => {
        setLoading(true)
        getProductData(`products/${id}`);
    }, [id]);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (!product) {
        return <h2>Error: product not founded</h2>
    }

    return (
        product&& 
            <>
                <div className="single_product_container">
                    <div className="product">
                        <div className="product_img">
                            <img src={`${product.images[0]}`} alt="image loading..." />
                        </div>
                        <div className="product_name">
                            <h2>{product.title}</h2>
                            <h3>{product.rating}</h3>
                        </div>
                        <hr />
                        <div className="product_content">
                            <h4>{product.description}</h4>
                        </div>
                    </div>

                    <button onClick={()=> navigate('/useEffect')}>Back to products page</button>
                </div>
            </>
        
    );
}
