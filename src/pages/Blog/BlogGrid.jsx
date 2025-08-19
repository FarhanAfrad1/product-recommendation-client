// BlogGrid.jsx
import React, { useState } from "react";
import BlogCard from "./BlogCard";

export default function BlogGrid({ posts }) {
    const [currentPage, setCurrent] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(posts.length / itemsPerPage);
    const displayCardPerPage = posts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    return (
        <div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {displayCardPerPage.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
            <div>
                {
                    totalPages > 1 && (
                        <div className="mt-4 flex justify-center gap-2">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    className={`btn btn-sm ${currentPage === i + 1 ? 'btn bg-[#180d38] text-white' : 'btn-outline'}`}
                                    onClick={() => setCurrent(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
}
