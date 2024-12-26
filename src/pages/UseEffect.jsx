import { useEffect, useState } from "react";
import PostsData from "../components/PostsData";
import ProductsData from "../components/ProductsData";

export default function UseEffect() {
    let [counter,setCounter] = useState(0)
    useEffect(() => {
        if (counter >= 15) return;
        const interval = setInterval(() => {
            setCounter((prev)=> prev + 1)
        },1000)
            return ()=> clearInterval(interval)
    },[counter])

    return (
        <>
            <h2 className="counter">{counter}</h2>
            <PostsData />
            <hr />
            <ProductsData />
        </>
    );
}
