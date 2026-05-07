import React from 'react'
import { useState } from 'react'
import Topbar from "../components/Topbar"

import {category,marketRoles} from '../data/mockData'

export default function Roles() {
  const name="hee"

  const [acitvecategories,setActivecategories]=useState("All")
  const filteredRoles=
        acitvecategories==="All"
        ?marketRoles
        :marketRoles.filter((role)=>role.category===acitvecategories)

  return (
    <div className="p-6 text-white">
      <Topbar/>
      {/* Roles Content */}
      <div>
        <div className="mb-6">
          <h1 className="text-3xl font-semibold mb-2">Explore Roles</h1>

          <p className="text-zinc-400">
            Discover roles and find the best path for your career.
          </p>
        </div>

        <div className="flex items-center gap-3 mb-6">
          {category.map((type, index) => {
            return (
              <button
              onClick={() => setActivecategories(type)}
                key={index}
                className={`rounded-lg px-4 py-2 text-sm font-medium cursor-pointer transition ${
                  acitvecategories === type
                    ? "bg-[#6D4AFF] text-white"
                    : "bg-white/5 text-zinc-300 hover:bg-white/10"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-5 mt-6">
          {filteredRoles.map((role, index) => {
            return (
              <div
                className="flex flex-col bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-violet-500/30 transition-all duration-300 hover:bg-white/[0.07]"
                key={index}
              >
                <h1 className="text-xl font-semibold mb-1">{role.title}</h1>

                <p className="text-sm text-violet-300 mb-3">
                  {role.match}% Match
                </p>

                <p className="text-sm text-zinc-400 leading-6 mb-5">
                  {role.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => {
                    return (
                      <div
                        className="bg-violet-500/10 text-violet-300 px-3 py-1 rounded-full text-xs border border-violet-500/10"
                        key={skill}
                      >
                        <p>{skill}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}