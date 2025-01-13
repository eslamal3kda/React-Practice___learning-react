import { useContext, useEffect, useState } from "react";
import PostsData from "../components/PostsData";
import ProductsData from "../components/ProductsData";
import { CounterContext } from "../context/counter";
import { PiEmptyBold } from "react-icons/pi";
import Pagination from "../components/Pagination";

export default function UseEffect() {
    let [counter,setCounter] = useState(0)

    useEffect(() => {
        if (counter >= 15) return;
        const interval = setInterval(() => {
            setCounter((prev)=> prev + 1)
        },1000)
            return ()=> clearInterval(interval)
    },[counter])
    const {count,setCount} = useContext(CounterContext)


    useEffect(() => {
    },[])
    


    return (
        <>
            <div className="counter-container">
                <h2 className="interval-counter counter">Interval Counter: {counter}</h2>
                <div className="context-counter-container">
                    <h2 className="context-counter counter">Context Counter: {count}</h2>
                    <PiEmptyBold onClick={()=>setCount(0)} />
                </div>

            </div>
            <hr />
            <PostsData />
            <hr />
            <ProductsData />
            <hr />
            <Pagination />
        </>
    );
}
