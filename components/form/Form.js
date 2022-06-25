import { useState, useEffect } from 'react';
import './Form.css';
import './countries'
import countries from './countries';

const Form = () => {

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userCountry, setUserCountry] = useState("");

  const consoleLogger = (event) => {
    console.log(`
      Email: ${userEmail}
      Password: ${userPassword}
      Country: ${userCountry}
      Accepted Terms: 
`);
    event.preventDefault();
  }

  return (
    <div className="box-wrapper">
      <h1>Create Account</h1>
      <form onSubmit={consoleLogger}>
        <label>Email:</label>
        <input
          type="text"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="text"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
       <label>
        Country:
        <select
          name="country"
          value={userCountry}
          onChange={(e) => setUserCountry(e.target.value)}
          required>
          {countries.map(country => (
            <option key={userCountry}></option>
          ))}
        </select>
      </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
