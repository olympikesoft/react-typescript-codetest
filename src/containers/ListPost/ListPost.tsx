// PostList.jsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../store/actions/Posts/fetchPost';
import { selectPost } from '../../store/actions/Posts/selectPost';
import { selectPosts, selectPostsLoading, selectPostsError } from '../../store/selectors/postsSelectors';
import PostCard from '../../components/Post/PostCard/PostCard';
import { AppDispatch } from '../../store/store';
import { SearchInput } from '../../components/Input/SearchInput/SearchInput';
import Grid from '@mui/material/Grid';
import { selectSearchTerm } from '../../store/selectors/searchSelectors';
import { selectFilteredPosts } from '../../store/selectors/searchFilteredPostSelector';
import { Post, searchFilterState } from '../../interfaces';
import { selectUsers } from '../../store/selectors/usersSelectors';
import { fetchUsers } from '../../store/actions/Users/fetchUsers';

const ListPost: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectPosts);
  const users = useSelector(selectUsers);
  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);
  const searchTerm = useSelector(selectSearchTerm) || '';
  const selectFilter:searchFilterState  = {
    users: users,
    posts: posts,
  }
  const filteredPosts = useSelector(_state => selectFilteredPosts(selectFilter, searchTerm));

  const [selectedPost, setSelectedPost] = useState<number>(-1);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts!</p>;

  const onSelectPost = (post: Post) =>{
    setSelectedPost(post.id)
    dispatch(selectPost(post));
  }

  return (
    <div>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <SearchInput />
        </Grid>
        <Grid item>    
          {filteredPosts.map(post => {
            const postWithDefaultInfo = {
              ...post,
              createdAt: post.createdAt || new Date(),
              userImage: post.userImage || 'https://placehold.co/64x64'
            };

            return (
              <PostCard
                key={post.id}
                post={postWithDefaultInfo}
                onSelect={onSelectPost}
                isSelected={post.id === selectedPost}
              />
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default ListPost;
