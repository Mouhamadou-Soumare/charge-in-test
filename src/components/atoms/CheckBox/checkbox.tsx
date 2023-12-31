import React from 'react';
import CheckBox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useAppDispatch } from "../../../app/hooks";

interface CheckboxAtomProps {
  label: string;
  checked: boolean;
  checkboxId: string;
}

const CheckboxAtom: React.FC<CheckboxAtomProps> = ({
  label,

}) => {
  const dispatch = useAppDispatch();

 

  return (
    <FormControlLabel control={<CheckBox  />} label={label} />

  );
};

export default CheckboxAtom;
