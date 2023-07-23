import React from 'react';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import TitleAtom from '../../components/atoms/Title/title';
import Box from '@mui/material/Box';
import PersonalInfoCard, { PersonalInfoCardData } from '../../components/organisms/PersonalInfoCard/PersonalInfoCard';
import { RootState } from '../../app/store';
import { setPersonalInfoCardData } from '../../features/personalInfoCardSlice';
import FormAnswersCard from '../../components/organisms/FormAnswersCard/FormAnswersCard';
import './b2cProfil.scss';
import Card from '@mui/material/Card';
import CommentCard from '../../components/organisms/CommentsCard/CommentsCard';
import CardDocumentAdded from '../../components/organisms/CardDocumentAdded/CardDocumentAdded';
import CardStation from '../../components/organisms/CardStation/CardStation';
import CardInstaller from '../../components/organisms/CardInstaller/CardInstaller';
import CardPromotion from '../../components/organisms/CardPromotion/CardPromotion';
import CardAccessories from '../../components/organisms/CardAccessories/CardAccssories';
import ProfilPagination from '../../components/organisms/ProfilPagination/ProfilPagination';

const B2cProfil: React.FC = () => {
  const personalInfoCardData = useAppSelector<PersonalInfoCardData>(state => state.personalInfoCard.data);
  const dispatch = useAppDispatch();

  const sampleData: PersonalInfoCardData = {
    title: 'Informations personnelles',
    firstName: 'Charles',
    lastName: 'Dupont',
    codePostal: '33400',
    adress: 'Place de la Bourse,33000 Bordeaux',
    mail: 'charles.dupont@gmail.com',
    phone: 1234567890,
  };

  React.useEffect(() => {
    dispatch(setPersonalInfoCardData(sampleData));
  }, [dispatch]);

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - px)` } }}
    >
      <ProfilPagination placement='top'/>
      
      <div className='first-title-dashboard flex-row'>
        <TitleAtom text='Profil: Prénom Nom' position='left' iconName='Person' />
      </div>
      <div className='section-dashboard b2c-card-row'>
          
          <PersonalInfoCard infosData={personalInfoCardData} />
          <FormAnswersCard title={'Réponses aux questionnaire'}/>
      </div>

      <div className="section-dashboard">
        <CommentCard />
      </div>
      <div className="section-dashboard">
        <CardDocumentAdded />
      </div>

      <div className="section-dashboard">
        <CardStation />
      </div>

      <div className="section-dashboard">
        <CardInstaller />
      </div>

      <div className="section-dashboard">
        <CardPromotion />
      </div>
      <div className="section-dashboard">
        <CardAccessories />
      </div>
     
      <ProfilPagination placement='bottom'/>

    </Box>
  );
};

export default B2cProfil;
