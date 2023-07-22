import React from 'react';
import Box from '@mui/material/Box';
import TitleAtom from '../../components/atoms/Title/title';
import TableDash from '../../components/organisms/tableDashboard/TableDashboard';
import ButtonAtom from '../../components/atoms/Button/button';
import "./b2clist.scss";
import InputAtom from '../../components/atoms/Input/input';

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
                <ButtonAtom text={'Ajouter un utilisateur'} type={'action'} />
            </div>
            
        </div>
        <div className='section-dashboard'>
            <TableDash/>
        </div>           
                    
        </Box>
        )
}

export default B2cList;