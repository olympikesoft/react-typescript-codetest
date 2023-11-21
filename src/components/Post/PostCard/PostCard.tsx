import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Post } from '../../../interfaces';
import UserAvatar from '../../UserAvatar/UserAvatar';
import { selectedColor, unSelectedColor } from '../../../constants';

interface PostCardProps {
  post: Post;
  onSelect: (post: Post) => void;
  isSelected: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, onSelect, isSelected }) => {
  const cardStyle = {
    cursor: 'pointer',
    marginBottom: '1rem',
    backgroundColor: isSelected ? selectedColor : unSelectedColor, 
  };

  const textStyle = {
    color: isSelected ? 'white' : 'black',
  }

  return (
    <Card onClick={() => onSelect(post)} style={cardStyle} data-testid="post-card">
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <UserAvatar image={post.userImage}/>
          <Grid item xs>
            <Typography variant="h5" style={textStyle}>{post.title}</Typography>
            <Typography variant="body1" style={textStyle}>{post.body}</Typography>
            <Typography variant="subtitle2" style={textStyle}>{post.username}</Typography>
            <Typography variant="inherit" style={textStyle}>{post.createdAt.toUTCString()}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PostCard;
