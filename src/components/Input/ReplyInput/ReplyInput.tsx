import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Grid } from '@mui/material';
import { Comment } from '../../../interfaces';
import { AppDispatch } from '../../../store/store';
import { addReply } from '../../../store/actions/Reply/addReply';

interface ReplyInputProps {
  comment: Comment;
}

const ReplyInput: React.FC<ReplyInputProps> = ({ comment }) => {
  const [replyText, setReplyText] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (replyText.trim()) {
      dispatch(addReply(comment.id, replyText));
    }
    setReplyText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
      <TextField
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        label="Write a reply"
        variant="outlined"
        size="small"
        fullWidth
        required
      />
      </Grid>
      <Grid item>
      <Button type="submit" variant="contained" color="primary" disabled={replyText.trim() === ''}>
        Reply
      </Button>
      </Grid>
      </Grid>
    </form>
  );
};

export default ReplyInput;
