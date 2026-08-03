import React from 'react'
import { useForm } from 'react-hook-form'
import './Register.css'

const Register = () => {
  const {register,handleSubmit,formState:{errors}}=useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Registration Successful!")
  }
  
  return (
    <div className='register-container'>
        <h1>Register Page</h1>
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
          <div>
            <label>Confirm Password:</label><br/>
            <input type="password" placeholder="Confirm your password" {...register("confirmPassword",{required:"Please confirm your password"})} />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </div>
          <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register