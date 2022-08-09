import React, { useState } from 'react'
import './App.css';

function App() {

  const[ firstName, setFirstname ]=useState('');
  const[ lastName, steLastname ]=useState('');
  const[ email, setEmail ]=useState('');
  const[ mobileNumber, setMobilenumber ]=useState('');
  const[ msg, setMsg ]=useState('');


  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);


const handleSubmit = (e) => {
  e.preventDefault();
  if (firstName && lastName && email ) {
    setValid(true)
  }
  setSubmit(true);
}



 return (
  <div className="main">
    <form className='register' onSubmit={handleSubmit}>

      {submit && valid ? <div>Sumbitted successfully</div> : null}

      <input className='form-main'
        placeholder='Enter First Name'
        name='firstName'
        onChange={(e)=>{setFirstname({...firstName, firstName: e.target.value})}}
      />
      {submit && !firstName ? <span>Please enter first name</span> : null}

      <input className='form-main'
        placeholder='Enter Last Name'
        name='lastName'
        onChange={(e)=>{steLastname({...lastName, lastName: e.target.value})}}
      />
      {submit && !lastName ? <span>Please enter last name</span> : null}

      <input className='form-main'
        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
        placeholder='Enter your email'
        name='email'
        onChange={(e)=>{setEmail({...email, email: e.target.value})}}
        title='Enter valid number'
      />
      {submit && !email ? <span>Please enter your email </span> : null}


      <input className='form-main'
        onChange={(e)=>{setMobilenumber({...mobileNumber,mobileNumber: e.target.value})}}
        pattern='[0-9]{10}'
        maxLength='10'
        minLength='10'
        title='Enter valid number'
        placeholder='0123456789'
        name='mobileNumber'
      />

      <textarea className='form-main'
        placeholder='Text us(words limit 100!!)'
        name='msg'
        onChange={(e)=>{setMsg({...msg, msg: e.target.value})}}
        maxLength="100"
      />


      <button className='form-main' type='submit'>Sumbit</button>



    </form>
  </div>
  );
}

export default App;
