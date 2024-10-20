import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const posts = [
    { id: 'post1', title: 'AI Trends in 2024' },  ];

  return (
    <div>
      <h2>Blog</h2>
      <p>Stay updated with the latest in AI, our insights, and industry news here at Almond AI.</p>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
