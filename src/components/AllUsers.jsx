import { List, ListItem } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
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
      <div className='h-full bg-[#7AB2B2] p-4 w-full'>
        <motion.h1 className='text-center text-3xl mt-4 md:text-2xl md:mt-5 2xl:mt-5 2xl:text-3xl'
            initial={{opacity:0,y:-50}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.3}}
        >All Users Data</motion.h1>
        <hr className='mt-6' />
        <div className='grid grid-cols-1 mt-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {
            usersData?.map((eachUser,i)=>(
                <motion.div key={eachUser.id} className='m-4 w-[20rem] bg-[#CDE8E5] rounded-lg md:w-[16.5rem]2xl:w-[18rem]'
                initial={{opacity:0,y:50}}
                animate={{opacity:1,y:0}}
                transition={{delay:((i/10)*0.5)}}
                >
                    <List className='md:text-sm 2xl:text-base'>
                        <ListItem><b>ID : </b><span className='ml-2'>{eachUser.id}</span></ListItem>
                        <ListItem><b>Name : </b><span className='ml-2'>{eachUser.name}</span></ListItem>
                        <ListItem><b>UserName : </b><span className='ml-2'>{eachUser.username}</span></ListItem>
                        <ListItem><b>Email :</b> <span className='ml-2'>{eachUser.email}</span></ListItem>
                    </List>
                </motion.div>
            ))
        }
        </div>
    </div>
  )
}

export default AllUsers
