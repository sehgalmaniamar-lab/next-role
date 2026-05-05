import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import Navbar from '../components/Navbar'
import SignupForm from '../components/SignupForm'

export default function Signup({ user }) {
  const navigate = useNavigate()
  const auth = getAuth()

  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  }, [user, navigate])

  return (
    <>
      <div className='flex items-center justify-center w-full h-screen'>
        <SignupForm defaultMode="signup" />
      </div>
    </>
  )
}