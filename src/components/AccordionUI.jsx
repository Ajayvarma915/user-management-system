'use client'
import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";

export function Sidebar({setActiveComponent}) {
        return (
        <>
        <Card className="h-full w-full p-4 shadow-xl shadow-blue-gray-900/5 bg-blue-800 md:w-[14rem] xl:w-[15rem] 2xl:w-[20rem]">
            <div className="mb-2 p-4 text-white">
                <Typography variant="h5" className="md:text-lg 2xl:text-2xl">
                    DashBoard
                </Typography>
            </div>
            <List className="md:ml-[-1rem] md:text-sm 2xl:text-lg 2xl:ml-[0rem]">
                <hr className="border-blue-gray-50 md:w-[13rem] 2xl:w-[18rem]" />
                <ListItem  className="text-white hover:bg-[#D1E9F6] md:hover:w-[13rem] xl:hover:w-full xl:w-full" onClick={()=>setActiveComponent('AllUsers')}>
                    <ListItemPrefix>
                        <PersonIcon />
                    </ListItemPrefix>
                    All Users
                </ListItem>
                <ListItem className="text-white hover:bg-blue-700 md:hover:w-[13rem] xl:hover:w-full xl:w-full" onClick={()=>setActiveComponent('specificUserData')}>
                    <ListItemPrefix>
                        <SearchIcon/>
                    </ListItemPrefix>
                    Search For Specific User
                </ListItem>
                <ListItem className="text-white hover:bg-blue-700 md:w-[13rem] xl:hover:w-full xl:w-full" onClick={()=>setActiveComponent('CreateNewUser')}>
                    <ListItemPrefix className="ml-[3px]">
                        <GroupAddIcon/>
                    </ListItemPrefix>
                    Create New User
                </ListItem>
                <ListItem className="text-white hover:bg-blue-700 md:w-[13rem] xl:hover:w-full xl:w-full" onClick={()=>setActiveComponent('updateUserDetails')}>
                    <ListItemPrefix>
                        <UpdateIcon/>
                    </ListItemPrefix>
                    Update User Details
                </ListItem>
                <ListItem className="text-white hover:bg-blue-700 md:w-[13rem] xl:hover:w-full xl:w-full" onClick={()=>setActiveComponent('deleteUser')}>
                    <ListItemPrefix>
                        <DeleteIcon/>
                    </ListItemPrefix>
                    Delete User
                </ListItem>
            </List>
        </Card>
        </>
    );
}