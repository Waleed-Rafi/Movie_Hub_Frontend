import React from "react";

interface Props {
  name: string;
  placeholder: string;
  value: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// const AppInput: React.FC = (props: Props) => { or
const AppInput: React.FC<Props> = (props) => {
  return (
    <div>
      <input
        name={props.name}
        className="form-control"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.changeHandler}
      />
    </div>
  );
};

export default AppInput;
