import { Input, List, ListItem } from '@material-tailwind/react';
import React, {  useState } from 'react'
import {motion} from 'framer-motion'
const SearchForSpecificUser = () => {
    const [id,setId]=useState('');
    const [specificUserData, setSpecificUsersData] = useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);

    const fetchSpecificUserData = async () => {
        try {
            const response = await fetch(`/api/users/${id}`)
            if(response.status===200){
                setLoading(true);
                setError(false);
                const data=await response.json();
                setSpecificUsersData(data.user);
            }
            else{
                console.log("Invalid ID found");
                setSpecificUsersData([]);
                setLoading(false);
                setError(true);
            }
        } catch (error) {
            console.log("failed to fetch");
            setLoading(false);
            setError(true);
            setSpecificUsersData([]);
            console.log(error.message);
        }
    }
    const handleChange=(e)=>{
        setId(e.target.value);
        setSpecificUsersData([]);
        setLoading(false);
    }
    console.log("user data",specificUserData);
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
                  <Input className='h-10 rounded-lg px-3' type="text" label='enter user id' value={id} onChange={(e) => handleChange(e)}/>
            <button className='h-10 w-fit rounded-lg p-2 bg-blue-700' onClick={()=>fetchSpecificUserData()}>Fetch</button>
          </motion.div>
          {
            specificUserData && loading?(
                <motion.div key={id} className='mt-10 ml-[0rem] bg-[#CDE8E5] w-[20rem] rounded-sm'
                initial={{opacity:0,y:50}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.3}}
                >
                    <List>
                        <ListItem>ID : {specificUserData.id}</ListItem>
                        <ListItem>Name : {specificUserData.name}</ListItem>
                        <ListItem>UserName : {specificUserData.userName}</ListItem>
                        <ListItem>Email : {specificUserData.email}</ListItem>
                    </List>
                </motion.div>
            )
            :
            (
            id && error && <h1 className='mt-8 text-2xl'>No user found with that ID.</h1>
            )
          }
      </div>
      </div>
  )
}

export default SearchForSpecificUser
