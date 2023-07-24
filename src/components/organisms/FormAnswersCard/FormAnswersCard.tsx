import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import Card from "@mui/material/Card";
import TitleCard from "../../atoms/TitleCard/titleCard";
import FormAnswer, {AccommodationType} from "../../atoms/formAnswerCard/formAnswerCard";
import './formAnswersCard.scss';

interface FormAnswersCardProps {
  title: string;
}

const FormAnswersCard: React.FC<FormAnswersCardProps> = ({ title }) => {
  const formAnswersData = useSelector((state: RootState) => state.formAnswerCard);

  return (
    <Card className="form-answers-card card-template">
      <TitleCard titleCard={title} />
      <FormAnswer
        accomodation={formAnswersData.accomodation}
        parking={formAnswersData.parking}
        owner={formAnswersData.owner}
        coproperty={formAnswersData.coproperty}
        purchase={formAnswersData.purchase}
        model={formAnswersData.model}
        usage={formAnswersData.usage}
        batteryCapacity={formAnswersData.batteryCapacity}
        installationTime={formAnswersData.installationTime}
        alreadyContactFitter={formAnswersData.alreadyContactFitter}
        price={formAnswersData.price}
        fitterName={formAnswersData.fitterName}
        modelPresent={formAnswersData.modelPresent}
        brand={formAnswersData.brand}
      />
    </Card>
  );
};

export default FormAnswersCard;
