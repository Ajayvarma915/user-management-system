import { Button, Input } from '@material-tailwind/react';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {motion} from 'framer-motion'

const DeleteUser = () => {
    const [id,setId]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!id){
            toast.error('Enter The User Id');
            return;
        }
        const response=await fetch(`/api/users/${id}`,{
            method:'DELETE',
        })
        if(response.status===200){
            toast('User Deleted Succesfully');
            setId('');
            return;
        }
        return toast.error('User Id Not Found.')
    }
  return (
    <div className='h-full w-full'>
        <motion.h1 className='text-center -ml-[12rem] text-3xl mt-8'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >Delete User</motion.h1>
        <hr className='mt-6' />
          <motion.div className='bg-[#CDE8E5] h-fit w-80 mx-[35rem] mt-10 p-4 flex flex-col items-center'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
      <Input type="text" label='enter user id' value={id} onChange={(e)=>setId(e.target.value)}/>
      <Button onClick={handleSubmit} className='mt-4'>Submit</Button>
      <ToastContainer/>
    </motion.div>
    </div>
  )
}

export default DeleteUser
