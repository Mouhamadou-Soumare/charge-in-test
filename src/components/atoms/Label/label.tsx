import React from "react";
import "./label.scss";

interface LabelAtomProps {
  labelValue: string;
}

const LabelAtom: React.FC<LabelAtomProps> = ({ labelValue }) => {
  return <label className="label-login">{labelValue}</label>;
};

export default LabelAtom;
