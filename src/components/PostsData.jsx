import axios from "axios";
import { useEffect, useState } from "react";
//https://jsonplaceholder.typicode.com/posts

export default function PostsData() {
    let [posts, setPosts] = useState([]);
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setPosts(res.data.slice(0, 9));
            })
            .catch((err) => {
                console.log(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    //---------------------------------------------------

    return (    
        
        <>
            <div className="data-container">
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    posts.map((post) => {
                        return (
                            <div key={post.id} className="post">
                                <span className="id">{post.id}</span>
                                <h3 className="title">{post.title}</h3>
                                <p className="content">{post.body}</p>
                            </div>
                        );
                    })
                )}
            </div>
        </>
    );
}
