// src/components/CommentList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentList: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      const response = await axios.get('/api/comments'); // 백엔드 API 경로
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  return (
    <div>
      <h2>댓글 목록</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
