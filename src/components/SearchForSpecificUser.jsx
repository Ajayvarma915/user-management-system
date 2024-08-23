import { Card, Input, List, ListItem } from '@material-tailwind/react';
import React, {  useState } from 'react'
import {motion} from 'framer-motion'
const SearchForSpecificUser = () => {
    const [id,setId]=useState('');
    const [specificUserData, setSpecificUsersData] = useState([]);
    const fetchSpecificUserData = async () => {
        try {
            const response = await fetch(`/api/users/${id}`)
            console.log(response);
            if(response.status===200){
                const data=await response.json();
                setSpecificUsersData(data.user);
            }
            else{
                console.error("Invalid ID found");
                setSpecificUsersData(null);
            }
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
      <div className='h-full w-full flex flex-col items-center'>
        <motion.h1 className='text-center md:ml-[0rem] text-3xl mt-8 '
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        >Search For A Specific User</motion.h1>
        <hr className='mt-6 w-full'/>
          <div className='md:ml-[0rem] mt-10 h-fit'>
            <motion.div className='flex gap-4 w-fit bg-[#CDE8E5] p-4'
        initial={{opacity:0,x:-50}}
        animate={{opacity:1,x:0}}
        transition={{delay:0.3}}
        >
            <Input className='h-10 rounded-lg px-3' type="text" label='enter user id' value={id} onChange={(e)=>setId(e.target.value)}/>
            <button className='h-10 w-fit rounded-lg p-2 bg-blue-700' onClick={()=>fetchSpecificUserData()}>Fetch</button>
          </motion.div>
          {
            specificUserData?(
                  specificUserData.map(({ id, name, username, email, password } )=>(
                
                <motion.div key={id} className='mt-10 ml-[0rem] bg-[#CDE8E5] w-[20rem] '
                initial={{opacity:0,y:50}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.3}}
                >
                    <List>
                        <ListItem>ID: {id}</ListItem>
                        <ListItem>Name: {name}</ListItem>
                        <ListItem>UserName: {username}</ListItem>
                        <ListItem>Email: {email}</ListItem>
                        <ListItem>Password: {password}</ListItem>
                    </List>
                </motion.div>
            )))
            :
            <h1 className='mt-8 text-2xl'>No user found with that ID.</h1>
          }
      </div>
      </div>
  )
}

export default SearchForSpecificUser
