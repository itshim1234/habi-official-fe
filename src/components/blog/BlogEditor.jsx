import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './BlogEditor.css';
import { useAuth } from '../../contexts/AuthContext';
import { createBlog, updateBlog } from '../../services/blogService';
import { useNavigate, useParams } from 'react-router-dom';

const BlogEditor = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    slug: '',
    metaTitle: '',
    metaDescription: '',
    tags: '',
    published: false
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Quill editor configuration
  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const quillFormats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'color', 'background',
    'align',
    'link', 'image'
  ];

  // Generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      setError('Title and content are required');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const blogData = {
        ...formData,
        author: currentUser.displayName || currentUser.email,
        authorId: currentUser.uid,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        createdAt: new Date(),
        updatedAt: new Date()
      };

      if (isEditing) {
        await updateBlog(id, blogData);
      } else {
        await createBlog(blogData);
      }

      navigate('/admin');
    } catch (error) {
      setError('Failed to save blog: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePublish = () => {
    setFormData(prev => ({ ...prev, published: !prev.published }));
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-900 rounded-lg shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-white">
              {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
            </h1>
            <button
              onClick={() => navigate('/admin')}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              ← Back to Admin
            </button>
          </div>

          {error && (
            <div className="mb-4 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={handleTitleChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter blog title"
                required
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Slug
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="blog-post-url"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Content *
              </label>
              <div className="bg-white rounded-md">
                <ReactQuill
                  value={formData.content}
                  onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                  modules={quillModules}
                  formats={quillFormats}
                  placeholder="Write your blog content here..."
                  style={{ height: '300px' }}
                />
              </div>
            </div>

            {/* SEO Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={formData.metaTitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, metaTitle: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="SEO title for search engines"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Meta Description
                </label>
                <input
                  type="text"
                  value={formData.metaDescription}
                  onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="SEO description for search engines"
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tags (comma separated)
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="architecture, design, construction"
              />
            </div>

            {/* Publish Toggle */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="published"
                checked={formData.published}
                onChange={handlePublish}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="published" className="ml-2 block text-sm text-gray-300">
                Publish immediately
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                {loading ? 'Saving...' : (isEditing ? 'Update Post' : 'Create Post')}
              </button>
              
              <button
                type="button"
                onClick={() => navigate('/admin')}
                className="px-6 py-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 rounded-md transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor; 