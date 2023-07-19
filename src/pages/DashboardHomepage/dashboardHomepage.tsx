import React from 'react';
import TitleAtom from '../../components/atoms/Title/title';
import Box from '@mui/material/Box';
import LabelProgressBar from '../../components/molecules/LabelProgressBar/labelProgressBar';
import Objective from '../../components/organisms/Objective/Objective';
import SubtitleDashboard from '../../components/atoms/SubtitleDashboard/subtitleDashboard';
import CardDashboard from '../../components/organisms/CardDashboard/cardDashboard';
import "./dashboardHomepage.scss";
import ButtonAtom from '../../components/atoms/Button/button';

const DashboardHomepage : React.FC = () => {
    

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
                    <CardDashboard title={'Installateurs partenaires inscrits'} iconName={'Person'}  keyStat={'78'} keyStatEvolution={0}   />
                    <CardDashboard title={'Abonnements en cours '} iconName={'PieChart'} otherStat="Nombre d'abonnements" otherStatValue={22} keyStat={'261€'} keyStatEvolution={2} b2cStat={''} b2bStat={''}/>
                    <CardDashboard title={'Devis réalisés'} iconName={'FolderOpen'}  keyStat={"105"} keyStatEvolution={-2} b2cStat={'##'} b2bStat={'##'}/>
                    <CardDashboard title={'Points de charge'} iconName={'PeopleAlt'}  keyStat={'450'} keyStatEvolution={18} b2cStat={'##'} b2bStat={'##'}/>
                    <CardDashboard title={'Points de charge supevisés'} iconName={'CompareArrows'}  keyStat={'432'} keyStatEvolution={18} b2cStat={'##'} b2bStat={'##'}/>
                    <CardDashboard title={'Taux de conversion'} iconName={'Payments'}  keyStat={'78'} keyStatEvolution={-2} b2cStat={'##'} b2bStat={'##'}/>
                    <CardDashboard title={"Chiffre d'affaires"} iconName={'Payments'}  keyStat={'26100'} keyStatEvolution={6} b2cStat={"12 0000€"} b2bStat={'22 045€'}/>
                </div>
            </div>
            <div className='section-dashboard'>
                <div className='title-section-dashoard'>
                    <SubtitleDashboard title='Actions' titleWithColor='rapides' />
                </div>
                <div className='elements-dashboard button-container'>
                    <ButtonAtom text={'Ajouter un installateur'} type={'dashboard'} />
                    <ButtonAtom text={'Ajouter une étude'} type={'dashboard'} />
                    <ButtonAtom text={'Ajouter une borne'} type={'dashboard'} />
                    <ButtonAtom text={'Ajouter un véhicule'} type={'dashboard'} />
                    <ButtonAtom text={'Ajouter un accessoire'} type={'dashboard'} />
                    <ButtonAtom text={'Ajouter un objectif'} type={'dashboard'} />
                </div>
            </div> 
        </Box> 
        )
}

export default DashboardHomepage;