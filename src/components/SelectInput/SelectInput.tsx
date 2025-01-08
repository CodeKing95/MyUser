import { ChangeEventHandler } from "react";
import { ValidationError } from "../../types/Validation";

type SelectInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: string[];
  error: ValidationError;
};

function SelectInput({ value, onChange, options, error }: SelectInputProps) {
  function displayError() {
    if (error.isError) {
      return <span className="input-error">{error.errorMessage}</span>;
    }
  }
  return (
    <>
      <select className="input-text" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {displayError()}
    </>
  );
}

export default SelectInput;
