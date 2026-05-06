import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Search, Bell } from "lucide-react"
import { useEffect } from 'react'
import heroImage from '../assets/HeroImage.png'

export default function Dashboard({ user }) {
  const navigate = useNavigate()
  const auth = getAuth()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  const handleLogout = async () => {
    await signOut(auth)
    navigate('/')
  }

  if (!user) {
    navigate('/login')
    return null
  }

  return (
    <div className='flex h-screen m-20 flex-col gap-5'>
      <div className='border border-zinc-800 w-fit flex flex-row items-center justify-between rounded-3xl bg-[#111117] pl-10 backdrop-blur'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-4xl font-bold'>What's your</h1>
          <h1 className='text-4xl font-bold text-violet-500'>Next Role?</h1>
          <p className='text-lg text-zinc-300 mt-2'>Add your skills and let NextRole find the best career paths for you.</p>
        </div>
          <img src={heroImage} alt="Hero" className='w-1/2 h-auto opacity-50 mix-blend-lighten' />
      </div>
    </div>
  )
}