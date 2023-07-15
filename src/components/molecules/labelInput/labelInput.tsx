import React from 'react';
import LabelAtom from '../../atoms/Label/label';
import InputAtom from '../../atoms/Input/input';
import FormControl from '@mui/material/FormControl';

interface LabelInputProps {
  inputValue: string;
  labelValue: string;
  placeholder?: string;
  onChange: (inputValue: string) => void;
  renderType: 'input-form' | 'input-back-office';
}

const LabelInputMolecule: React.FC<LabelInputProps> = ({
  inputValue,
  labelValue,
  onChange,
  renderType,
  placeholder
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
    {renderType === 'input-form' && (
    <div className='form-control-login'>
       <FormControl variant="standard">

        <LabelAtom labelValue={labelValue} />
        <InputAtom
                          inputValue={inputValue}
                          renderType={renderType}
                          placeholder={placeholder} onChange={function (inputValue: string): void {
                              throw new Error('Function not implemented.');
                          } }      />
    </FormControl>
    </div>  
    )}
    {renderType === 'input-back-office' && (
    <div className='form-control-login'>
        <FormControl variant="standard">
        <InputAtom
                          placeholder={placeholder} inputValue={''} onChange={function (inputValue: string): void {
                              throw new Error('Function not implemented.');
                          } } renderType={'input-form'}        />  
        </FormControl>
    </div>  
    )}
  </>
  );
};

export default LabelInputMolecule;
