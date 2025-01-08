import { MouseEventHandler } from "react";
import "./SubmitButton.scss";

type SubmitButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function SumbitButton({ onClick }: SubmitButtonProps) {
  return (
    <button className="submit-button" type="submit" onClick={onClick}>
      Submit
    </button>
  );
}

export default SumbitButton;
