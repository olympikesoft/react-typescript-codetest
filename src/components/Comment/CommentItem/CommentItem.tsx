import React from 'react';
import { Card, CardContent, Typography, Grid, Divider } from '@mui/material';
import { Comment, Reply } from '../../../interfaces';
import ReplyInput from '../../Input/ReplyInput/ReplyInput';
import UserAvatar from '../../UserAvatar/UserAvatar';

interface CommentItemProps {
  comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: 16 }} data-testid="comment-item-test">
      <CardContent>
       <UserAvatar image={comment.name}/>
        <Typography gutterBottom variant="subtitle2" color="textSecondary">
          Comment by {comment.name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {comment.body}
        </Typography>
        {comment.replies && comment.replies.length > 0 && (
          <>
            <Typography variant="body2" style={{ marginTop: 16 }} gutterBottom>
              Replies:
            </Typography>
            {comment.replies.map((reply: Reply) => (
              <div key={reply.id} style={{ marginTop: 8 }}>
                <UserAvatar image={reply.name} />
                <Typography variant="subtitle2" color="textSecondary">
                  Reply by {reply.name}
                </Typography>
                <Typography variant="body2">{reply.body}</Typography>
              </div>
            ))}
            <Divider style={{ margin: '16px 0' }} />
          </>
        )}
        <Divider style={{ margin: '16px 0' }} />
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={12}>
            <ReplyInput comment={comment} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CommentItem;
