import React, { useState } from 'react';
import styles from './Community.module.css';

const Community = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setCommentsList(prev => [...prev, comment]);
      setComment('');
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Community Comments</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          className={styles.textarea}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts..."
        />
        <button type="submit" className={styles.button}>Post</button>
      </form>
      <div className={styles.comments}>
        {commentsList.map((c, index) => (
          <div key={index} className={styles.comment}>
            {c}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;