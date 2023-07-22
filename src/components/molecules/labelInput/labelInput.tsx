import React from "react";
import LabelAtom from "../../atoms/Label/label";
import InputAtom from "../../atoms/Input/input";
import FormControl from "@mui/material/FormControl";
import "./labelInput.scss";

interface LabelInputProps {
  inputValue: string;
  labelValue: string;
  placeholder?: string;
  renderType: "input-form" | "input-back-office";
  onChange: (value: string) => void;
}

const LabelInputMolecule: React.FC<LabelInputProps> = ({
  inputValue,
  labelValue,
  renderType,
  placeholder,
  onChange,
}) => {
  return (
    <div className="form-control-login">
      <FormControl variant="standard" className="control">
        <LabelAtom labelValue={labelValue} />
        <InputAtom
          inputValue={inputValue}
          renderType={renderType}
          placeholder={placeholder}
          onChange={onChange}
        />
      </FormControl>
    </div>
  );
};

export default LabelInputMolecule;
