# Blog System Setup Instructions

## Overview
This blog system is integrated into your existing Habi website with the following features:
- Firebase Authentication for admin login
- Firebase Firestore for blog data storage
- Rich text editor (React Quill) for content creation
- Featured blog layout with 2-column grid
- SEO-friendly URLs and meta tags
- Admin dashboard for managing posts

## Setup Steps

### 1. Firebase Configuration
Create a Firebase project and add your credentials to a `.env` file:

```env
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

### 2. Firebase Firestore Rules
Set up Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access to published blogs
    match /blogs/{blogId} {
      allow read: if resource.data.published == true;
      allow write: if request.auth != null;
    }
  }
}
```

### 3. Firebase Authentication
Enable Email/Password authentication in your Firebase console.

### 4. Firebase Firestore Indexes
The blog system requires composite indexes for efficient querying. Create the following indexes in your Firebase Console:

#### Required Indexes:
1. **Collection**: `blogs`
   - **Fields**: `published` (Ascending), `createdAt` (Descending)
   - **Purpose**: For fetching published blogs ordered by creation date

2. **Collection**: `blogs`
   - **Fields**: `slug` (Ascending), `published` (Ascending)
   - **Purpose**: For fetching individual blogs by slug

#### How to Create:
1. Go to Firebase Console → Firestore Database → Indexes
2. Click "Create Index"
3. Configure as shown above
4. Wait for indexes to build (1-10 minutes)

**Note**: If you see index errors, click the link in the error message to create the index directly.

### 5. Routes Added
- `/blogs` - Main blog listing page
- `/blogs/:slug` - Individual blog post page
- `/login` - Admin login page
- `/admin` - Admin dashboard
- `/admin/create` - Create new blog post
- `/admin/edit/:id` - Edit existing blog post

### 6. Features Implemented

#### Blog Schema
```javascript
{
  title: string,
  content: string (HTML),
  slug: string,
  author: string,
  authorId: string,
  createdAt: timestamp,
  updatedAt: timestamp,
  published: boolean,
  tags: array,
  metaTitle: string,
  metaDescription: string,
  featuredImage: string (optional)
}
```

#### Admin Features
- Create, edit, delete blog posts
- Publish/unpublish posts
- Rich text editor with formatting options
- SEO fields (meta title, description, tags)
- Preview functionality

#### Public Features
- Featured blog display
- 2-column grid layout for recent posts
- Responsive design
- SEO-optimized URLs
- Tag system

### 7. Usage

#### Creating Your First Blog Post
1. Navigate to `/login`
2. Create an admin account
3. Go to `/admin`
4. Click "Create New Post"
5. Fill in the form and publish

#### Customization
- Update logo path in `BlogHome.jsx` and `BlogPost.jsx`
- Modify colors in Tailwind classes
- Add more fields to the blog schema as needed

### 8. Dependencies Added
- `firebase` - Firebase SDK
- `react-quill` - Rich text editor
- `@tiptap/react` - Alternative rich text editor (optional)

### 9. File Structure
```
src/
├── components/
│   ├── auth/
│   │   └── Login.jsx
│   ├── admin/
│   │   └── AdminDashboard.jsx
│   └── blog/
│       ├── BlogEditor.jsx
│       └── BlogEditor.css
├── contexts/
│   └── AuthContext.jsx
├── firebase/
│   └── config.js
├── pages/
│   ├── BlogHome.jsx
│   └── BlogPost.jsx
├── services/
│   └── blogService.js
└── utils/
    └── FormateDate.js
```

### 10. Security Notes
- Only authenticated users can create/edit/delete posts
- Published posts are publicly readable
- Draft posts are only visible to admins
- Firebase security rules should be configured properly

### 11. Performance Optimizations
- Lazy loading of blog components
- Image optimization with fallbacks
- Responsive design for all screen sizes
- SEO-friendly URLs and meta tags

## Troubleshooting

### Firebase Index Issues
If you see "Failed to fetch blogs: The query requires an index" error:
1. Click the link in the error message to create the index directly
2. Or follow the manual steps in the Firebase Index Setup section above
3. Wait 1-10 minutes for indexes to build
4. Clear browser cache and try again

### Common Issues

1. **Firebase not initialized**: Check your environment variables
2. **Authentication not working**: Verify Firebase Auth is enabled
3. **Blogs not loading**: Check Firestore rules and data structure
4. **Editor not working**: Ensure React Quill is properly installed

### Development
Run the development server:
```bash
npm run dev
```

The blog system is now fully integrated into your existing website! 