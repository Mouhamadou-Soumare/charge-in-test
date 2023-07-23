import React from 'react';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from '../../../app/store';
import { Card } from '@mui/material';
import TitleCard from '../../atoms/TitleCard/titleCard';
import ButtonAtom from '../../atoms/Button/button';
import "./CardAccessories.scss";
import wallboxImg from "../../../assets/img/wallbox.jpg";

const CardAccessories: React.FC = () => {

  return (
    <Card className='card-accssories'>
        <TitleCard titleCard={'Accessoires'} />
         
        <div className='container-accessories'>

            {[...Array(8)].map((_, index) => (
            <ul><li><div className='li-row'><div>Nom de l'accessoire </div> <div className='price'>##€</div></div></li></ul>
            ))}
        </div>
        <ButtonAtom text={'Modifier les accessoires'} type={'action'}/>

    </Card>
  );
};

export default CardAccessories;
