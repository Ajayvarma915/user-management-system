'use client'
import React, { useState } from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

export function Sidebar({setActiveComponent}) {
        return (
        <>
        <Card className="h-screen w-full max-w-[21rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    DashBoard
                </Typography>
            </div>
            <List>
                <hr className="border-blue-gray-50" />
                <ListItem onClick={()=>setActiveComponent('AllUsers')}>
                    <ListItemPrefix>
                        <PersonIcon />
                    </ListItemPrefix>
                    All Users
                </ListItem>
                <ListItem onClick={()=>setActiveComponent('specificUserData')}>
                    <ListItemPrefix>
                        <SearchIcon/>
                    </ListItemPrefix>
                    Search For Specific User
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon/>
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon/>
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
        </>
    );
}