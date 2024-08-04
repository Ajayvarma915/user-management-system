import { usersData } from "@/app/utils/Data"
import { NextResponse } from "next/server";
import fs from 'fs'

//search for a specific user
export async function GET(_,res){
    const {id}=await res.params;
    const user=usersData.filter((user)=>id===user.id);
    if(user.length===0){
        return NextResponse.json({id},{status:404});
    }
    return NextResponse.json({user},{status:200});
}

// login
export async function POST(req, res) {
    const { name, email, password } = await req.json();
    const { id } = res.params;
    const { name: newName, email: newEmail, password: newPassword } = usersData.find((user) => id === user.id);

    if (newName === name && newEmail === email && newPassword === password) {
        return NextResponse.json({ result: "successfully logged in." });
    }
    else if (!name || !email || !password) {
        return NextResponse.json({ result: "please fill all the input fields" });
    }
    return NextResponse.json({ result: "Invalid user credentials" });
}

//deleting a specific user

export async function DELETE(req,res){
    const {id}=res.params;
    const userIdx=usersData.findIndex((user)=>user.id===id);
    if(userIdx==-1){
        return NextResponse.json({result:"user data not found"},{status:404});
    }
    usersData.splice(userIdx,1);
    const updatedUsersData = usersData;
    const updatedData = JSON.stringify(updatedUsersData, null, 200);
    fs.writeFileSync("./src/app/utils/Data.jsx", `export const usersData=${updatedData}`, "utf-8");
    return NextResponse.json({ result: "UserData updated successfully" }, { status: 200 });
}