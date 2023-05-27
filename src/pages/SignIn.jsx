import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import OAuth from '../components/OAuth';
export default function SignIn() {
  const [formData, setFormData] = useState({
    email:"",
    password:"",
  })
  const [showPassword, setShowPassword] = useState(true)
  const {email, password} = formData;
  const onChange = (e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value
    }))
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img className="w-full rounded-2xl" src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80' alt='rent home'/>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form >
            <input className="mb-6 w-full px-4 py-2 text-xl text-gray-700 rounded bg-white transition ease-out" type='email' id='email' value={email} onChange={onChange} placeholder="Email address"/>
           <div className='relative mb-6'>
           <input onChange={onChange} className='w-full px-4 py-2 text-xl text-gray-700 rounded bg-white transition ease-in-out' 
           type={showPassword? "text" : "password"} id='password' value={password} placeholder='Your Password'/>
          <div onClick={()=>setShowPassword((prevState)=>!prevState)} className='absolute right-0 top-3 text-lg cursor-pointer'>
          {showPassword ? (<AiFillEyeInvisible/>) : <AiFillEye/>}
          </div>
           </div>
           <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
          <p className='mb-6'>Don`t have a account?
          <Link className='text-red-600 hover:text-red-700 ml-1' to="/sign-up">Register</Link>
          </p>
          <p>
            <Link className='text-blue-500 hover:text-blue-700 transition duration-200 ease-in ' to="/forgot-password">Forgot password?</Link>
          </p>
           </div>
          <button className='w-full px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800 bg-blue-600 text-white' type='submit'>Sign in</button>
          <div className='my-4 flex items-center before:border-t before:flex-1 before:border-gray-300 after:flex-1 after:border-t after:border-gray-300'>
            <p className='text-center mx-4 font-semibold'>OR</p>
          </div>
          <OAuth/>
          </form>
        </div>
      </div>
    </section>
  )
}
