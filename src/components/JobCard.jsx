import React from 'react'
import { Briefcase, Building2, MapPin, Wifi, ExternalLink } from "lucide-react"

export default function JobCard({job}) {
    const timeAgo = (dateStr) => {
    if (!dateStr) return 'Recently'
    const diff = Date.now() - new Date(dateStr).getTime()
    const days = Math.floor(diff / 86400000)
    if (days === 0) return 'Today'
    if (days === 1) return 'Yesterday'
    if (days < 30) return `${days}d ago`
    return `${Math.floor(days / 30)}mo ago`
  }

  return (
    <div className="group flex flex-col bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-violet-500/40 hover:bg-white/[0.07] transition-all duration-300 gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {job.logo ? (
            <img
              src={job.logo}
              alt={job.company}
              className="h-10 w-10 rounded-xl object-contain bg-white/10 p-1 shrink-0"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          ) : (
            <div className="h-10 w-10 rounded-xl bg-violet-500/20 flex items-center justify-center shrink-0">
              <Briefcase className="h-5 w-5 text-violet-400" />
            </div>
          )}
          <div className="min-w-0">
            <h3 className="text-white font-semibold text-sm leading-tight truncate">{job.title}</h3>
            <div className="flex items-center gap-1 mt-0.5">
              <Building2 className="h-3 w-3 text-zinc-500 shrink-0" />
              <p className="text-xs text-zinc-400 truncate">{job.company}</p>
            </div>
          </div>
        </div>
        <span className="text-[10px] text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-full px-2 py-0.5 shrink-0 whitespace-nowrap">
          {job.match}% match
        </span>
      </div>

      {/* Info row */}
      <div className="flex items-center gap-3 text-xs text-zinc-400 flex-wrap">
        <span className="flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {job.location}
        </span>
        {job.remote && (
          <span className="flex items-center gap-1 text-emerald-400">
            <Wifi className="h-3 w-3" />
            Remote
          </span>
        )}
        <span className="text-zinc-600">·</span>
        <span>{job.type}</span>
        <span className="text-zinc-600">·</span>
        <span>{timeAgo(job.posted)}</span>
      </div>

      {/* Salary */}
      {job.salary && job.salary !== 'Not disclosed' && (
        <p className="text-sm font-medium text-emerald-400/90">{job.salary}</p>
      )}

      {/* Skills */}
      {job.skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {job.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="bg-violet-500/10 text-violet-300 px-3 py-1 rounded-full text-xs border border-violet-500/10"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 4 && (
            <span className="text-xs text-zinc-500 py-1">+{job.skills.length - 4} more</span>
          )}
        </div>
      )}

      {/* Apply */}
      <a
        href={job.applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex items-center justify-center gap-2 w-full rounded-xl bg-violet-500/10 hover:bg-violet-500/25 border border-violet-500/20 hover:border-violet-500/50 text-violet-300 hover:text-white text-sm font-medium py-2.5 transition-all duration-200"
      >
        Apply Now
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  )
}