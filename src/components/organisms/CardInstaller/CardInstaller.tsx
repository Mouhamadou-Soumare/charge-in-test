import React from 'react';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from '../../../app/store';
import { Card } from '@mui/material';
import TitleCard from '../../atoms/TitleCard/titleCard';
import ButtonAtom from '../../atoms/Button/button';
import wallboxImg from "../../../assets/img/wallbox.jpg";
import blaxImg from "../../../assets/img/Blax.jpg"

const CardInstaller: React.FC = () => {

  return (
    <Card className='card-station'>
        <TitleCard titleCard={'Installateur choisi'} />
         
        <div className='container-element-selected'>
            <div><img src={blaxImg} alt="blax" className='img-element' /></div>
            <div>
                <div>Pulsar Plus</div>
                <div>
                    <ul>
                        <li>Chez vous à partir de [date]</li>
                        <li>Votre installateur est à [x] km de chez vous</li>
                        <li>Garantie : 2 ans</li>
                        <li>Installateur certifié</li>
                    </ul></div>
            </div>
            <div className='value-element'>
                2200.00€
            </div>
        </div>
        <ButtonAtom text={"Modifier l'instalatteur"} type={'action'}/>

    </Card>
  );
};

export default CardInstaller;
