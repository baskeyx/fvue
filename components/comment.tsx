import { useState } from 'react';
import { CommentInterface } from "../interfaces/comment.interface";

interface Props {
  comments: Array<CommentInterface>
}

const Comment: React.FC<Props> = ({comments}) => {
  const [toggleDisplay, setToggleDisplay] = useState(false);
  return (
    <>
      <button onClick={() => setToggleDisplay(!toggleDisplay)}>{comments.length}</button>
      <div style={{display: toggleDisplay ? 'block' : 'none' }}>
          {comments.map((comment) => (
            <div key={comment.id}>
            {comment.body}
          </div>
          ))}
      </div>
    </>
  )}

export default Comment;
