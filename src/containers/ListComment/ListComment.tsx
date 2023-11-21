import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../../store/actions/Comments/fetchComments';
import { selectComments } from '../../store/selectors/commentsSelectors';
import CommentItem from '../../components/Comment/CommentItem/CommentItem';
import { AppDispatch, RootState } from '../../store/store';
import { Comment } from '../../interfaces';
import TagInput from '../../components/Input/TagInput/TagInput';
import Container from '@mui/material/Container';

const ListComment: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const selectedPost = useSelector((state: RootState) => state.posts.selectedPost);
    const selectedPostId = selectedPost?.id!;
    const comments = useSelector((state: RootState) => selectComments(state, selectedPostId));

    useEffect(() => {
        if (selectedPostId) {
            dispatch(fetchComments(selectedPostId));
        }
    }, [dispatch, selectedPostId]);

    return (
        <div>

            {selectedPostId && Array.isArray(comments) && comments.map((comment: Comment) => {
                const commentWithDefaultInfo = {
                    ...comment,
                    createdAt: comment.createdAt || new Date(),
                    userImage: comment.userImage || 'https://placehold.co/64x64'
                };
                return <CommentItem key={comment.id} comment={commentWithDefaultInfo} />;
            })}
            {selectedPostId &&
            <Container maxWidth="sm">
                <TagInput postId={selectedPostId} />
            </Container>
            }
        </div>
    );
};

export default ListComment;
