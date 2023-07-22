import React from 'react';
import TitleAtom from '../../components/atoms/Title/title';
import Box from '@mui/material/Box';
import Objective from '../../components/organisms/Objective/Objective';
import SubtitleDashboard from '../../components/atoms/SubtitleDashboard/subtitleDashboard';
import CardDashboard, {CardData} from '../../components/organisms/CardDashboard/cardDashboard';
import "./dashboardHomepage.scss";
import ButtonAtom from '../../components/atoms/Button/button';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const DashboardHomepage : React.FC = () => {
    const cardData = useSelector((state: RootState) => state.dashboard.cardData);


    return (
        <Box className="main-content">
            <div className='first-title-dashboard'>
            <TitleAtom  text='Tableau de bord' position='left' iconName='BoltOutlined' />
            </div>
            <div className='section-dashboard'>
                <Objective />
            </div>
            <div className='section-dashboard'>
                <div className='title-section-dashoard'>
                <SubtitleDashboard title='Statistiques de' titleWithColor='Charge-in' />
                </div>
                <div className='elements-dashboard card-container'>
                    {cardData.map((data: CardData, index: number) => (
                    <CardDashboard key={index} cardData={data} />
                    ))}
        
                </div>
            </div>
            <div className='section-dashboard'>
                <div className='title-section-dashoard'>
                    <SubtitleDashboard title='Actions' titleWithColor='rapides' />
                </div>
                <div className='elements-dashboard button-container'>
                    <ButtonAtom iconName='PersonOutlined' text={'Ajouter un installateur'} type={'dashboard'} />
                    <ButtonAtom iconName='InsertDriveFileOutlined' text={'Ajouter une étude'} type={'dashboard'} />
                    <ButtonAtom iconName='EvStationOutlined' text={'Ajouter une borne'} type={'dashboard'} />
                    <ButtonAtom iconName='DirectionsCarFilledOutlined'  text={'Ajouter un véhicule'} type={'dashboard'} />
                    <ButtonAtom iconName='BuildOutlined' text={'Ajouter un accessoire'} type={'dashboard'} />
                    <ButtonAtom  iconName="ModeStandbyOutlined" text={'Ajouter un objectif'} type={'dashboard'} />
                </div>
            </div> 
        </Box> 
        )
}

export default DashboardHomepage;