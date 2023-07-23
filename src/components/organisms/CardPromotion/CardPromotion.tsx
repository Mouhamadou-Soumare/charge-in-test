import React from 'react';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from '../../../app/store';
import { Card } from '@mui/material';
import TitleCard from '../../atoms/TitleCard/titleCard';
import ButtonAtom from '../../atoms/Button/button';
import "./cardPromotion.scss";
import wallboxImg from "../../../assets/img/wallbox.jpg";
import LabelInputMolecule from '../../molecules/labelInput/labelInput';

const CardPromotion: React.FC = () => {

  return (
    <Card className='card-promotion'>
        <TitleCard titleCard={'Remise de prix'} />
         
      <LabelInputMolecule inputValue={''} labelValue={'Indiquez la remise à ajouter'} placeholder='0000' renderType={'input-back-office'} onChange={function (value: string): void {
              throw new Error('Function not implemented.');
          } }/>

        <ButtonAtom text={'Modifier les documents'} type={'action'}/>

    </Card>
  );
};

export default CardPromotion;
