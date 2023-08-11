// src/App.tsx
import React from 'react';
import CommentList from './components/commentForm';
import CommentForm from './components/commentList';

const App: React.FC = () => {
  return (
    <div>
      <h1>댓글 기능 예제</h1>
      <CommentList />
      <CommentForm />
    </div>
  );
};

export default App;
