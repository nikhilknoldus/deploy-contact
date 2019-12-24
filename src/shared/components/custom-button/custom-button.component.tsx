import React from "react";
import "./custom-button.styles.scss";

interface IProps {
  children: string;
  curved?: boolean;
  buttonType?: string;
  otherProps?: any;
  margined?: any;
  emitEvent?: () => Function;
}

const CustomButton: React.FC<IProps> = props => {
  if (!props.children) {
    return <div>No Button found</div>;
  }

  function submitEvent() {
    if (props.emitEvent) {
      props.emitEvent();
    }
  }

  return (
    <button
      data-test="customButton"
      onClick={() => submitEvent()}
      className={`${props.curved ? "curved" : ""} ${
        props.margined ? "margined" : ""
      } ${props.buttonType ? props.buttonType : ""}   custom-button`}
      {...props.otherProps}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
