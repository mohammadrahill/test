import React, { useState } from 'react'
import './App.css';

function App() {

  const [detail, setDetail] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      moblieNumber: '',
      msg: ""
    }
  )

  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);


  const handleChange =(e)=> {
    const value = e.target.value;
    setDetail({
      ...detail,[e.target.name]: value
    });
  }

 const handleSubmit = (e) => {
  e.preventDefault();
  if (detail.firstName && detail.lastName && detail.email) {
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
        value={detail.firstName}
        onChange={handleChange}
      />
      {submit && !detail.firstName ? <span>Please enter first name</span> : null}

      <input className='form-main'
        placeholder='Enter Last Name'
        name='lastName'
        value={detail.lastName}
        onChange={handleChange}
      />
      {submit && !detail.lastName ? <span>Please enter last name</span> : null}

      <input className='form-main'
        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
        placeholder='Enter your email'
        name='email'
        onChange={handleChange}
        value={detail.email}
        title='Enter valid number'
      />
      {submit && !detail.email ? <span>Please enter your email </span> : null}


      <input className='form-main'
        onChange={handleChange}
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
        onChange={handleChange}
        maxLength="100"
        value={detail.msg}
      />


      <button className='form-main' type='submit'>Sumbit</button>



    </form>
  </div>
  );
}

export default App;
