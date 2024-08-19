'use client'
import React, { useState } from 'react'
import { doCredentialsLogin } from '@/app/actions/actions'
import { useRouter } from 'next/navigation'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const Login = () => {
    const [isError, setIsError] = useState("");
    const router = useRouter();
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setIsError("");
            const formData = new FormData(event.currentTarget);
            console.log(formData);

            const response=await doCredentialsLogin(formData);

            if (!!response.error) {
                toast.error(response.error.message);
            }
            else {
                setIsError("");
                router.push('/home')
            }
        }
        catch (error) {
            toast.error("Check your credentials");
        }
    }
    return (
        <>
        <div className='text-red-600 flex justify-center mt-6'>
            <ToastContainer/>
        </div>
        <div className='h-96 bg-transparent border-2 custom-color backdrop-blur-2xl w-[80%] p-2 px-3 md:w-[31rem] mt-[-2rem]'>
            <form onSubmit={handleFormSubmit} className='mt-4'>
                <h1 className='text-center text-4xl text-white'>Login</h1>
                <div className='flex justify-center mt-8 h-12 relative'>
                    <input type="email" name='email' id='email' placeholder='email' className='w-full outline-none border text-white text-lg p-4 rounded-full  bg-transparent'/>
                    <PersonIcon className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white'/>
                </div>
                <div className='flex justify-center mt-8 h-12 relative'>
                    <input type="password" name='password' id='password' placeholder='password' className='w-full outline-none border text-white text-lg p-4 rounded-full  bg-transparent'/>
                    <LockIcon className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white'/>
                </div>
                <button className='bg-white mt-8 w-full rounded-full h-10 text-xl' type='submit'>Login</button>
                <div className='flex justify-between mt-8 px-4 text-center text-white'>
                    <p>Don't have an account? </p>
                    <Link className='underline' href={'/register'}>Register</Link>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login
