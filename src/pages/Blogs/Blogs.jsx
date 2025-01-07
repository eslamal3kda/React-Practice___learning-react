import "./blog.scss";
import BlogCard from "../../components/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { GetServerRequest } from "../../axios/GetServerRequest";

export default function Blogs() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["blogs"],
        queryFn: () => GetServerRequest("/blogs"),
        refetchOnWindowFocus: false,
    });

    if (isLoading)
        return (
            <div className="blog_page">
                <h2 className="loading">Loading...</h2>
            </div>
        );
    if (isError)
        return (
            <div className="blog_page">
                <h2>SomeThing Error.!</h2>
            </div>
        );

    console.log(data);
    return (
        <div className="blog_page">
            <div className="blogs_container">
                {data.data.map((blog) => (
                    <BlogCard key={blog.slug} title={blog.title} description={blog.description} image={blog.image} url={blog.slug} />
                ))}
            </div>
        </div>
    );
}
