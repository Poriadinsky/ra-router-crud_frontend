import './MainPage.css';
import React from 'react';
import Post from './Post/Post';
import useJsonFetch from '../../hooks/useJsonFetch';

export default function MainPage({ history }) {
  const [posts] = useJsonFetch(process.env.REACT_APP_DATA_URL);
  
  const handleAdd = () => {
    history.push('/posts/new');
  }

  return (
    <div className="Mainpage">
      <div className="Mainpage-header">
        <button className="Mainpage-addpost" onClick={handleAdd}>Создать пост</button>
      </div>
      {posts && posts.map((post) =>
        <Post key={post.id} post={post} />
      )}
    </div>
  );
}