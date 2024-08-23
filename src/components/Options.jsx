'use client'
import React, { useState } from 'react'
import { Sidebar } from "./AccordionUI";
import AllUsers from "./AllUsers";
import SearchForSpecificUser from "./SearchForSpecificUser";
import UpdateUserDetails from "./UpdateUserDetails";
import DeleteUser from "./DeleteUser";
import CreateNewUser from './AddNewUser';
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
                        activeComponent === 'CreateNewUser' && <CreateNewUser/>
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
