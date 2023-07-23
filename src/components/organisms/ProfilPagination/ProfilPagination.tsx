import React from 'react';
import { Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './profilPagination.scss';

interface ProfilPaginationProps {
  placement: 'top' | 'bottom'; 
}

const ProfilPagination: React.FC<ProfilPaginationProps> = ({ placement }) => {
  const marginBottom = placement === 'top' ? '30px' : '0';
  const marginTop = placement === 'bottom' ? '30px' : '0';

  return (
    <Box className='profil-pagination-container' style={{ marginBottom, marginTop }}>
      <div className='pagination-block'>
        <div className='icon'>
          <ArrowBackIosIcon />
        </div>
        <div>
          <div className='back-next'>Précédent</div> <div className='destination'>Prénom Nom</div>
        </div>
      </div>
      <div className='pagination-block'>
        <div className='icon'>
          <ArrowForwardIosIcon />
        </div>
        <div>
          <div className='back-next'>Suivant</div> <div className='destination'>Prénom Nom</div>
        </div>
      </div>
    </Box>
  );
};

export default ProfilPagination;
