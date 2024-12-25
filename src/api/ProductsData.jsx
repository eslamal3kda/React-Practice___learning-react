import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




export default function ProductsData() {
    //https://dummyjson.com/products
    const Products_URL = "https://dummyjson.com";

    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState(true);

    async function getProductsData(endpoint) {
        try {
            const productsData = await axios.get(`${Products_URL}/${endpoint}`);
            const myProducts = await productsData.data.products;
            setProducts(myProducts.slice(5, 17));
        } catch (err) {
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getProductsData("products");
    }, []);

    return (
        <>
            <div className="products-container">
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    products.map((product) => {
                        return (
                            <div key={product.id} className="product">
                                <div className="product_img">
                                    <Link to={`/useEffect/${product.id}`}><img src={`${product.images[0]}`} alt="" /></Link>
                                </div>
                                <div className="product_head">
                                    <Link to={`/useEffect/${product.id}`}><h3>{product.title}</h3></Link>
                                    <h3 className="price">{`${product.price}$`}</h3>
                                </div>
                                <div className="content">
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </>
    );
}
