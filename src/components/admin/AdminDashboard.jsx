import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getAllBlogs, deleteBlog, updateBlog } from '../../services/blogService';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    fetchBlogs();
  }, [currentUser, navigate]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const fetchedBlogs = await getAllBlogs();
      setBlogs(fetchedBlogs);
    } catch (error) {
      setError('Failed to fetch blogs: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await deleteBlog(blogId);
        setBlogs(blogs.filter(blog => blog.id !== blogId));
      } catch (error) {
        setError('Failed to delete blog: ' + error.message);
      }
    }
  };

  const handleTogglePublish = async (blog) => {
    try {
      await updateBlog(blog.id, { ...blog, published: !blog.published });
      setBlogs(blogs.map(b => 
        b.id === blog.id ? { ...b, published: !b.published } : b
      ));
    } catch (error) {
      setError('Failed to update blog: ' + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      setError('Failed to log out: ' + error.message);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gray-900 rounded-lg shadow-xl p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-white">Blog Admin Dashboard</h1>
              <p className="text-gray-400">Welcome, {currentUser?.displayName || currentUser?.email}</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/admin/create')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Create New Post
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          {error && (
            <div className="mb-4 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-md">
              {error}
            </div>
          )}

          {/* Blog Posts Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-300">
              <thead className="text-sm uppercase bg-gray-800">
                <tr>
                  <th className="px-6 py-3">Title</th>
                  <th className="px-6 py-3">Author</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Created</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {blogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-gray-800/50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-white">{blog.title}</div>
                        <div className="text-sm text-gray-400">{blog.slug}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {blog.author || 'Unknown'}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        blog.published 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {blog.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {formatDate(blog.createdAt)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => navigate(`/admin/edit/${blog.id}`)}
                          className="text-blue-400 hover:text-blue-300 text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleTogglePublish(blog)}
                          className={`text-sm ${
                            blog.published 
                              ? 'text-yellow-400 hover:text-yellow-300' 
                              : 'text-green-400 hover:text-green-300'
                          }`}
                        >
                          {blog.published ? 'Unpublish' : 'Publish'}
                        </button>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="text-red-400 hover:text-red-300 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {blogs.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              No blog posts found. Create your first post!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 