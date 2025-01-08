import { useFormInput } from "../../hooks/useFormInput";
import { Gender, User } from "../../types/User";
import DateInput from "../DateInput/DateInput";
import SelectInput from "../SelectInput/SelectInput";
import SumbitButton from "../SubmitButton/SubmitButton";
import TextInput from "../TextInput/TextInput";

type UserFormProps = {
  user: User | undefined;
  onSubmit: (user: User) => void;
};

function UserForm({ user, onSubmit }: UserFormProps) {
  console.log(user);
  const userNameProps = useFormInput(user?.name ?? "", true);
  const dobProps = useFormInput(user?.dob ?? "", true);
  const genderProps = useFormInput(
    user?.gender ? convertGenderToString(user.gender) : "",
    true
  );
  const emailProps = useFormInput(user?.email ?? "", true);
  const addressProps = useFormInput(user?.address ?? "", true);
  const telephoneProps = useFormInput(user?.phone ?? "", true);
  const websiteProps = useFormInput(user?.web ?? "", true);

  function convertStringToGender(value: string): Gender {
    switch (value) {
      case "MALE":
        return Gender.MALE;
      case "female":
        return Gender.FEMALE;
      case "Female":
        return Gender.OTHER;
      case "Other":
      default:
        return Gender.NONE;
    }
  }

  function convertGenderToString(gender: Gender): string {
    switch (gender) {
      case Gender.MALE:
        return "Male";
      case Gender.FEMALE:
        return "Female";
      case Gender.OTHER:
      default:
        return Gender.NONE;
    }
  }

  function isValidInputs(): boolean {
    const isUserNameValid = userNameProps.validateInput(userNameProps.value);
    const isDobValid = dobProps.validateInput(dobProps.value);
    console.log(genderProps.value);
    const isGenderValid = genderProps.validateInput(
      convertStringToGender(genderProps.value)
    );
    const isEmailValid = emailProps.validateInput(emailProps.value);
    const isAddressValid = addressProps.validateInput(addressProps.value);
    const istelephoneValid = telephoneProps.validateInput(telephoneProps.value);
    const isWebsiteValid = websiteProps.validateInput(websiteProps.value);
    return (
      isUserNameValid &&
      isDobValid &&
      isGenderValid &&
      isEmailValid &&
      isAddressValid &&
      istelephoneValid &&
      isWebsiteValid
    );
  }
  function handleSumbitUser() {
    if (isValidInputs()) {
      const submittedUser: User = {
        id: user?.id ?? Math.random(),
        name: userNameProps.value,
        dob: dobProps.value,
        gender: convertStringToGender(genderProps.value),
        email: emailProps.value,
        address: addressProps.value,
        phone: telephoneProps.value,
        web: websiteProps.value,
      };
      onSubmit(submittedUser);
    } else {
      alert("Please enter information In");
    }
  }

  return (
    <div className="input-form-container">
      <div className="input-container">
        <span className="input-title">Username</span>
        <br />
        <TextInput
          value={userNameProps.value}
          onChange={userNameProps.handleInputChangeEvent}
          error={userNameProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">DOB</span>
        <br />
        <DateInput
          value={dobProps.value}
          onChange={dobProps.handleInputChangeEvent}
          error={dobProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Gender</span>
        <br />
        <SelectInput
          value={genderProps.value}
          onChange={genderProps.handleInputChangeEvent}
          options={["MALE", "FEMALE"]}
          error={genderProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Email</span>
        <br />
        <TextInput
          value={emailProps.value}
          onChange={emailProps.handleInputChangeEvent}
          error={emailProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Post Address</span>
        <br />
        <TextInput
          value={addressProps.value}
          onChange={addressProps.handleInputChangeEvent}
          error={addressProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Telephone</span>
        <br />
        <TextInput
          value={telephoneProps.value}
          onChange={telephoneProps.handleInputChangeEvent}
          error={telephoneProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Website</span>
        <br />
        <TextInput
          value={websiteProps.value}
          onChange={websiteProps.handleInputChangeEvent}
          error={websiteProps.error}
        />
      </div>
      <SumbitButton onClick={handleSumbitUser} />
    </div>
  );
}

export default UserForm;
