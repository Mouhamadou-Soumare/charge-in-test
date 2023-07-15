import React from 'react';
import Typography from '@mui/material/Typography';
import "./sectionTitleSidebar.scss";

interface SectionTitleSidebarProps {
  text: string;
}

const SectionTitleSidebar: React.FC<SectionTitleSidebarProps> = ({ text }) => {
  return (
    <Typography variant="overline" display="block" gutterBottom className='title-sidebar'>
      {text}
    </Typography>
  );
};

export default SectionTitleSidebar;
