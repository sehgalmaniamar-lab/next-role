import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SignupForm from '../components/SignupForm'

export default function Login({ user }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  }, [user, navigate])

  return (
    <>
      <div className='flex items-center justify-center w-full h-screen'>
        <SignupForm defaultMode="login" />
      </div>
    </>
  )
}