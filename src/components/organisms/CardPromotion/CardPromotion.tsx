import React from 'react';
import { Card } from '@mui/material';
import TitleCard from '../../atoms/TitleCard/titleCard';
import ButtonAtom from '../../atoms/Button/button';
import LabelInputMolecule from '../../molecules/labelInput/labelInput';

const CardPromotion: React.FC = () => {

  return (
    <Card className='card-promotion card-template '>
        <TitleCard titleCard={'Remise de prix'} />
         
      <LabelInputMolecule inputValue={''} labelValue={'Indiquez la remise à ajouter'} placeholder='0000' renderType={'input-back-office'} onChange={function (value: string): void {
              throw new Error('Function not implemented.');
          } }/>

        <ButtonAtom text={'Modifier les documents'} type={'action'}/>

    </Card>
  );
};

export default CardPromotion;
