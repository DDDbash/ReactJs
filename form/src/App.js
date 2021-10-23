import React, { useState } from 'react';
import TextField from './components/TextField';
import PasswordField from './components/PasswordField';
import DropDownField from './components/DropDownField';
import logo from './logo/logoipsum.png';
import forward from './icons/Forward.svg';

const App = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dropdown, setDropdown] = useState('');
  const country = ["Nepal", "India", "Japan"];
  const [isError, setIsError] = useState([false, false, false, false, false]);
  let check = [];

  const submit = (e) => {
    e.preventDefault();
    if (!userName || !firstName || !lastName) {
      if (!userName || !userName.match(/^[a-z0-9]{1,}[_-]?[a-z0-9]*$/i)) {
        check[0] = true;
      }
      if (!password.length || password.length <= 8) {
        check[1] = true;
      }
      if (!firstName || !firstName.match(/^[a-z ]+$/i)) {
        check[2] = true;
      }
      if (!lastName || !lastName.match(/^[a-z]+$/i)) {
        check[3] = true;
      }
      if (!dropdown) {
        check[4] = true;
      }
      setIsError(check.slice(0));
    } else {
      setIsError(false, false, false, false, false);
    }
  }

  return (
    <div>
      <img
        src={logo}
        className="logo"
        alt=""
      />
      <form className="form-group" onSubmit={submit}>
        <TextField
          isError={isError[0]}
          labelName="Username"
          data={userName}
          setData={setUserName}
        />
        <PasswordField
          isError={isError[1]}
          labelName="Password"
          data={password}
          setData={setPassword}
          hintMsg="Password must be 8 characters long"
        />
        <TextField
          isError={isError[2]}
          labelName="First Name"
          data={firstName}
          setData={setFirstName}
          errorMsg="First Name can contain only letters and spaces"
        />
        <TextField
          isError={isError[3]}
          labelName="Last Name"
          data={lastName}
          setData={setLastName}
          errorMsg="Last Name can contain only letters"
        />
        <DropDownField
          isError={isError[4]}
          labelName="Country"
          data={dropdown}
          setData={setDropdown}
          arr={country}
          hintMsg="Please select a country"
        />
        <button className="btn">
          Join us &nbsp;
          <img
            src={forward}
            className="btn-icon"
            alt=""
          />
        </button>
      </form>
      <span className="footer"> Already a member? <a href="#" className="signin"> Sign in. </a></span>
    </div>
  );
}

export default App;