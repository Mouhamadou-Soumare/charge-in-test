import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccommodationType } from "../components/atoms/formAnswerCard/formAnswerCard";

interface FormAnswersData {
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

const initialState: FormAnswersData = {
  accomodation: "Maison",
  parking: "À l’intérieur",
  owner: "Propriétaire",
  coproperty: "Non",
  purchase: "J’ai commandé mon véhicule électrique mais je ne l’ai pas encore",
  model: "Mercedes-EQS-SUV-500-4MATIC",
  usage: "Autoroute & ville",
  batteryCapacity:118,
  installationTime: "3 mois",
  alreadyContactFitter: "Oui",
  price: "##€",
  fitterName: "Information ici",
  modelPresent: "Information ici",
  brand: "Information ici",
};

const formAnswersSlice = createSlice({
  name: "formAnswers",
  initialState,
  reducers: {
    updateFormAnswers: (state, action: PayloadAction<Partial<FormAnswersData>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateFormAnswers } = formAnswersSlice.actions;

export default formAnswersSlice.reducer;
