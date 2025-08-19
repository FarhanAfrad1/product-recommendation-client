// BlogCard.jsx
import React from "react";

export default function BlogCard({ post }) {
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-lg transition border border-base-200">
            <div className="card-body">
                {/* Category and tags */}
                <div className="flex flex-wrap gap-2 mb-2 text-xs">
                    <span className="badge badge-outline">{post.category}</span>
                    {post.tags?.map((tag) => (
                        <span key={tag} className="badge badge-ghost">{tag}</span>
                    ))}
                </div>

                {/* Title */}
                <h2 className="card-title text-lg font-semibold line-clamp-2">
                    {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>

                {/* Footer */}
                <div className="card-actions mt-4 flex items-center justify-between text-xs text-gray-500">
                    <div>
                        <span className="font-medium">{post.author}</span> •{" "}
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString()}
                        </time>{" "}
                        • {post.readTime} min read
                    </div>
                    <button className="btn btn-sm btn-outline btn-primary">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}
