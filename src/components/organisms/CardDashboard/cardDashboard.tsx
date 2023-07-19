import React from 'react';
import TitleCard from '../../atoms/TitleCard/titleCard';
import StatsCard from '../../atoms/StatsCard/statsCard';
import * as MUIcon from "@mui/icons-material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./cardDasboardh.scss";

interface CardDashboardProps {
  title: string;
  iconName: keyof typeof MUIcon;
  keyStat: number | string;
  keyStatEvolution: number;
  otherStat?: string;
  otherStatValue?: number;
  b2cStat?: number | string;
  b2bStat?: number | string;
}

const CardDashboard: React.FC<CardDashboardProps> = ({
  title,
  iconName,
  keyStat,
  keyStatEvolution,
  otherStat,
  otherStatValue,
  b2cStat,
  b2bStat,
}) => {
  return (
    <Card className='card-dashboard'>

      <TitleCard iconName={iconName} titleCard={title} />
      <StatsCard
        keyStat={keyStat}
        keyStatEvolution={keyStatEvolution}
        otherStat={otherStat}
        otherStatValue={otherStatValue}
        b2cStat={b2cStat}
        b2bStat={b2bStat}
      />

    </Card>
  );
};

export default CardDashboard;
