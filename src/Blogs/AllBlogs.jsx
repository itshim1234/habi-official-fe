
import React, { useState ,useEffect} from 'react'
import axios from "axios"
import BlogListPage from './BlogListPage';
import BlogDetailPage from './BlogDetailPage';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const AllBlogs = () => {
 
const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${backendUrl}/v1/blogs`);
    return response.data; // or response.data.blogs if wrapped
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

  // Simulate fetching data on component mount
  useEffect(() => {
    // Simulate API delay
  
    fetchBlogs()
      .then(setPosts)
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));

  
    
    
  }, []);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const handleGoBack = () => {
    setSelectedPost(null);
    window.scrollTo(0, 0); // Scroll to top on page change
  };
  
  // Add a simple fade-in animation
  const animationStyles = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fade-in {
      animation: fadeIn 0.5s ease-in-out;
    }
  `;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-xl font-semibold text-gray-600">Loading Blog...</div>
      </div>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen font-sans">
        <style>{animationStyles}</style>
      {selectedPost ? (
        <BlogDetailPage post={selectedPost} onGoBack={handleGoBack} />
      ) : (
        <BlogListPage posts={posts} onSelectPost={handleSelectPost} />
      )}
    </main>
  );
}


export default AllBlogs



