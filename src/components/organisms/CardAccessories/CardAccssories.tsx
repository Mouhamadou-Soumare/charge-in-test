import React from 'react';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from '../../../app/store';
import { Card } from '@mui/material';
import TitleCard from '../../atoms/TitleCard/titleCard';
import ButtonAtom from '../../atoms/Button/button';
import "./CardAccessories.scss";

const CardAccessories: React.FC = () => {

  return (
    <Card className='card-accssories card-template'>
        <TitleCard titleCard={'Accessoires'} />
         
        <div className='container-accessories '>
            {[...Array(8)].map((_, index) => (
                <ul key={index}><li><div className='li-row'><div>Nom de l'accessoire</div> <div className='price'>##€</div></div></li></ul>
            ))}
        </div>
        <ButtonAtom text={'Modifier les accessoires'} type={'action'}/>

    </Card>
  );
};

export default CardAccessories;
