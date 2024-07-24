import DashboardElement from "./elements/DashboardElement"
import employeeIcon from "../assets/info.svg"
import React, { useState } from 'react';

export default function MyInfoPage() {
    const [name, setName] = useState("");

    return(
        <div className="bg-[#CEC1DA] h-screen w-screen-flex flex">
            <DashboardElement />

            <div className="bg-[#2B2E63] w-[449px] h-[564px] m-auto rounded-2xl text-white">
                <img src={employeeIcon} className="h-[168px] w-[168px] mx-auto" style={{ marginTop: '40px' }} />
                <div className="mt-10">
                    <p className="text-[30px] text-center">My</p>
                    <p className="text-[30px] text-center">Info</p>
                </div>


                {/* dibawah ini gpt hehe */}
                <div className="text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-[248px] flex flex-col items-start">
                            <p className="text-[20px] my-[7px]">Name</p>
                            <input value={name} onChange={(e) => setName(e.target.value)} className="bg-[#BFCBCE] w-[248px] h-[41px] text-gray-700 px-2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}