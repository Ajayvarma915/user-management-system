import { Button, Input } from '@material-tailwind/react';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <div className='bg-gray-200 h-fit w-80 ml-[35rem] mt-12 p-4 flex flex-col items-center'>
      <Input type="text" label='enter user id' value={id} onChange={(e)=>setId(e.target.value)}/>
      <Button onClick={handleSubmit} className='mt-4'>Submit</Button>
      <ToastContainer/>
    </div>
  )
}

export default DeleteUser
