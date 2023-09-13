import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addComment, selectComments } from '../../../features/commentCardSlice';
import { RootState } from '../../../app/store';
import TitleCard from '../../atoms/TitleCard/titleCard';
import Card from '@mui/material/Card';
import "./commentsCard.scss";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowCircleRight from '@mui/icons-material/ArrowCircleRight';
import Avatar from '@mui/material/Avatar';
import ButtonAtom from '../../atoms/Button/button';

const CommentCard: React.FC = () => {
  const [comment, setComment] = useState<string>('');

  const comments = useAppSelector((state: RootState) => selectComments(state));

  const dispatch = useAppDispatch();
  const handleAddComment = () => {
    const newComment = {
      id: comments.length + 1,
      content: comment,
      user: 'demoUser', 
    };
    dispatch(addComment(newComment));
    setComment('');
  };

  return (
    <Card className='card-comments-container '>
    <Card className='sub-container card-template'>
      <div className='header'>
        <div>
        <TitleCard titleCard={'Commentaires'} />
        </div>
        <div className='total-comments'>
            {comments.length}
        </div>
      </div>
      <div className="content-one">
        <TextField
            id="filled-multiline-static"
            multiline
            rows={4}
            name='comment-input'
            defaultValue="Ajouter un commentaire..."
            variant="filled"
            className='textfield'
            InputProps={{
                endAdornment: (
                  <InputAdornment position="start" className='icon-input-comment' onClick={handleAddComment}>
                    <ArrowCircleRight />
                  </InputAdornment>
                ),
              }}
            />  
      </div>
      </Card>

      <Card className='sub-container card-template'> 
      {comments.length > 0 ? (
        <div className='comments-history'>
            <div className='profile'>
                <div><Avatar sx={{ bgcolor: '#369C96' }}>D</Avatar></div>
                <div className='identity'>Nabil LOTFY</div>
                <div className='datetime'>le 16/02/2023</div>
            </div>
            <div className='comment'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales tempor semper. Morbi eu ipsum sed nisi hendrerit maximus quis id tortor. Praesent laoreet, justo in commodo elementum, ipsum nisl condimentum erat, vitae varius ligula ipsum semper urna.
            </div>
          <p>{comments[comments.length - 1].content}</p>
        </div>
      ) : (
        <p>Aucun commentaire pour le moment.</p>
      )}
    <div className="footer">
      <ButtonAtom text={'Historique des commentaires'} type={'action'} />
    </div>
    </Card>
    </Card>
  );
};

export default CommentCard;
