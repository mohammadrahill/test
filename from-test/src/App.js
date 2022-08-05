import React, { useState } from 'react'
import './App.css';

function App() {

  const[detail, setDetail] = useState(
    {
      firstName: "",
      lastName: "",
      email:"",
      moblieNumber:"",
      msg:""
    }
  )


  const [submit,setSubmit] = useState(false);

  const [valid, setValid] = useState(false);

  const handleFirstName = (e)=>{
    setDetail({...detail, firstName: e.target.value})
  }

  const handleLastName = (e)=>{
    setDetail({...detail, lastName: e.target.value})
  }
  

  const handleEmail = (e)=>{
    setDetail({...detail, email: e.target.value})
  }

  const handleMobile = (e)=>{
    setDetail({...detail, mobileNumber: e.target.value})
  }
  

  const handleMsg = (e)=>{
    setDetail({...detail, msg: e.target.value})
  }


  const handleSubmit = (e)=>{
    e.preventDefault();
    if(detail.firstName && detail.lastName && detail.email){
      setValid(true)
    }
    setSubmit(true);
  }



  return (
    <div className="main">
       <form className='register' onSubmit={handleSubmit}>

       {submit && valid? <div>Sumbitted successfully</div> : null}

          <input className='form-main'
              value={detail.firstName}
              placeholder='Enter First Name'
              name='firstName'
              onChange={handleFirstName}
              />
          {submit && !detail.firstName ? <span>Please enter first name</span> : null}

          <input className='form-main'
              value={detail.lastName}
              placeholder='Enter Last Name'
              name='lastName'
              onChange={handleLastName}
              />
          {submit && !detail.lastName ? <span>Please enter last name</span> : null}

          <input className='form-main'
              value={detail.email}
              placeholder='Enter your email'
              name='email'
              onChange={handleEmail}
              />
          {submit && !detail.email ? <span>Please enter your email number</span> : null}


          <input className='form-main'
              value={detail.moblieNumber}
              placeholder='Enter your Mobile number'
              name='number'
              onChange={handleMobile}
              />


          <textarea className='form-main'
              value={detail.msg}
              placeholder='Text us(words limit 100!!)'
              name='msg'
              onChange={handleMsg}
              maxLength="100"
              />
          
        
          <button className='form-main' type='submit'>Sumbit</button>



       </form>
    </div>
  );
}

export default App;
