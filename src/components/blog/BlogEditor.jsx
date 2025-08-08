import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import './BlogEditor.css';
import { useAuth } from '../../contexts/AuthContext';
import { createBlog, updateBlog, getBlogById } from '../../services/blogService';
import { useNavigate, useParams } from 'react-router-dom';

const BlogEditor = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const quillRef = React.useRef();
  
  // Load blog data if editing
  useEffect(() => {
    if (id) {
      setIsEditing(true);
      loadBlogData();
    }
  }, [id]);



  const loadBlogData = async () => {
    try {
      setLoading(true);
      const blog = await getBlogById(id);
      setFormData({
        title: blog.title || '',
        content: blog.content || '',
        metaTitle: blog.metaTitle || '',
        metaDescription: blog.metaDescription || '',
        tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : (blog.tags || ''),
        published: blog.published || false
      });
    } catch (error) {
      setError('Failed to load blog: ' + error.message);
    } finally {
      setLoading(false);
    }
  };
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    metaTitle: '',
    metaDescription: '',
    tags: '',
    published: false
  });
     const [inputValue, setInputValue] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Custom image handler
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const altText = prompt('Enter alt text for the image:');
          const quill = quillRef.current.getEditor();
          const range = quill.getSelection();
          quill.insertEmbed(range.index, 'image', reader.result, 'user');
          
          // Add alt text as data attribute
          const imgElement = quill.getLeaf(range.index)[0].domNode;
          if (imgElement && imgElement.tagName === 'IMG') {
            imgElement.setAttribute('alt', altText || '');
            imgElement.setAttribute('data-alt', altText || '');
          }
        };
        reader.readAsDataURL(file);
      }
    };
  };




  // Quill editor configuration
  const quillModules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['link', 'image'],
        ['clean']
      ],
      handlers: {
        image: imageHandler
      }
    },
  };

  const quillFormats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list',
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
      title
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
        slug: generateSlug(formData.title),
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
    // Force re-render of ReactQuill when content changes
  useEffect(() => {
    if (quillRef.current && formData?.content && isEditing) {
      const quill = quillRef.current.getEditor();
      if (quill) {
        // Clear the editor first
        quill.setText('');
        // Then set the HTML content
        quill.root.innerHTML = formData.content;
      }
    }
  }, [formData?.content, isEditing]);

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-8">
      <div className="max-w-4xl mx-auto px-4">
                 <div className="bg-[#1a1a1a] rounded-lg shadow-xl p-6">
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
                                 className="w-full px-3 py-2 border border-gray-600 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter blog title"
                required
              />
            </div>



            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Content *
              </label>
                          <div className="bg-[#1a1a1a] rounded-md">
              <ReactQuill
                ref={quillRef}
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
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="SEO description for search engines"
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tags (press Enter or comma to add)
              </label>
              <div className="w-full px-3 py-2 border border-gray-600 rounded-md bg-[#1a1a1a] text-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.tags.split(',').map((tag, index) => tag.trim()).filter(tag => tag).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-600 text-white px-2 py-1 rounded-md text-sm flex items-center"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => {
                          const tags = formData.tags.split(',').map(t => t.trim()).filter(t => t && t !== tag);
                          setFormData(prev => ({ ...prev, tags: tags.join(', ') }));
                        }}
                        className="ml-2 text-white hover:text-red-300"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <input
                  type="text"
             
                 value={inputValue}

                  onChange={(e) => {
                    setInputValue(e.target.value)
                  }
                   
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter'|| e.key===',') {
                      e.preventDefault();
                      const value = inputValue.trim();
                      if (value) {
                        const existingTags = formData.tags.split(',').map(t => t.trim()).filter(t => t);
                        const updatedTags = [...existingTags, value];
                        setFormData(prev => ({ ...prev, tags: updatedTags.join(', ') }));
                       setInputValue('');
                      }
                    }
                  }}
                  className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  placeholder="Type a tag and press Enter or comma"
                />
              </div>
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