import { useState, useEffect } from 'react';
import './Form.css';
import './countries'
import countries from './countries';

const Form = () => {

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [checkboxData, setCheckboxData] = useState("no");

  const consoleLogger = (event) => {
    console.log(`
      Email: ${userEmail}
      Password: ${userPassword}
      Country: ${userCountry}
      Accepted Terms: ${checkboxData}
`);
    event.preventDefault();
  }

  const cacheCleaner = () => {
    
  }

  useEffect(()=>{
    cacheCleaner();
  }, [userEmail])

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
          name="userCountry"
          value={userCountry}
          onChange={e => setUserCountry(e.target.value)}
          required>
          <option key=""></option>
          {countries.map(country => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </label>


        <label className='terms-conditions-label'>Accept terms and conditions
          <input 
          type="checkbox"
          value={checkboxData}
          onChange={()=> setCheckboxData("yes")}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
