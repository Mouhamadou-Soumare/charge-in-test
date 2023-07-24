import React from 'react';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from '../../../app/store';
import { Card } from '@mui/material';
import TitleCard from '../../atoms/TitleCard/titleCard';
import ButtonAtom from '../../atoms/Button/button';
import wallboxImg from "../../../assets/img/wallbox.jpg";
import blaxImg from "../../../assets/img/Blax.jpg"
import { setInstallerData } from '../../../features/cardInstallerSlice';
import CardElement from '../../molecules/CardElement/CardElement';

const CardInstaller: React.FC = () => {
    const value = '2200.00€';
    const installerData = useAppSelector((state: RootState) => state.cardInstaller);
    const dispatch = useAppDispatch();
    const handleSetInstallerData = () => {
      const installerData = {
        date: "[X]",
        distance: 18,
        garantie: '2 ans',
        certificate: true,
      };
      dispatch(setInstallerData(installerData));
    };
  
    React.useEffect(() => {
        handleSetInstallerData();
    }, []);
  
  return (
    <Card className='card-template'>
    <TitleCard titleCard={'Borne choisie'} />

    <CardElement
      imgSrc={blaxImg}
      title="Pulsar Plus"
      value={value}
    >
      <li>Chez vous à partir de : {installerData.date} KM</li>
      <li>Votre installateur est à {installerData.distance} km de chez vous</li>
      <li>Garantie : {installerData.garantie}</li>
      <li>{installerData.certificate ? 'oui' : 'non'}</li>
    </CardElement>

    <ButtonAtom text={"Modifier l'installateur"} type={'action'} />

  </Card>
  );
};

export default CardInstaller;
