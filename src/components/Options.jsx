'use client'
import React, { useState } from 'react'
import { Sidebar } from "@/components/AccordionUI";
import AllUsers from "@/components/AllUsers";
import SearchForSpecificUser from "@/components/SearchForSpecificUser";
import CreateNewUser from "@/components/CreateNewUser";
import UpdateUserDetails from "@/components/UpdateUserDetails";
import DeleteUser from "@/components/DeleteUser";
const Options = () => {
    const [activeComponent, setActiveComponent] = useState('AllUsers');

    return (
        <div className="bg-[#7AB2B2] h-full flex flex-col  md:flex-row md:justify-start md:items-center overflow-y-scroll">
            <div className="w-full sm:w-full md:w-fit h-full">
                <Sidebar setActiveComponent={setActiveComponent} />
            </div>
            {
                activeComponent && <div className='w-full flex justify-center items-center h-full'>
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
