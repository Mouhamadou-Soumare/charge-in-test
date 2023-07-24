import React from "react";
import Box from "@mui/material/Box";
import "./formAnswer.scss";

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
      <div className="first-row row flex-row">
        <div className="column-row flex-column">
          <div>Je vis dans</div>
          <div>{accomodation}</div>
        </div>
        <div className="column-row flex-column">
          <div>Ma place de parking</div>
          <div>{parking}</div>
        </div>
        <div className="column-row flex-column">
          <div>Je suis</div>
          <div>{owner}</div>
        </div>
      </div>

      <div className="second-row row flex-row">
        <div>Notifications d'un refus de la part de votre copropriété</div>
        <div>{coproperty} Oui</div>
      </div>

      <hr style={{ width: "100%" }} className="row" />

      <div className="third-row row flex-row">
        <div>Achat</div>
        <div>{purchase}</div>
      </div>

      <div className="fourth-row row flex-row">
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

      <div className="sixth-row row flex-row">
        <div>Délai d’installation de la borne</div>
        <div>{installationTime}</div>
      </div>

      <div className="seventh-row row flex-row">
        <div>Avez-vous déjà contacté un installateur ?</div>
        <div>{alreadyContactFitter}</div>
      </div>

      <div className="eighth-row row flex-row">
        <div className="column-row flex-column">
          <div>Le prix</div>
          <div>{price}</div>
        </div>
        <div className="column-row flex-column">
          <div>Installateur</div>
          <div>{fitterName}</div>
        </div>
        <div className="column-row flex-column">
          <div>Modèle borne</div>
          <div>{modelPresent}</div>
        </div>
        <div className="column-row flex-column">
          <div>Marque borne</div>
          <div>{brand}</div>
        </div>
      </div>
    </Box>
  );
};

export default FormAnswer;
