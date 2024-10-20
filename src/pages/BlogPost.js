import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function BlogPost() {
  const { postId } = useParams();
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    import(`../components/posts/${postId}.md`)
      .then(res => {
        fetch(res.default)
          .then(response => response.text())
          .then(text => setPostContent(text));
      })
      .catch(err => console.error(err));
  }, [postId]);

  return (
    <div>
      <ReactMarkdown>{postContent}</ReactMarkdown>
    </div>
  );
}

export default BlogPost;
