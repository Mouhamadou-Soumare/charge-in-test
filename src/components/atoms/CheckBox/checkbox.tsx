import React from 'react';
import CheckBox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux';

interface CheckboxAtomProps {
  label: string;
  checked: boolean;
  checkboxId: string;
}

const CheckboxAtom: React.FC<CheckboxAtomProps> = ({
  label,
  checked,
  checkboxId,
}) => {
  const dispatch = useDispatch();

 

  return (
    <FormControlLabel control={<CheckBox checked />} label={label} />

  );
};

export default CheckboxAtom;
