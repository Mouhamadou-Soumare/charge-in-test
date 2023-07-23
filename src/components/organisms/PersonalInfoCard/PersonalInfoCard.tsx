    import React from 'react';
    import TitleCard from '../../atoms/TitleCard/titleCard';
    import InfosCard from '../../atoms/InfosCard/InfosCard';
    import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import * as MUIcon from '@mui/icons-material';
    import "./personalInfos.scss";

    interface PersonalInfoCardInterface  {
        infosData: PersonalInfoCardData;
    }

    export interface PersonalInfoCardData {
    title: string;
    firstName:string;
    lastName:string;
    codePostal:string;
    adress:string;
    mail:string;
    phone:number;
    }

    const PersonalInfoCard: React.FC<PersonalInfoCardInterface> = ({ infosData }) => {
    const { title, firstName, lastName, codePostal, adress, mail, phone } = infosData;

    return (
        <Card className='card-personal-info'>
            <TitleCard  titleCard={title}  />
            <InfosCard firstName={firstName} lastName={lastName} codePostal={codePostal} adress={adress} mail={mail} phone={phone}/>
        </Card>
    );
    };

    export default PersonalInfoCard;
