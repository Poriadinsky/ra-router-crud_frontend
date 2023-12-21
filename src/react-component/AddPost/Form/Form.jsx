import './Form.css';
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Form({ post, onSubmit, onClose }) {
  const [form, setForm] = useState({ text: post.content });
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form.text);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="Form-close" onClick={onClose}>×</div>
      <textarea className="Form-textarea" name="text" value={form.text} onChange={handleChange} />
      <button className="Form-button">Опубликовать</button>
    </form>
  );
}

Form.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string,
  }),
}

Form.defaultProps = {
  post: {content: ''},
};