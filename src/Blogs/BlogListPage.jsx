import React from 'react'

import { formatDate } from "../utils/FormateDate";
// Card for the blog list page
const BlogCard = ({ post, onSelectPost }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
      onClick={() => onSelectPost(post)}
    >
      <img 
        className="w-full h-48 object-cover" 
        src={post?.imageUrls?.[0] || 'https://placehold.co/600x400/94a3b8/ffffff?text=No+Image'} 
        alt={post.title || "Blog image"} 
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/600x400/ef4444/ffffff?text=Image+Error';
        }}
      />
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-1">{formatDate(post.createdAt)}</p>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{post.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {post?.content?.find(c => c.type === 'p')?.value || "No preview available."}
        </p>
        <div className="mt-4">
          <span className="text-blue-500 font-semibold group-hover:underline">Read More &rarr;</span>
        </div>
      </div>
    </div>
  );
};



const BlogListPage = ({ posts, onSelectPost }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-800">The Architect's Journal</h1>
      <p className="text-lg text-gray-600 text-center mb-12">Your daily dose of architectural wonders and construction insights.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <BlogCard key={post._id} post={post} onSelectPost={onSelectPost} />
        ))}
      </div>
    </div>
  );
};

export default BlogListPage