import React from "react";
import Button from "./button/Button";

export default function BlogCard({ title, description, image, url ,deleteBlog }) {
    return (
        <div className="blog_card">
            <div className="blog_header">
                <h2>{title}</h2>
                <img src={image} alt="blog pic" />
            </div>
            <p>{description}</p>
            <Button title="Read More" url={url} />
            <button className="delete-blog" onClick={()=>deleteBlog(url)}> Delete Card</button>  
        </div>
    );
}
