import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPublishedBlogs, getFeaturedBlog } from '../services/blogService';
import { formatDate } from '../utils/FormateDate';
import './BlogHome.css';

const BlogHome = () => {
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const [featured, allBlogs] = await Promise.all([
        getFeaturedBlog(),
        getPublishedBlogs()
      ]);
      
      setFeaturedBlog(featured);
      // Get recent blogs excluding the featured one
      const recent = allBlogs.filter(blog => blog.id !== featured?.id).slice(0, 6);
      setRecentBlogs(recent);
    } catch (error) {
      setError('Failed to fetch blogs: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBlogClick = (blog) => {
    navigate(`/blogs/${blog.slug || blog.id}`);
  };

  const truncateText = (text, maxLength = 150) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const stripHtml = (html) => {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-white text-xl">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Header */}
      <header className="bg-[#1a1a1a] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
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
              onClick={() => navigate('/')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {error && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-md">
            {error}
          </div>
        )}

        {/* Featured Blog */}
        {featuredBlog && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Featured Post</h2>
            <div 
              className="bg-gray-900 rounded-lg overflow-hidden shadow-xl cursor-pointer featured-blog"
              onClick={() => handleBlogClick(featuredBlog)}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    className="w-full h-64 md:h-full object-cover blog-image" 
                    src={featuredBlog.featuredImage || 'https://placehold.co/600x400/374151/ffffff?text=Featured+Blog'} 
                    alt={featuredBlog.title}
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/600x400/374151/ffffff?text=Featured+Blog';
                    }}
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{formatDate(featuredBlog.createdAt)}</span>
                    {featuredBlog.author && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{featuredBlog.author}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {featuredBlog.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {truncateText(stripHtml(featuredBlog.content))}
                  </p>
                  {featuredBlog.tags && featuredBlog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                                             {featuredBlog.tags.slice(0, 3).map((tag, index) => (
                         <span 
                           key={index}
                           className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full blog-tag"
                         >
                           {tag}
                         </span>
                       ))}
                    </div>
                  )}
                  <button className="text-blue-400 hover:text-blue-300 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recent Blogs Grid */}
        {recentBlogs.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentBlogs.map((blog) => (
                <div 
                  key={blog.id}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer blog-card"
                  onClick={() => handleBlogClick(blog)}
                >
                  <img 
                    className="w-full h-48 object-cover blog-image" 
                    src={blog.featuredImage || 'https://placehold.co/400x300/374151/ffffff?text=Blog+Post'} 
                    alt={blog.title}
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/400x300/374151/ffffff?text=Blog+Post';
                    }}
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <span>{formatDate(blog.createdAt)}</span>
                      {blog.author && (
                        <>
                          <span className="mx-2">•</span>
                          <span>{blog.author}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {truncateText(stripHtml(blog.content), 120)}
                    </p>
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                                                 {blog.tags.slice(0, 2).map((tag, index) => (
                           <span 
                             key={index}
                             className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full blog-tag"
                           >
                             {tag}
                           </span>
                         ))}
                      </div>
                    )}
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!featuredBlog && recentBlogs.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-white mb-4">No Blog Posts Yet</h2>
            <p className="text-gray-400">Check back soon for new content!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogHome; 