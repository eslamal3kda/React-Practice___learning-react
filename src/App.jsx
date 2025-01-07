import "./style/app.scss";
import UseState from "./pages/UseState";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import UseEffect from "./pages/UseEffect";
import SingleProduct from "./components/SingleProduct";
import UseContext from "./pages/UseContext";
import { CounterProvider } from "./context/counter";
import { NotifyProvider } from "./context/notify";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Blogs from "./pages/Blogs/Blogs";
import SingleBlog from "./components/SingleBlog";

export default function App() {
    const queryClient = new QueryClient()
    

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
                { path: "todo", element: <Todo /> },
                { path: "blogs", element: <Blogs /> },
                { path: "blogs/:slug", element: <SingleBlog /> },
                { path: "login", element: <Login /> },
                {path: "*",element: (<div className="no_page"><h1>Page Not Found Yet.</h1></div>),},
            ],
        },
    ]);
    return (
        <>
        <QueryClientProvider client={queryClient}>
            <CounterProvider>  {/*The provider we created in [ counter.jsx ]*/} 
                <NotifyProvider> {/*that we created in [notify.jsx] */ }
                    <RouterProvider router={Routing} />
                </NotifyProvider>
            </CounterProvider>
        </QueryClientProvider>
        </>
    );
}
