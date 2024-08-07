'use client'
import Image from "next/image";
import { Sidebar } from '../components/AccordionUI';
import { useState } from "react";
import AllUsers from "@/components/AllUsers";
import SearchForSpecificUser from "@/components/SearchForSpecificUser";
import CreateNewUser from "@/components/createNewUser";
import UpdateUserDetails from "@/components/UpdateUserDetails";
import DeleteUser from "@/components/DeleteUser";
export default function Home() {

    const [activeComponent, setActiveComponent] = useState('');
    
  return (
    <div className="bg-gray-300 h-screen flex justify-start items-center">
        <div className="flex">
            <Sidebar setActiveComponent={setActiveComponent}/>
            {
                  activeComponent &&
                  (<div>
                      {activeComponent === 'AllUsers' && <AllUsers />}
                      {
                        activeComponent==='specificUserData' && <SearchForSpecificUser/>
                      }
                      {
                        activeComponent==='addNewUser' && <CreateNewUser/>
                      }
                      {
                          activeComponent ==='updateUserDetails' && <UpdateUserDetails/>
                      }
                      {
                          activeComponent ==='deleteUser' && <DeleteUser/>
                      }
                  </div>)
            }
        </div>
    </div>
  );
}
