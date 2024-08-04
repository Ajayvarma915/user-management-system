import { Card, List, ListItem } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'

const AllUsers = () => {
    const [usersData,setUsersData]=useState([]);
    const fetchAllUsersData=async ()=>{
        try {
            const response = await fetch('api/users')
            const usersData = await response.json();
            setUsersData(usersData.data);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(()=>{
        fetchAllUsersData();
    },[])
  return (
      <div className='ml-96 h-screen bg-gray-400 p-4'>
        <h1>All Users Data</h1>
        {
            usersData?.map((eachUser)=>(
                <Card key={eachUser.id} className='m-4'>
                    <List>
                        <ListItem>{eachUser.name}</ListItem>
                    </List>
                </Card>
            ))
        }
    </div>
  )
}

export default AllUsers
