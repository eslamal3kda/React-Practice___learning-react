import axios from "axios";
import { useEffect, useState } from "react";
//https://jsonplaceholder.typicode.com/posts

export default function Data() {
    let [posts, setPosts] = useState([]);
    posts.length = 9;

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    //---------------------------------------------------
    //https://dummyjson.com/products

    const PRODUCT_URL = "https://dummyjson.com/products"
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true)
    products.length = 9
    async function getProductsData() {
        try {
            const myProducts = await axios.get(PRODUCT_URL);
            setProducts(myProducts.data.products);
            
        } catch (err){
            console.error(`Error : ${err.message}`)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getProductsData()
    }, []);

    return (
        <>
            <div className="data-container">
                {loading? <h2>Loading...</h2> : posts.map((post) => {
                    return (
                        <div key={post.id} className="post">
                            <span className="id">{post.id}</span>
                            <h3 className="title">{post.title}</h3>
                            <p className="content">{post.body}</p>
                        </div>
                    );
                })}
            </div>
            <hr />
            <div className="products-container">
                {loading ? <h2>Loading...</h2> : products.map((product) => {
                    // console.log(product);
                    // console.log(product.images);
                    
                    return  (
                        <div key={product.id} className="product">
                            <div className="product_img">
                                <img src={`${product.images[0]}`} alt="" />
                            </div>
                            <div className="product_head">
                                <h3>{product.title}</h3>
                                <h3 className="price">{`${product.price}$`}</h3>
                            </div>
                            <div className="content">
                                <p>{product.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
