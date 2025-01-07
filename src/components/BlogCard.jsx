import React from "react";
import Button from "./button/Button";

export default function BlogCard({ title, description, image, url }) {
    return (
        <div className="blog_card">
            <div className="blog_header">
                <h2>{title}</h2>
                <img src={image} alt="blog pic" />
            </div>
            <p>{description}</p>
            <Button title="Read More" url={url} />
        </div>
    );
}
