

import { formatDate } from "../utils/FormateDate";

import React from "react";


const BlogDetailPage = ({ post, onGoBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      {/* Go Back Button */}
      <button
        onClick={onGoBack}
        className="mb-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      >
        &larr; Back to all posts
      </button>

      <article>
        {/* Blog Title and Date */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-3">
            {post.title}
          </h1>
          <p className="text-base text-gray-500">
            Published on {formatDate(post.createdAt)}
          </p>
        </header>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none text-gray-700 mb-10">
          {typeof post.content === "string" ? (
            <p>{post.content}</p>
          ) : (
            Array.isArray(post.content) &&
            post.content.map((block, index) => {
              switch (block.type) {
                case "h1":
                  return <h1 key={index}>{block.value}</h1>;
                case "h2":
                  return <h2 key={index}>{block.value}</h2>;
                case "h3":
                  return <h3 key={index}>{block.value}</h3>;
                case "p":
                  return <p key={index}>{block.value}</p>;
                case "img":
                  return (
                    <img
                      key={index}
                      src={block.value}
                      alt={`Image ${index}`}
                      className="rounded shadow-md"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/600x400/ef4444/ffffff?text=Image+Error";
                      }}
                    />
                  );
                default:
                  return <div key={index}>{block.value}</div>;
              }
            })
          )}
        </div>

        {/* Image Gallery */}
        {Array.isArray(post.imageUrls) && post.imageUrls.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              Image Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {post.imageUrls.map((url, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={url}
                    alt={`${post.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/600x400/ef4444/ffffff?text=Image+Error";
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
};

export default BlogDetailPage;

