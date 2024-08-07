import { Button, Card, Input, List, ListItem } from '@material-tailwind/react';
import React, {  useState } from 'react'

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
      <div className='bg-gray-300 h-96 ml-[35rem]  mt-8'>
          <div className='flex gap-4'>
            <Input className='h-10 rounded-lg px-3' type="text" label='enter user id' value={id} onChange={(e)=>setId(e.target.value)}/>
            <Button className='h-10 py-0 bg-blue-700' onClick={()=>fetchSpecificUserData()}>Fetch User</Button>
          </div>
          {
            specificUserData?(
                  specificUserData.map(({ id, name, username, email, password } )=>(
                
                <Card key={id} className='mt-8'>
                    <List>
                        <ListItem>ID: {id}</ListItem>
                        <ListItem>Name: {name}</ListItem>
                        <ListItem>UserName: {username}</ListItem>
                        <ListItem>Email: {email}</ListItem>
                        <ListItem>Password: {password}</ListItem>
                    </List>
                </Card>
            )))
            :
            <h1 className='mt-8 text-2xl'>No user found with that ID.</h1>
          }
      </div>
  )
}

export default SearchForSpecificUser
