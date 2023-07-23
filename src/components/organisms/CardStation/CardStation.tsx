import React from 'react';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from '../../../app/store';
import { Card } from '@mui/material';
import TitleCard from '../../atoms/TitleCard/titleCard';
import ButtonAtom from '../../atoms/Button/button';
import "./cardStation.scss";
import wallboxImg from "../../../assets/img/wallbox.jpg";

const CardStation: React.FC = () => {

  return (
    <Card className='card-station'>
        <TitleCard titleCard={'Borne choisie'} />
         
        <div className='container-element-selected'>
            <div><img src={wallboxImg} alt="wallbox" className='img-element' /></div>
            <div>
                <div>Pulsar Plus</div>
                <div>
                    <ul>
                        <li>Puissance max pour votre installation : 22 kW</li>
                        <li>Contrôle d’accès : RFID</li>
                        <li>Temps de charge : 6h30</li>
                        <li>Optimisation coût de recharge : Oui</li>
                        <li>Borne connectée</li>
                    </ul></div>
            </div>
            <div className='value-element'>
                2200.00€
            </div>
        </div>
        <ButtonAtom text={'Modifier la borne'} type={'action'}/>

    </Card>
  );
};

export default CardStation;
