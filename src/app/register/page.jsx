'use client'
import { Button, Input } from '@material-tailwind/react';
import Link from 'next/link';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GenerateHash } from '../functions/GenerateHash';

const Register = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!id || !name || !email || !userName || !password) {
            toast.error('Enter All The Fields');
            return;
        }
        const response1 = await fetch(`/api/users/${id}`);
        if (response1.status === 200) {
            toast.error('User Id already exists.Go To Login Page');
            return;
        }
            const newPassword=await GenerateHash(password);
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, name, userName, email, newPassword })
            })
            if (response.status === 200) {
                toast('User Created Successfully');
                setId('');
                setEmail('');
                setUserName('');
                setPassword('');
                setName('');
            }
    }

    return (
        <div className="h-screen flex items-center justify-center bg-[url('/images/background_image.jpg')] bg-no-repeat bg-cover bg-center">
            <div className='bg-transparent backdrop-blur-lg border-[rgba(255,255,255,.2)] border-2 w-[80%] md:w-[30rem] p-4 mt-[-2rem]'>
                <form onSubmit={handleSubmit} className='flex flex-col
            items-center gap-3'>
                    <Input color='white' label="enter user id" type="text" value={id} onChange={(e) => setId(e.target.value)} />
                    <Input color='white' type="text" label="enter the name" value={name} onChange={(e) => setName(e.target.value)} />
                    <Input color='white' type="text" label="enter username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <Input color='white' type="email" label="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input color='white' type="password" label="enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button className='mt-2 bg-white text-black w-full rounded-full p-2' type='submit'>Submit</Button>
                </form>
                <Link href={'/'} className='bg-white mt-4 rounded-full w-full p-1 block text-center'>Back To Login Page</Link>
            </div>
                <ToastContainer />
        </div>
    )
}

export default Register
