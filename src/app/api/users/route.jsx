import { usersData } from "@/app/utils/Data"
import { NextResponse } from "next/server";
import fs from 'fs'
import { log } from "console";

// getting all the users data
export function GET(){
    const data=usersData;
    return NextResponse.json({data},{status:200});
}

//Creating the new user

export async function POST(req,res){
    const {id,name,email,password}=await req.json();
    if(!id, !name || !email || !password){
        return NextResponse.json({result:"required all fields"},{status:404})
    }
    else{
        usersData.push({id,name,email,password});
        
        const updatedUsersData=usersData;
        const updatedData=JSON.stringify(updatedUsersData,null,2);
        fs.writeFileSync("./src/app/utils/Data.jsx",`export const usersData=${updatedData}`,"utf-8");
        return NextResponse.json({result:"Data added successfully"},{status:200});
    }
}

// updating the user data

export async function PUT(req,res){
    let {id,name,email,password}=await req.json();
    console.log(id,name,email,password);
    const userData=usersData.findIndex((user)=>user.id===id);
    console.log(userData);
    if(userData===-1){
        return NextResponse.json({result:"enter a valid user id"},{status:404})
    }
    if(name){
        usersData[userData].name=name;
    }
    if(email){
        usersData[userData].email = email;
    }
    if(password){
        usersData[userData].password = password;
    }
    const updatedUsersData = usersData;
    const updatedData = JSON.stringify(updatedUsersData, null, 2);
    fs.writeFileSync("./src/app/utils/Data.jsx", `export const usersData=${updatedData}`, "utf-8");
    return NextResponse.json({ result: "UserData updated successfully" }, { status: 200 });
}