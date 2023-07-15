import React from 'react';
import { Typography, useTheme } from '@mui/material';
import * as MUIcon from "@mui/icons-material";
import './title.scss';

interface AtomTitleProps {
  text: string;
  subtitle?: string;
  iconName?: keyof typeof MUIcon;
  position?: 'left' | 'right';
  type?: 'heading-title' | 'h1' | 'h2' | 'h3';
}

const TitleAtom: React.FC<AtomTitleProps> = ({
  text,
  subtitle,
  iconName,
  position = 'left',
  type = 'heading-title',
}) => {
  const theme = useTheme();

  const getHeaderVariant = () => {
    switch (type) {
      case 'heading-title':
      case 'h1':
        return 'h1';
      case 'h2':
        return 'h2';
      case 'h3':
        return 'h3';
      default:
        return 'h1';
    }
  };

  const getHeaderStyle = () => {
    switch (type) {
      case 'heading-title':
        return {
          fontSize: `40px`,
          fontWeight: "bold",
        };
      case 'h1':
        return {
          fontSize: `20px`,
          fontWeight: "bold",
        };
      case 'h2':
        return {
          fontSize: `16px`,
          fontWeight: 'bold',
        };
      case 'h3':
        return {
          fontSize: `14px`,
          fontWeight: 'bold',
        };
      default:
        return {};
    }
  };

  const Icon = iconName ? MUIcon[iconName] : null;

  return (
    <div className='heading-container'>
      <div className='title'>
        {iconName && position === 'left' && Icon && <Icon style={{ color: theme.palette.primary.main }} />}
        <Typography variant={getHeaderVariant()} style={getHeaderStyle()}>
          {text}
        </Typography>
        {iconName && position === 'right' && Icon && <Icon style={{ color: theme.palette.primary.main }} />}
      </div>
      {subtitle && (
        <div className="subtitle">
          <Typography variant="subtitle1">
            {subtitle}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default TitleAtom;
