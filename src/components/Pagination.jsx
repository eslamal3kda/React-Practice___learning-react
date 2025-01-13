import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Pagination() {
    async function getProductsData(url, page, limit) {
        const res = await axios.get(`https://dummyjson.com/${url}`, { params: { skip:page *limit, limit } });
        console.log(res.data.products);
        return res.data.products;
    }
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const { data, isLoading, isError } = useQuery({
        queryKey: ["products", currentPage],
        queryFn: () => getProductsData("products", currentPage - 1, itemsPerPage),
        keepPreviousData: true,
        refetchOnWindowFocus: false,
    });

    if (isLoading) return <h2>Loading...</h2>;
    if (isError) return <h2>Something went Error.!</h2>;

    return (
        <>
            <h1>Pagination Practice with ReactQuery</h1>
            <div className="pagination-products-container">
                {data.map((ele) => {
                    return (
                        <div key={ele.id} className="pagination-products-card">
                            <h2>
                                {ele.id}-{ele.title}
                            </h2>
                            <p>{ele.description}</p>
                        </div>
                    );
                })}
            </div>
            <div className="pagination-buttons">
                <button onClick={()=> setCurrentPage((prev)=> Math.max(prev - 1 , 1))} disabled={currentPage == 1}>Previous</button>
                <p>current page: {currentPage}</p>
          <button onClick={() => setCurrentPage((prev) => prev + 1)} disabled={data.length < itemsPerPage} >Next</button>
            </div>
        </>
    );
}
