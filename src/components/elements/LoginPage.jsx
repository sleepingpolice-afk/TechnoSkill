import DashboardElement from "./DashboardElement"
import React, { useState } from 'react';

export default function LoginPage() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();

    return(
        <div className="bg-[#CEC1DA] h-screen w-screen-flex flex">
           <DashboardElement />

           <div className="bg-[#2B2E63] w-[622px] h-[675px] m-auto rounded-2xl flex flex-col text-white" >
                <p className="text-[30px] mx-auto mt-20">Login</p>
                <div className="mx-auto mt-10">
                    <p className="text-[20px]">Name</p>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="bg-[#BFCBCE] w-[343px] h-[41px] text-gray-700 px-2" />
                </div>

                <div className="mx-auto mt-10">
                    <p className="text-[20px]">Password</p>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="bg-[#BFCBCE] w-[343px] h-[41px] text-gray-700 px-2" />
                </div>

                <div className="mx-auto mt-20 space-y-4">
                    <button className="bg-[#6F90AF] p-2 px3 rounded-2xl">Register</button>
                </div>

                <div className="mx-auto mt-20">
                    <button className="bg-[#6F90AF] p-2 px3 rounded-2xl">Login</button>
                </div>
           </div>
        </div>
    );
}