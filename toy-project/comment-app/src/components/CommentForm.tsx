// src/components/CommentForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

const CommentForm: React.FC = () => {
  const [commentText, setCommentText] = useState('');

  const postComment = async () => {
    try {
      const response = await axios.post('/api/comments', { comment: commentText }); // 백엔드 API 경로
      console.log('Comment posted:', response.data);
      setCommentText('');
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div>
      <h2>댓글 작성</h2>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button onClick={postComment}>댓글 작성</button>
    </div>
  );
};

export default CommentForm;
