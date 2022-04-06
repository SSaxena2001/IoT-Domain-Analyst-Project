import React, { useState } from 'react'
import { Login } from '../components'
import { useNavigate } from 'react-router-dom'

import background from '../images/bg.jpg'

const loginInputs = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email Address',
    autoComplete: 'email'
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    autoComplete: 'current-password'
  }
]

const forgetPassInputs = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email Address',
    autoComplete: 'email'
  },
  {
    name: 'new_password',
    type: 'password',
    placeholder: 'New Password',
    autoComplete: 'off'
  },
  {
    name: 'confirm_password',
    type: 'password',
    placeholder: 'Confirm Password',
    autoComplete: 'off'
  }
]

const createAccountInputs = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email Address',
    autoComplete: 'email'
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Set Password',
    autoComplete: 'off'
  },
  {
    name: 'confirm_password',
    type: 'password',
    placeholder: 'Confirm Password',
    autoComplete: 'off'
  }
]

const SignIn = ({ type }) => {
  const navigate = useNavigate()
  const [formParams, setFormParams] = useState({})

  const handleChange = (e, name) => {
    setFormParams((prevState) => ({ ...prevState, [name]: e.target.value }))
    e.preventDefault()
  }

  const handleSubmit = () => {
    console.log(formParams)
    navigate('/home')
  }

  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-screen gap-12"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="font-pacifico text-5xl px-2 lg:px-0 lg:text-5xl bg-clip-text bg-gradient-to-br from-orange-500 to-blue-500 text-transparent text-center">
        Welcome to Crowd Fusion
      </h1>
      {type == 'login' && (
        <Login
          type={type}
          titleName="Login your account"
          inputs={loginInputs}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonName="Login"
        />
      )}
      {type == 'forgetPassword' && (
        <Login
          type={type}
          titleName="Forget Password"
          inputs={forgetPassInputs}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonName="Set New Password"
        />
      )}
      {type == 'register' && (
        <Login
          type={type}
          titleName="Create New Account"
          inputs={createAccountInputs}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonName="Register Your Account"
        />
      )}
    </div>
  )
}

export default SignIn
