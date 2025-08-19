import { useEffect, useState } from "react";
import BlogGrid from "./BlogGrid";

export default function BlogsSection() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/blog.json")
            .then((res) => res.json())
            .then(setPosts);
    }, []);

    return (
        <section className="p-6">
            <h1 className="text-2xl font-bold mb-6">Latest Blogs</h1>
            <BlogGrid posts={posts} />
        </section>
    );
}
