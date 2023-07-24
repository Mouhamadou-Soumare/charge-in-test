import React from 'react';
import { Card } from '@mui/material';
import { useAppDispatch,useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import TitleCard from '../../atoms/TitleCard/titleCard';
import ButtonAtom from '../../atoms/Button/button';
import CardElement from '../../molecules/CardElement/CardElement';
import wallboxImg from "../../../assets/img/wallbox.jpg";
import { setElementData } from '../../../features/cardStationSlice';

const CardStation: React.FC = () => {
  const value = '2200.00€';
  const stationData = useAppSelector((state: RootState) => state.cardElements);
  const dispatch = useAppDispatch();
  const handleSetStationData = () => {
    const stationData = {
      power: 22,
      accessControl: 'RFID',
      chargeTime: '6h30',
      optimization: true,
    };
    dispatch(setElementData(stationData));
  };

  React.useEffect(() => {
    handleSetStationData();
  }, []);


  return (
    <Card className='card-station card-template'>
      <TitleCard titleCard={'Borne choisie'} />

      <CardElement
        imgSrc={wallboxImg}
        title="Pulsar Plus"
        value={value}
      >
        <li>Puissance max pour votre installation : {stationData.power} kW</li>
        <li>Contrôle d’accès : {stationData.accessControl}</li>
        <li>Temps de charge : {stationData.chargeTime}</li>
        <li>Optimisation coût de recharge : {stationData.optimization}</li>
        <li>Borne connectée</li>
      </CardElement>

      <ButtonAtom text={'Modifier la borne'} type={'action'} />

    </Card>
  );
};

export default CardStation;
