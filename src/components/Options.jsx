'use client'
import React, { useState } from 'react'
import { Sidebar } from "@/components/AccordionUI";
import AllUsers from "@/components/AllUsers";
import SearchForSpecificUser from "@/components/SearchForSpecificUser";
import CreateNewUser from "@/components/createNewUser";
import UpdateUserDetails from "@/components/UpdateUserDetails";
import DeleteUser from "@/components/DeleteUser";
const Options = () => {
    const [activeComponent,setActiveComponent]=useState('AllUsers');
  return (
      <div className="bg-[#7AB2B2] h-screen flex justify-start  items-center">
        <div className="w-fit">
            <Sidebar setActiveComponent={setActiveComponent} />
        </div>
        {
              activeComponent && <div className='w-screen flex justify-center items-center h-screen'>
                  {activeComponent === 'AllUsers' && <AllUsers />}
                  {
                      activeComponent === 'specificUserData' && <SearchForSpecificUser />
                  }
                  {
                      activeComponent === 'addNewUser' && <CreateNewUser />
                  }
                  {
                      activeComponent === 'updateUserDetails' && <UpdateUserDetails />
                  }
                  {
                      activeComponent === 'deleteUser' && <DeleteUser />
                  }
              </div>
        }
      </div>
  )
}

export default Options
