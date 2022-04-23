import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import InputFile from "../components/InputFile";
import RadioButton from "../components/RadioButton";
import { createUser, getPositions, getToken } from "../services/userService";
import Input from "./../components/Input";
import { useStateValue } from "../StateProvider";

function isEmail(email) {
  return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(
    email
  );
}

function bytesToMegaBytes(bytes) {
  return bytes / (1024 * 1024);
}

const AddUser = () => {
  const [{ users }, dispatch] = useStateValue();

  const [positions, setPositions] = useState([]);
  const [token, setToken] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [file, setFile] = useState(null);

  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [fileError, setFileError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPositions();
      const t = await getToken();
      setPositions(data);
      setPosition(data[0]["id"]);
      setToken(t);
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError(null);
    setEmailError(null);
    setPhoneError(null);
    setFileError(null);

    let isError = false;

    if (name.length < 2 || name.length > 60) {
      setNameError("Name should be 2-60 characters");
      isError = true;
    }

    if (!isEmail(email)) {
      setEmailError("Email must be a valid email according to RFC2822");
      isError = true;
    }

    if (!phone.startsWith("+380")) {
      setPhoneError("Phone number should start with code of Ukraine +380");
      isError = true;
    }

    if (!file) {
      setFileError("File is not selected");
      isError = true;
    } else if (bytesToMegaBytes(file.size) > 5) {
      setFileError("File is over 5mb");
      isError = true;
    }

    if (isError) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("photo", file);
    formData.append("position_id", position);

    createUser(
      formData,
      token,
      dispatch,
      setName,
      setEmail,
      setFile,
      setPhone,
      setPosition
    );
  };

  return (
    <div className="add-user-section">
      <h1>Working with POST request</h1>
      <form className="form">
        <Input
          value={name}
          setValue={setName}
          placeholder="Your name"
          error={nameError}
        />
        <Input
          value={email}
          setValue={setEmail}
          placeholder="Email"
          error={emailError}
        />
        <Input
          value={phone}
          setValue={setPhone}
          placeholder="Phone"
          label="+38 (XXX) XXX - XX - XX"
          error={phoneError}
        />
        <div className="radio-buttons">
          <div>Select your position </div>
          <div className="radio-buttons-wrapper">
            {positions.length &&
              positions.map((p) => (
                <RadioButton
                  key={p.id}
                  value={p.id}
                  label={p.name}
                  position={position}
                  setPosition={setPosition}
                />
              ))}
          </div>
        </div>

        <InputFile error={fileError} file={file} setFile={setFile} />

        <div onClick={(e) => handleSubmit(e)} className="sign-up-button">
          <Button>Sign up</Button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
