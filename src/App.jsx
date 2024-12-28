import "./style/app.scss";
import UseState from "./pages/UseState";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import UseEffect from "./pages/UseEffect";
import SingleProduct from "./components/SingleProduct";
import UseContext from "./pages/UseContext";
import { CounterProvider } from "./context/counter";
import { NotifyProvider } from "./context/notify";

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
                { path: "useContext", element: <UseContext /> },
                {path: "*",element: (<div className="no_page"><h1>Page Not Found Yet.</h1></div>),},
            ],
        },
    ]);
    return (
        <>
           
            <CounterProvider>  {/*The provider we created in [ counter.jsx ]*/} 
                <NotifyProvider> {/*that we created in [notify.jsx] */ }
                    <RouterProvider router={Routing} />
                </NotifyProvider>
            </CounterProvider>
        </>
    );
}
