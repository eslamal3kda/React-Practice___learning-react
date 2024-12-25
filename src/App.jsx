import "./style/app.scss";
import UseState from "./pages/UseState";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import UseEffect from "./pages/UseEffect";
import SingleProduct from "./components/SingleProduct";

export default function App() {
    const Routing = createBrowserRouter([
        {
            path: "",
            element: <Layout />,
            children: [
                { path: "", element: <UseState /> },
                { path: "useState", element: <UseState /> },
                { path: "useEffect", element: <UseEffect /> },
                { path: "useEffect/:id", element: <SingleProduct /> },
                {path: "*",element: (<div className="no_page"><h1>Page Not Found Yet.</h1></div>),},
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={Routing} />
        </>
    );
}
