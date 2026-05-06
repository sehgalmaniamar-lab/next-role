import React from 'react'

export default function StatCard({stat, tag}) {
  return (
    <div className={`p-3 px-8 bg-violet-500/10 rounded-xl flex items-center gap-6 border-zinc-800 border cursor-pointer transition-all ease-in-out hover:bg-violet-500/20`}>
        <div className={`p-2 ${tag.iconColor} rounded-[10px] inline-flex`}>
            <tag.icon className={`${tag.textColor}`}/>
        </div>

        <div className='flex flex-col gap-2 justify-center'>
            <h3 className={`${tag.textColor} text-shadow-[0_0_0.5px_white]`}>{stat.title}</h3>
            <p className='text-2xl'>{stat.value}</p>
            <p className='text-sm text-green-500/70'>{stat.change}</p>
        </div>
    </div>
  )
}