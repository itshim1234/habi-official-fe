import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase/config';

const BLOGS_COLLECTION = 'blogs';

// Create a new blog post
export const createBlog = async (blogData) => {
  try {
    const docRef = await addDoc(collection(db, BLOGS_COLLECTION), {
      ...blogData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return { id: docRef.id, ...blogData };
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

// Update a blog post
export const updateBlog = async (blogId, blogData) => {
  try {
    const blogRef = doc(db, BLOGS_COLLECTION, blogId);
    await updateDoc(blogRef, {
      ...blogData,
      updatedAt: serverTimestamp()
    });
    return { id: blogId, ...blogData };
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
};

// Delete a blog post
export const deleteBlog = async (blogId) => {
  try {
    const blogRef = doc(db, BLOGS_COLLECTION, blogId);
    await deleteDoc(blogRef);
    return blogId;
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
};

// Get all published blogs
export const getPublishedBlogs = async () => {
  try {
    const q = query(
      collection(db, BLOGS_COLLECTION),
      where('published', '==', true),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const blogs = [];
    querySnapshot.forEach((doc) => {
      blogs.push({ id: doc.id, ...doc.data() });
    });
    return blogs;
  } catch (error) {
    console.error('Error getting published blogs:', error);
    throw error;
  }
};

// Get all blogs (for admin)
export const getAllBlogs = async () => {
  try {
    const q = query(
      collection(db, BLOGS_COLLECTION),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const blogs = [];
    querySnapshot.forEach((doc) => {
      blogs.push({ id: doc.id, ...doc.data() });
    });
    return blogs;
  } catch (error) {
    console.error('Error getting all blogs:', error);
    throw error;
  }
};

// Get a single blog by ID
export const getBlogById = async (blogId) => {
  try {
    const blogRef = doc(db, BLOGS_COLLECTION, blogId);
    const blogSnap = await getDoc(blogRef);
    
    if (blogSnap.exists()) {
      return { id: blogSnap.id, ...blogSnap.data() };
    } else {
      throw new Error('Blog not found');
    }
  } catch (error) {
    console.error('Error getting blog by ID:', error);
    throw error;
  }
};

// Get a single blog by slug
export const getBlogBySlug = async (slug) => {
  try {
    const q = query(
      collection(db, BLOGS_COLLECTION),
      where('slug', '==', slug),
      where('published', '==', true)
    );
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    } else {
      throw new Error('Blog not found');
    }
  } catch (error) {
    console.error('Error getting blog by slug:', error);
    throw error;
  }
};

// Get featured blog (most recent published)
export const getFeaturedBlog = async () => {
  try {
    const q = query(
      collection(db, BLOGS_COLLECTION),
      where('published', '==', true),
      orderBy('createdAt', 'desc'),
      limit(1)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    }
    return null;
  } catch (error) {
    console.error('Error getting featured blog:', error);
    throw error;
  }
};

// Get recent blogs (excluding featured)
export const getRecentBlogs = async (limit = 6) => {
  try {
    const q = query(
      collection(db, BLOGS_COLLECTION),
      where('published', '==', true),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const blogs = [];
    querySnapshot.forEach((doc) => {
      blogs.push({ id: doc.id, ...doc.data() });
    });
    // Return blogs excluding the first one (featured)
    return blogs.slice(1, limit + 1);
  } catch (error) {
    console.error('Error getting recent blogs:', error);
    throw error;
  }
}; 