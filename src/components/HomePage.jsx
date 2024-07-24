import React from 'react';
import DashboardElement from "./elements/DashboardElement";

export default function HomePage() {
    const data = [
        {
            name: "ABC",
            division: "HR",
            salary: "Rp 5000",
        },
        {
            name: "WO",
            division: "HR",
            salary: "Rp 5000",
        },
        {
            name: "KON",
            division: "HR",
            salary: "Rp 5000",
        }
    ];

    return(
        <div className="bg-[#CED1DA] flex">
            
           <DashboardElement />


           <div className="bg-[#789DC5] w-[990px] h-screen m-auto rounded-2xl flex">
            <ol className="mx-20 my-8 overflow-auto w-full">
                {
                    data.map((employee, index) => (
                        <li key={index} className="text-white text-[20px] p-3 flex flex-col bg-[#737CCF] m-2 rounded-2xl">
                            <p>{employee.name}</p>
                            <p>{employee.division}</p>
                            <p>{employee.salary}</p>
                        </li>
                    ))
                }
                <li></li>
            </ol>
           </div>
        </div>
    );

    
}