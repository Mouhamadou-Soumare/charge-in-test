import React from 'react';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from '../../../app/store';
import { Card } from '@mui/material';
import TitleCard from '../../atoms/TitleCard/titleCard';
import ButtonAtom from '../../atoms/Button/button';
import "./cardDocument.scss";

const CardDocumentAdded: React.FC = () => {

  return (
    <Card className='card-documents-added-container'>
        <TitleCard titleCard={'Documents ajoutés'} />
            <div className="documents-container row">
                {[...Array(8)].map((_, index) => (
                    <div className='column' key={index}>
                        <div>Titre du document</div>
                        <div className='file-name'>nomdufichier.png</div>
                    </div>
                ))}
            </div>

            <hr style={{ width: "100%" }} className="hr-row" />

            <div className="documents-container row">
               <div>Autres documents</div>
               {[...Array(3)].map((_, index) => (
                    <div className='file-name'>nom du fichier.png</div>
               ))}
            </div>

        <ButtonAtom text={'Modifier les documents'} type={'action'}/>

    </Card>
  );
};

export default CardDocumentAdded;
