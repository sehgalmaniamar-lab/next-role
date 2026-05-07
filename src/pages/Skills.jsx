import React from "react";
import { useState } from "react";

export default function Skills(){

    const [count,setcount]=useState(0)
    const [Skills,setSkills]=useState([])
    const [newSkill,setNewSkill]=useState("")


    const addSkill=()=>{
        if (newSkill.trim()==="") return;
        const updatedSkill=[...Skills]
        updatedSkill.push(newSkill)
        setSkills(updatedSkill)
        setNewSkill("")
    }
    

    return (
        <div className="flex flex-col p-6">
            <div className="flex flex-col gap-3 p-4 mb-4">
                <h1 className="text-white font-bold text-4xl">Your Skills</h1>
                <p>Add and manage your skills to get better recommendations.</p>
            </div>
            <div className="flex px-4 py-2 gap-8 mb-10">
                <input 
                type="text" 
                placeholder="Add a Skill and press Enter..." 
                className="w-200 bg-white/5 p-3 rounded-lg"
                value={newSkill}
                onChange={(e)=>setNewSkill(e.target.value)}/>
                <button className="bg-violet-500 text-white rounded-lg p-3" onClick={addSkill}>Add Skill</button>
            </div>
            <div>
                <h1>Your Skills ({count})</h1>
                {Skills.map((skill)=>{
                    return(<div key={skill.id}>{skill}</div>
                    )
                })}
            </div>

        </div>
    )
}