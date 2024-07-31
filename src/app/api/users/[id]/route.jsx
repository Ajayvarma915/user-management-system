import { usersData } from "@/app/utils/Data"
import { NextResponse } from "next/server";
export async function GET(_,res){
    const {id}=await res.params;
    console.log(id);
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