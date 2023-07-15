import React from 'react';
import TextField from '@mui/material/TextField'
import './input.scss';

interface InputAtomProps {
    inputValue: string;
    placeholder?: string;
    onChange: (inputValue: string) => void;
    renderType: 'input-form' | 'input-back-office';
}
  
const InputAtom: React.FC<InputAtomProps> = ({ inputValue, onChange, renderType,placeholder }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    };
  
    return (
      <>
        {renderType === 'input-form' && (
           <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            placeholder={placeholder}
            variant="standard"
            size="small"
            className="input-login"
            value={inputValue}
            />  
        )}
        {renderType === 'input-back-office' && (
            <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            placeholder={placeholder}
            variant="standard"
            size="small"
            className="input-login"
            value={inputValue}
            />  
        )}
      </>
    );
  };
  


export default InputAtom;
