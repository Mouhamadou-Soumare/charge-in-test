import React from "react";
import Box from "@mui/material/Box";
import './formAnswer.scss';

export type AccommodationType = "Maison" | "Appartement";

interface FormAnswerProps {
  accomodation: AccommodationType;
  parking: string;
  owner: string;
  coproperty: string;
  purchase: string;
  model: string;
  usage: string;
  batteryCapacity: number;
  installationTime: string;
  alreadyContactFitter: string;
  price: string;
  fitterName: string;
  modelPresent: string;
  brand: string;
}

const FormAnswer: React.FC<FormAnswerProps> = ({
  accomodation,
  parking,
  owner,
  coproperty,
  purchase,
  model,
  usage,
  batteryCapacity,
  installationTime,
  alreadyContactFitter,
  price,
  fitterName,
  modelPresent,
  brand,
}) => {
  return (
    <Box className="form-answer-container">
        <div className="first-row row">
            <div className="column-row">
                <div>Je vis dans</div>
                <div>{accomodation}</div>
            </div>
            <div className="column-row">
                <div>Ma place de parking</div>
                <div>{parking}</div>
            </div>
            <div className="column-row">
                <div>Je suis</div>
                <div>{owner}</div>
            </div>
          </div> 

          <div className="second-row row">
            <div>Notifications d'un refus de la part de votre copropriété</div>
            <div>{coproperty} Oui</div>
          </div>

          <hr style={{ width: "100%" }} className="row" />

          <div className="third-row row">
            <div>Achat</div>
            <div>{purchase}</div>
          </div>

          <div className="fourth-row row">
            <div>Modèle</div>
            <div>{purchase}</div>
          </div>

          <div className="fifth-row row">
            <div className="column-row">
              <div>Usage</div>
              <div>{usage}</div>
            </div>
            <div className="column-row">
              <div>Capacité nominale de la batterie</div>
              <div>{batteryCapacity}kWh</div>
            </div>
          </div>

          <hr style={{ width: "100%" }} className="row" />

          <div className="sixth-row row">
            <div>Délai d’installation de la borne</div>
            <div>{installationTime}</div>
          </div>

          <div className="seventh-row row">
            <div>Avez-vous déjà contacté un installateur ?</div>
            <div>{alreadyContactFitter}</div>
          </div>

          <div className="eighth-row row">
            <div className="column-row">
                <div>Le prix</div>
                <div>{price}</div>
            </div>
            <div className="column-row">
                <div>Installateur</div>
                <div>{fitterName}</div>
            </div>
            <div className="column-row">
                <div>Modèle borne</div>
                <div>{modelPresent}</div>
            </div>
            <div className="column-row">
                <div>Marque borne</div>
                <div>{brand}</div>
            </div>
          </div> 


    </Box>
  );
};

export default FormAnswer;
