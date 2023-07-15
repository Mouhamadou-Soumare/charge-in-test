import React from 'react';
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl';
import './label.scss';

interface LabelAtomProps {
    labelValue: string;
}
  
const LabelAtom: React.FC<LabelAtomProps> = ({ labelValue }) => {
    
  
    return (
        <label className='label-login'>{labelValue}</label>
    );
  };
  


export default LabelAtom;
