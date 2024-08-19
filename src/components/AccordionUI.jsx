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
        <Card className="h-screen w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-blue-800 ">
            <div className="mb-2 p-4 text-white">
                <Typography variant="h5">
                    DashBoard
                </Typography>
            </div>
            <List>
                <hr className="border-blue-gray-50" />
                <ListItem  className="text-white hover:bg-[#D1E9F6]" onClick={()=>setActiveComponent('AllUsers')}>
                    <ListItemPrefix>
                        <PersonIcon />
                    </ListItemPrefix>
                    All Users
                </ListItem>
                <ListItem className="text-white hover:bg-blue-700" onClick={()=>setActiveComponent('specificUserData')}>
                    <ListItemPrefix>
                        <SearchIcon/>
                    </ListItemPrefix>
                    Search For Specific User
                </ListItem>
                <ListItem className="text-white hover:bg-blue-700" onClick={()=>setActiveComponent('addNewUser')}>
                    <ListItemPrefix className="ml-[3px]">
                        <GroupAddIcon/>
                    </ListItemPrefix>
                    Create New User
                </ListItem>
                <ListItem className="text-white hover:bg-blue-700" onClick={()=>setActiveComponent('updateUserDetails')}>
                    <ListItemPrefix>
                        <UpdateIcon/>
                    </ListItemPrefix>
                    Update User Details
                </ListItem>
                <ListItem className="text-white hover:bg-blue-700" onClick={()=>setActiveComponent('deleteUser')}>
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