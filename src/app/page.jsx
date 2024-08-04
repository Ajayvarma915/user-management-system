'use client'
import Image from "next/image";
import { Sidebar } from '../components/AccordionUI';
import { useState } from "react";
import AllUsers from "@/components/AllUsers";
import SearchForSpecificUser from "@/components/SearchForSpecificUser";
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
                  </div>)
            }
        </div>
    </div>
  );
}
