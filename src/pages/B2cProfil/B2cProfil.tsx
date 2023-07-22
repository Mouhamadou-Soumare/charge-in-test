import React from 'react';
import TitleAtom from '../../components/atoms/Title/title';
import Box from '@mui/material/Box';

const B2cProfil: React.FC = () => {
    

    return (
        <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - px)` } }}
        >
            <div className='first-title-dashboard flex-row'>
            <TitleAtom  text='Profil: Prénom Nom' position='left' iconName='Person' />
           
            
        </div>
        </Box>
        )
}

export default B2cProfil;