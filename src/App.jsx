import "./style/app.scss";
import UseState from "./pages/UseState";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import UseEffect from "./pages/UseEffect";
import Product from "./pages/Product";

export default function App() {
    
    const Routing = createBrowserRouter([
        {
            path: '', element: <Layout />, children: [
                {path:'useState' , element: <UseState />},
                {path:'useEffect' , element: <UseEffect />},
                {path:'useEffect/:id/:sku',element: <Product />},
                {path:'*' , element: <h1>Page Not Found Yet.</h1>}
        ] },
        
    ])
    return (
        <>
            <RouterProvider router={Routing} />
        </>
    );
}
