import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { BadgeCheck, UserRoundSearch, Route, ShieldCheck } from "lucide-react"
import { useEffect } from 'react'
import { stats, marketRoles } from '../data/mockData'
import Role from '../components/Role'
import StatCard from '../components/StatCard'
import heroImage from '../assets/HeroImage.png'
import Topbar from "../components/Topbar"

export default function Dashboard({ user }) {
  const navigate = useNavigate()
  const auth = getAuth()

  const icons = {
    "Skills Added": {"icon":BadgeCheck, "iconColor": "bg-violet-500/10", "textColor":"text-violet-400"},
    "Matching Roles": {"icon":UserRoundSearch, "iconColor": "bg-emerald-500/10", "textColor":"text-emerald-400" },
    "Learning Paths": {"icon":Route, "iconColor": "bg-blue-500/10", "textColor":"text-blue-400"},
    "Profile Strength": {"icon":ShieldCheck, "iconColor": "bg-yellow-500/10", "textColor":"text-yellow-400"},
  }

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
    <div className='flex mx-20 mt-10 flex-col gap-8'>
        <Topbar/>
      <div className='border border-zinc-800 w-fit flex flex-row items-center justify-between rounded-3xl bg-linear-to-r from-violet-500/10 via-[#111117] to-[#111117] pl-10 backdrop-blur'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-4xl font-bold text-shadow-[0_0_0.5px_white] text-white'>What's your</h1>
          <h1 className='text-4xl font-bold text-violet-500 text-shadow-[0_0_0.5px_white]'>Next Role?</h1>
          <p className='text-lg mt-2'>Add your skills and let NextRole find the best career paths for you.</p>
        </div>
          <img src={heroImage} alt="Hero" className='w-1/2 h-auto opacity-50 mix-blend-lighten' />
      </div>

      <div className='w-full grid grid-cols-4 gap-5'>
        {stats.map((stat) => {
          const title = stat.title
          const titleElement = <h3 className={`{icons[title].textColor}`}>{title}</h3> 

          return (
            <StatCard stat={stat} tag={icons[stat.title]} />
          )
        })}
      </div>

      <div className='w-full flex flex-col gap-5'>
        <div className='flex w-full items-center justify-between'>
          <h2 className='text-2xl text-white'>Top Roll Matches</h2>
          <h2 className='text-sm text-violet-400 transition-all ease-in-out hover:text-shadow-[0_0_1px_white] cursor-pointer'>View All</h2>
        </div>

        <div className='w-full grid grid-cols-4 gap-5'>
          {marketRoles.map((role) => {
            return (
              <Role role={role}/>
            )
          })}
        </div>        
      </div>
    </div>
  )
}