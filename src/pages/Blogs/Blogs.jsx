import "./blog.scss";
import BlogCard from "../../components/BlogCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetServerRequest } from "../../axios/GetServerRequest";
import { PostServerRequest } from "../../axios/PostServerRequest";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../../components/button/Button";
import * as Yup from "yup";
import { DeleteServerRequest } from "../../axios/DeleteServerRequest";

export default function Blogs() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["blogs"],
        queryFn: () => GetServerRequest("/blogs"),
        refetchOnWindowFocus: false,
    });

    const queryClient = useQueryClient();
    const { mutate: addBlog } = useMutation({
        mutationKey: ["addBlog"],
        mutationFn: (data) => PostServerRequest(`blogs`, data),
        onSuccess: () => queryClient.invalidateQueries(["blogs"]),
        onError: (e) => console.error(`something error: ${e.message}`),
    });

    const { mutate: deleteBlog } = useMutation({
        mutationKey: ["deleteBlog"],
        mutationFn: (id) => DeleteServerRequest(`blogs/${id}`),
        onSuccess: () => queryClient.invalidateQueries(["blogs"]),
        onError: (e) => console.error(`Delete Failed: ${e.message}`),
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
    const initialValues = {
        title: "",
        description: "",
        author: "",
        date: "",
        image: `https://picsum.photos/400/300?random&id=${Math.floor(Math.random() * 300)}`,
    };
    const onSubmit = (value) => {
        addBlog(value);
    };
    const validationSchema = Yup.object({
        title: Yup.string().required("This Field Is Required"),
        description: Yup.string().required("This Field Is Required"),
        author: Yup.string().required("This Field Is Required"),
        date: Yup.date().required("This Field Is Required"),
    });
    return (
        <div className="blog_page">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {() => {
                    return (
                        <Form className="blog-form">
                            <Field type="text" name="title" placeholder="Enter The Title" />
                            <ErrorMessage className="blogErrorMessage" name="title" component={"p"} />
                            <Field type="text" name="description" placeholder="Enter The Description" />
                            <ErrorMessage className="blogErrorMessage" name="description" component={"p"} />
                            <Field type="text" name="author" placeholder="Enter Author" />
                            <ErrorMessage className="blogErrorMessage" name="author" component={"p"} />
                            <Field type="date" name="date" />
                            <ErrorMessage className="blogErrorMessage" name="date" component={"p"} />
                            <Field name="image" disabled />
                            <button type="submit">Add Blog</button>
                        </Form>
                    );
                }}
            </Formik>
            <div className="blogs_container">
                {data.data.map((blog) => (
                    <BlogCard key={blog.id} title={blog.title} description={blog.description} image={blog.image} url={blog.slug ? blog.slug : blog.id} deleteBlog={deleteBlog} />
                ))}
            </div>
        </div>
    );
}
