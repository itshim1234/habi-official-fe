# Firebase Firestore Index Setup

## Index Error Resolution

The blog system requires composite indexes in Firebase Firestore for efficient querying. When you see the error:

```
Failed to fetch blogs: The query requires an index. You can create it here: https://console.firebase.google.com/v1/r/project/verdant-ink/firestore/indexes?create_composite=...
```

## Required Indexes

You need to create the following composite indexes in your Firebase Console:

### 1. For Published Blogs Query
- **Collection**: `blogs`
- **Fields to index**:
  - `published` (Ascending)
  - `createdAt` (Descending)

### 2. For Blog by Slug Query
- **Collection**: `blogs`
- **Fields to index**:
  - `slug` (Ascending)
  - `published` (Ascending)

## How to Create Indexes

### Method 1: Use the Direct Link
1. Click the link provided in the error message
2. It will take you directly to the Firebase Console with the correct index configuration
3. Click "Create Index"

### Method 2: Manual Creation
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project (`verdant-ink`)
3. Navigate to **Firestore Database** → **Indexes** tab
4. Click **Create Index**
5. Configure as follows:

#### Index 1:
- **Collection ID**: `blogs`
- **Fields**:
  - Field path: `published`, Order: `Ascending`
  - Field path: `createdAt`, Order: `Descending`
- **Query scope**: `Collection`

#### Index 2:
- **Collection ID**: `blogs`
- **Fields**:
  - Field path: `slug`, Order: `Ascending`
  - Field path: `published`, Order: `Ascending`
- **Query scope**: `Collection`

## Index Building Time

After creating the indexes:
- **Small datasets** (< 1000 documents): Usually ready in 1-2 minutes
- **Larger datasets**: May take 5-10 minutes
- You can monitor progress in the Firebase Console

## Verification

Once indexes are built:
1. The blog pages should load without errors
2. You can verify by visiting `/blogs` and `/admin` pages
3. Check the Firebase Console → Indexes tab to see "Enabled" status

## Troubleshooting

If you still see index errors after creating indexes:
1. Wait a few more minutes for index building to complete
2. Clear your browser cache
3. Check that the index status shows "Enabled" in Firebase Console
4. Verify the field names match exactly (case-sensitive)

## Note

The blog system includes error handling that will show a user-friendly message while indexes are being built, so users won't see the technical error message. 