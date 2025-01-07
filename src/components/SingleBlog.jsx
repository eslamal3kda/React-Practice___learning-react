import { useParams } from "react-router-dom";
import Button from "./button/Button";
import { useQuery } from "@tanstack/react-query";
import { GetServerRequest } from "../axios/GetServerRequest";

export default function SingleBlog() {
    const { slug } = useParams();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["singleBlog", slug],
        queryFn: () => GetServerRequest(`blogs?slug=${slug}`),
        refetchOnWindowFocus:false
    });

    if (isLoading)
        return (
            <div className="blog_page">
                <h2 className="loading">Loading...</h2>
            </div>
        );
    if (isError) {
        <div className="blog_page">
            <h2>SomeThing Error.!</h2>
        </div>;
    }

    console.log(data);

    return (
        <div className="single_blog_page ">
            {data.data.map((blog) => {
                return (
                    <div key={blog.slug} className="single_blog_container">
                        <div className="single_blog_image">
                            <img src={blog.image} alt="blog image" />
                        </div>
                        <div className="single_blog_content">
                            <h2>{blog.title}</h2>
                            <p>{blog.description}</p>
                            <h4>{blog.author}</h4>
                        </div>
                    </div>
                );
            })}
            <Button title="Take Me Back" url="/blogs" />
        </div>
    );
}
