import React, { useState } from 'react';
import axios from 'axios';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const BlogGenerator = () => {
    const [htmlInput, setHtmlInput] = useState('');
    const [extractedData, setExtractedData] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const imageRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))/gi;

    const handleExtract = () => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlInput, 'text/html');

        const title = doc.querySelector('h1')?.textContent?.trim() || 'No H1 tag found';

        const content = [];
        const imageUrls = [];

        // Extract tags
        const bodyChildren = Array.from(doc.body.children);
        for (let child of bodyChildren) {
            if (child.tagName === 'H2' || child.tagName === 'P') {
                content.push({
                    type: child.tagName.toLowerCase(),
                    value: child.textContent.trim(),
                });
            }
        }

        // Extract <img src="...">
        const domImageUrls = Array.from(doc.querySelectorAll('img')).map(img => img.src);
        imageUrls.push(...domImageUrls);

        // Fallback: check for plain image URLs in raw HTML/text input
        const rawLines = htmlInput.split('\n');
        for (let line of rawLines) {
            const matches = line.match(imageRegex);
            if (matches) {
                imageUrls.push(...matches);
            }
        }

        // Remove duplicates
        const uniqueImages = [...new Set(imageUrls)];

        setExtractedData({ title, content, imageUrls: uniqueImages });
    };
const handleSubmit = async () => {
    if (!extractedData) return;
    setIsSubmitting(true);

    const apiPayload = {
        title: extractedData.title,
        content: extractedData.content,
        imageUrls: extractedData.imageUrls,
    };

    try {
        const response = await axios.post(`${backendUrl}/v1/create`, apiPayload);
        console.log('Result:', response.data);
        setShowSuccess(true);
    } catch (err) {
        console.error('Upload failed:', err.response?.data || err.message);
    } finally {
        setIsSubmitting(false);
    }
};

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-extrabold text-center mb-4 text-gray-800">Blog Post Generator</h1>
            <p className="text-lg text-gray-600 text-center mb-12">Paste your HTML or text including image URLs.</p>

            {showSuccess && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md shadow-lg mb-8">
                    <p className="font-bold">Success!</p>
                    <p>Your blog post has been submitted successfully.</p>
                </div>
            )}

            <div className="bg-white p-8 rounded-xl shadow-2xl">
                <div className="mb-6">
                    <label htmlFor="htmlInput" className="block text-sm font-medium text-gray-700 mb-2">HTML or Text Input</label>
                    <textarea
                        id="htmlInput"
                        rows="10"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder={`<h1>Title</h1>\n<h2>Intro</h2>\n<p>Some content</p>\nhttps://example.com/image1.jpg`}
                        value={htmlInput}
                        onChange={(e) => setHtmlInput(e.target.value)}
                    ></textarea>
                </div>
                <button
                    onClick={handleExtract}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition mb-6 disabled:bg-gray-400"
                    disabled={!htmlInput}
                >
                    Extract Content & Preview
                </button>

                {extractedData && (
                    <div className="border-t pt-6">
                        <h2 className="text-2xl font-bold mb-4">Preview</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-900">{extractedData.title}</h3>
                            <div className="text-gray-700 mt-2 space-y-2">
                                {extractedData.content.map((block, i) => (
                                    <div key={i}>
                                        {block.type === 'h2' && <h4 className="text-lg font-bold">{block.value}</h4>}
                                        {block.type === 'p' && <p className="whitespace-pre-wrap">{block.value}</p>}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <h4 className="font-semibold mb-2">Image URLs:</h4>
                                {extractedData.imageUrls.length > 0 ? (
                                    <ul className="list-disc list-inside text-sm">
                                        {extractedData.imageUrls.map((url, i) => (
                                            <li key={i} className="truncate">{url}</li>
                                        ))}
                                    </ul>
                                ) : <p className="text-sm text-gray-500">No images found.</p>}
                            </div>
                        </div>
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition disabled:bg-gray-400"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Post'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogGenerator;
