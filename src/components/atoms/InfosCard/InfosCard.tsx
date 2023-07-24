import React from "react";
import Box from "@mui/material/Box";
import "./infosCard.scss";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import theme from "../../../style/theme";
import { colors } from "@mui/material";

interface InfoCardProps {
  firstName: string;
  lastName: string;
  codePostal: string;
  adress: string;
  mail: string;
  phone: number;
}

const InfosCard: React.FC<InfoCardProps> = ({
  firstName,
  lastName,
  codePostal,
  adress,
  mail,
  phone,
}) => {
  return (
    <Box className="infos-card-container">
      <div className="infos-elements">
        <p>Prénom</p>
        <p className="form-answer">{firstName}</p>
      </div>

      <div className="infos-elements">
        <p>Nom</p>
        <p className="form-answer">{lastName}</p>
      </div>

      <div className="infos-elements">
        <p>Code Postal</p>
        <p className="form-answer">{codePostal}</p>
      </div>

      <div className="infos-elements">
        <p>Adresse</p>
        <p className="form-answer">{adress}</p>
      </div>

      <div className="infos-elements">
        <div>
          <EmailIcon style={{ color: theme.palette.primary.main }} />
          Email
        </div>
        <div className="form-answer-with-icon form-answer">{mail}</div>
      </div>

      <div className="infos-elements">
        <div>
          <PhoneIcon style={{ color: theme.palette.primary.main }} />
          Email
        </div>
        <div className="form-answer-with-icon form-answer">{phone}</div>
      </div>
    </Box>
  );
};

export default InfosCard;
