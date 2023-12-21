import './PostView.css';
import React from 'react';
import { useState } from 'react';
import useJsonFetch from '../../hooks/useJsonFetch';
import Post from '../MainPage/Post/Post';
import Form from '../AddPost/Form/Form';

export default function PostView({ match, history }) {
  
  const [isEdit, setEdit] = useState(false);
  const [posts] = useJsonFetch(process.env.REACT_APP_DATA_URL, isEdit);

  const handleDelete = () => {
    fetch(`${process.env.REACT_APP_DATA_URL}/${match.params.id}`,
      {
        method: 'DELETE',
      })
      .then(() => {
        history.push('/');
      });
  }

  const handleEdit = () => {
    setEdit(true);
  }

  const handleSubmit = (text) => {
    const fetchBody = { id: Number(match.params.id), content: text };
    fetch(process.env.REACT_APP_DATA_URL,
      {
        method: 'POST',
        body: JSON.stringify(fetchBody),
      })
      .then(() => {
        setEdit(false);
      });
  }

  const handleClose = () => {
    setEdit(false);
  }

  return (
    <div className="PostView">
      {posts && ((
        !isEdit &&
        <div>
          <div className="PostView-close" onClick={() => history.push('/')}>×</div>
          <Post post={posts.find((post) => post.id === Number(match.params.id))} />
          <div className="PostView-edit" onClick={handleEdit}>Изменить</div>
          <div className="PostView-delete" onClick={handleDelete}>Удалить</div>
        </div>
      ) || (
          isEdit &&
          <div>
            <Form
              post={posts.find((post) => post.id === Number(match.params.id))}
              onSubmit={handleSubmit}
              onClose={handleClose}
            />
          </div>
        ))
      }
    </div>
  );
}