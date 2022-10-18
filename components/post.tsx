import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import { PostInterface } from "../interfaces/post.interface";
import Comment from './comment';

interface Props {
  post: PostInterface
}

const Post: React.FC<Props> = ({ post }) => {
  const [comments, setComments] = useState([]);
  
  const loadComments = async () => {
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
    setComments(await commentsResponse.json());
  }
  
  useEffect(() => {
    loadComments();
  }, []);

  return (
    <Paper
      sx={{
        textAlign: "center",
        border: "1px solid grey",
        borderRadius: 5,
        p: 3,
      }}
      elevation={3}
      >
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {comments.length ? <Comment comments={comments} /> : null }
    </Paper>
  )
}

export default Post;