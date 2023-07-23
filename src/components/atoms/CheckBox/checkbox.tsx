import React from 'react';
import CheckBox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

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
  const dispatch = useAppDispatch();

 

  return (
    <FormControlLabel control={<CheckBox checked />} label={label} />

  );
};

export default CheckboxAtom;
