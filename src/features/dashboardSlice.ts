import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as MUIcon from "@mui/icons-material";

interface DashboardState {
  cardData: CardData[];
}

interface CardData {
  title: string;
  iconName: keyof typeof MUIcon;
  keyStat: number | string;
  keyStatEvolution: number;
  otherStat?: string;
  otherStatValue?: number;
  b2cStat?: number | string;
  b2bStat?: number | string;
}

const initialState: DashboardState = {
  cardData: [
    {
      title: "Installateurs partenaires inscrits",
      iconName: "Person",
      keyStat: "78",
      keyStatEvolution: 0,
    },
    {
      title: "Abonnements en cours",
      iconName: "PieChart",
      keyStat: "261€",
      keyStatEvolution: 2,
      otherStat: "Nombre d'abonnements",
      otherStatValue: 22,
    },
    {
      title: "Devis réalisés",
      iconName: "FolderOpen",
      keyStat: "105",
      keyStatEvolution: -2,
      b2cStat: "##",
      b2bStat: "##",
    },
    {
      title: "Points de charge",
      iconName: "PeopleAlt",
      keyStat: "450",
      keyStatEvolution: 18,
      b2cStat: "##",
      b2bStat: "##",
    },
    {
      title: "Points de charge supevisés",
      iconName: "CompareArrows",
      keyStat: "432",
      keyStatEvolution: 18,
      b2cStat: "##",
      b2bStat: "##",
    },
    {
      title: "Taux de conversion",
      iconName: "Payments",
      keyStat: "78",
      keyStatEvolution: -2,
      b2cStat: "##",
      b2bStat: "##",
    },
    {
      title: "Chiffre d'affaires",
      iconName: "Payments",
      keyStat: "26100",
      keyStatEvolution: 6,
      b2cStat: "12 0000€",
      b2bStat: "22 045€",
    },
  ],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;
