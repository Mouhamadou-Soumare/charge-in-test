import React from 'react';
import Box from '@mui/material/Box';
import TitleAtom from '../../components/atoms/Title/title';
import ButtonAtom from '../../components/atoms/Button/button';
import "./b2clist.scss";
import TableDashboard from '../../components/organisms/TableDashboard/TableDashboard';

const B2cList : React.FC = () => {
    

    return (
        <Box className="main-content"
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - px)` } }}
        >
        <div className='first-title-dashboard flex-row'>
            <TitleAtom  text='Maisons' position='left' iconName='HomeOutlined' />
            <div className='button-head-b2c-list'>
                <ButtonAtom text={'Ajouter un utilisateur'} type={'action'} />
                <ButtonAtom text={'Supprimer un utilisateur'} backgroundColor='#A94442' type={'action'} />
            </div>
            
        </div>
        <div className='section-dashboard'>
            <TableDashboard/>
        </div>           
                    
        </Box>
        )
}

export default B2cList;