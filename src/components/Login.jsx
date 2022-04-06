import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Error = ({ error }) => {
  return <p className="text-red-500 text-xs italic">{error}</p>
}

const errorclassNamees = 'border-red-500'

const Login = ({
  titleName,
  inputs,
  handleChange,
  handleSubmit,
  buttonName,
  type
}) => {
  return (
    <div
      className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-glassmorphism rounded-md shadow-md lg:shadow-lg"
    >
      <h2 className="font-pacifico text-center font-semibold text-3xl lg:text-4xl text-gray-800">
        {titleName}
      </h2>

      <form className="mt-10" method="POST" action="/">
        {inputs.map(({ name, type, placeholder, autoComplete }, idx) => (
          <div key={idx}>
            <label
              htmlFor={name}
              className="font-roboto block mt-4 text-xs font-semibold text-gray-600 uppercase"
            >
              {placeholder == 'Email Address' ? 'Email' : placeholder}
            </label>
            <input
              id={name}
              type={type}
              name={name}
              placeholder={placeholder}
              autoComplete={autoComplete}
              onChange={(e) => handleChange(e, name)}
              className="block w-full py-3 px-2.5 mt-1 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    rounded-md lg:rounded-lg
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 font-roboto"
              required
            />
          </div>
        ))}

        <button
          className="w-full py-3 mt-6 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none font-roboto lg:rounded-lg"
          onClick={handleSubmit}
        >
          {buttonName}
        </button>

        <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
          <Link
            to={
              type == 'login' || type != 'forgetPassword'
                ? '/forget-password'
                : '/'
            }
            className="flex-2 underline font-roboto"
          >
            {type == 'login' || type != 'forgetPassword'
              ? 'Forgot password?'
              : 'Login Now'}
          </Link>

          <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto font-pacifico">
            OR
          </p>

          <Link
            to={type == 'login' || type != 'register' ? '/register' : '/'}
            className="flex-2 underline font-roboto"
          >
            {type == 'login' || type != 'register'
              ? 'Create an account'
              : 'Login Now'}
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
