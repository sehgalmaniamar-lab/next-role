import React from 'react'

export default function JobSkeleton() {
  return (
    <div className="flex flex-col bg-white/5 rounded-2xl p-5 border border-white/10 animate-pulse gap-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-white/10" />
        <div className="flex flex-col gap-2 flex-1">
          <div className="h-4 bg-white/10 rounded w-2/3" />
          <div className="h-3 bg-white/10 rounded w-1/3" />
        </div>
      </div>
      <div className="h-3 bg-white/10 rounded w-full" />
      <div className="h-3 bg-white/10 rounded w-5/6" />
      <div className="flex gap-2 mt-1">
        <div className="h-6 w-16 bg-white/10 rounded-full" />
        <div className="h-6 w-16 bg-white/10 rounded-full" />
        <div className="h-6 w-16 bg-white/10 rounded-full" />
      </div>
    </div>
  )
}