import React from "react";
import Box from "@mui/material/Box";
import './infosCard.scss';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

interface InfoCardProps {
    firstName: string;
    lastName: string;
    codePostal: string;
    adress: string;
    mail: string;
    phone: number;
}

const InfosCard: React.FC<InfoCardProps> = ({
    firstName, lastName, codePostal, adress, mail, phone
}) => {

    return (
        <Box className="infos-card-container">
            <div className="infos-elements">
                <p>Prénom</p>
                <p>{firstName}</p>
            </div>

            <div className="infos-elements">
                <p>Nom</p>
                <p>{lastName}</p>
            </div>

            <div className="infos-elements">
                <p>Code Postal</p>
                <p>{codePostal}</p>
            </div>

            <div className="infos-elements">
                <p>Adresse</p>
                <p>{adress}</p>
            </div>

            <div className="infos-elements">
                <div>
                    <div><EmailIcon /> </div>
                    <div><p>E-mail</p></div></div>
                <div>
            </div>
                <div>
                    <div></div>
                    <div><p>{mail}</p></div>
                </div>
            </div>

            <div className="infos-elements">
                <p><PhoneIcon /> Téléphone</p>
                <p>{phone}</p>
            </div>
        </Box>
    );
};

export default InfosCard;
