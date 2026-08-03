import React from 'react'
import { useForm } from 'react-hook-form'
import './Login.css'


const Login = () => {

  const {register,handleSubmit,formState:{errors}}=useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Login Successful!")
  }
  
  return (
    <div className='login-container'>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name:</label><br/>
            <input type="text" placeholder="Enter your name" {...register("name",{required:"Name is required"})} />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div>
            <label>Email:</label><br/>
            <input type="text" placeholder="Enter your email" {...register("email",{required:"Email is required"})} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
           <div>
            <label>Password:</label><br/>
            <input type="password" placeholder="Enter your password" {...register("password",{required:"Password is required"})} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login