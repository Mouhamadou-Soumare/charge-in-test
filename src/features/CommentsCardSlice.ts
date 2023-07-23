import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface Comment {
  id: number;
  content: string;
  user: string;
}

interface CommentCardState {
  comments: Comment[];
}

const initialState: CommentCardState = {
  comments: [],
};

const commentCardSlice = createSlice({
  name: 'commentCard',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },
  },
});

export const { addComment } = commentCardSlice.actions;

export default commentCardSlice.reducer;

export const selectComments = (state: RootState) => state.commentsCard.comments;
