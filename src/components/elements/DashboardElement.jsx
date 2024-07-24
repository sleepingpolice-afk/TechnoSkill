import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeIcon from "../../assets/home.svg";
import employeeIcon from "../../assets/employee.svg";
import loginIcon from "../../assets/login.svg";
import logoutIcon from "../../assets/register.svg";
import myinfo from "../../assets/myinfo.svg";

export default function DashboardElement() {
   const navigate = useNavigate();

    return(
        
        <div className="bg-[#2B2E63] h-screen w-[390px] flex flex-col" font-custom>

            <div className=" text-white text-[30px] mx-auto" style={{marginTop:'25px'}}>
                <p>Dashboard</p>
            </div>
            <div className="bg-[#BFCBCE] w-[343px] h-[5px] m-[20px]" style={{marginTop:'10px'}}></div>
            <div className="flex ml-5" onClick={() => navigate("/home")} style={{cursor:'pointer'}}>
                <img src={homeIcon} />
                <p className="my-auto text-white ml-5 text-[20px]">
                    Home
                </p>
            </div>

            <div className="flex ml-5 mt-5" onClick={() => navigate("/add-employee")} style={{cursor:'pointer'}}>
                <img src={ employeeIcon } />
                <p className="my-auto text-white ml-5 text-[20px]">
                    Add Employee
                </p>
            </div>

            <div className="flex ml-5 mt-5" onClick={() => navigate("/my-info")} style={{cursor:'pointer'}}>
                <img src={ myinfo }  />
                <p className="my-auto text-white ml-5 text-[20px]">
                    My Info
                </p>
            </div>


            <div className="mt-auto">
                <table>
                    <tr>
                        <td><img src={ loginIcon }  className="pl-6 pb-3" onClick={() => navigate("/login")} style={{cursor:'pointer'}} /></td>
                        <td><img src={ logoutIcon }  className="pl-44 pr-0" onClick={() => navigate("/login")} style={{cursor:'pointer'}} /></td>
                        </tr> {/* change /login later for logout */}
                </table>
            </div>
        
        </div>
    )
} 