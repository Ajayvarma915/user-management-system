'use client' 
import { Button, Input } from '@material-tailwind/react';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateNewUser = () => {
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=async (e)=>{
        e.preventDefault();

        if(!id || !name || !email || !userName || !password){
            toast.error('Enter All The Fields');
            return;
        }
        const response1=await fetch(`/api/users/${id}`);
        if(response1.status===200){
            toast('User Id already exists.Update UserDetails In Update Section');
            return;
        }

        const response=await fetch('/api/users',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id,name,userName,email,password})
        })
        if(response.status===200){
            toast('User Created Successfully');
            setId('');
            setEmail('');
            setUserName('');
            setPassword('');
            setName('');
        }
    }

  return (
      <div className='bg-gray-200 h-fit w-80 ml-[35rem] mt-12 p-4'>
        <form onSubmit={handleSubmit} className='flex flex-col
        items-center gap-3'>
            <Input label="enter user id" type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
            <Input type="text" label="enter the name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <Input type="text" label="enter username" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <Input type="email" label="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <Input type="password" label="enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <Button className='mt-2 bg-blue-600 w-fit p-2' type='submit'>Submit</Button>
            <ToastContainer/>
        </form>
    </div>
  )
}

export default CreateNewUser
