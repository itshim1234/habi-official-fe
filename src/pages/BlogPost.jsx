import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogBySlug } from '../services/blogService';
import { formatDate } from '../utils/FormateDate';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const fetchedBlog = await getBlogBySlug(slug);
      setBlog(fetchedBlog);
    } catch (error) {
      setError('Failed to fetch blog: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-white text-xl">Loading blog post...</div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-6">{error || 'The blog post you\'re looking for doesn\'t exist.'}</p>
          <button
            onClick={() => navigate('/blogs')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Header */}
      <header className="bg-[#1a1a1a] border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/src/assets/images/mainLogo.webp" 
                alt="Habi Logo" 
                className="h-12 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <h1 className="text-2xl font-bold text-white">Blog</h1>
            </div>
            <button
              onClick={() => navigate('/blogs')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              ← Back to Blogs
            </button>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Blog Header */}
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-400 mb-4">
            <span>{formatDate(blog.createdAt)}</span>
            {blog.author && (
              <>
                <span className="mx-2">•</span>
                <span>{blog.author}</span>
              </>
            )}
            {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
              <>
                <span className="mx-2">•</span>
                <span>Updated {formatDate(blog.updatedAt)}</span>
              </>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {blog.title}
          </h1>
          
          {blog.metaDescription && (
            <p className="text-xl text-gray-300 mb-6">
              {blog.metaDescription}
            </p>
          )}

          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Featured Image */}
        {blog.featuredImage && (
          <div className="mb-8">
            <img 
              src={blog.featuredImage} 
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div 
            className="text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Blog Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {blog.author && (
                <div>
                  <span className="text-gray-400 text-sm">Written by</span>
                  <div className="text-white font-medium">{blog.author}</div>
                </div>
              )}
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  const url = window.location.href;
                  navigator.clipboard.writeText(url);
                  // You could add a toast notification here
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Share
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost; 