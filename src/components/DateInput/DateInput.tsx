import { ChangeEventHandler } from "react";
import { ValidationError } from "../../types/Validation";

type DateInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error: ValidationError;
};

function DateInput({ value, onChange, error }: DateInputProps) {
  function displayError() {
    console.log(error);
    if (error.isError) {
      return <span className="input-error">{error.errorMessage}</span>;
    }
  }
  return (
   <>
    <input
      type="date"
      className="input-text"
      value={value}
      onChange={onChange}
    />
    {displayError()}
    </>
  );
}

export default DateInput;
