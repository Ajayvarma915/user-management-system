import { NextResponse } from "next/server";
import {doc,getDoc,deleteDoc} from 'firebase/firestore'
import { db } from "@/app/firebase";

//search for a specific user
export async function GET(_,res){
    const {id}=await res.params;
    //getting specific user from firestore
    console.log(id);
    
    try {
        const docRef=doc(db,'users',id);
        const docSnap=await getDoc(docRef);
        // console.log(docSnap.data());
        
        if(docSnap.exists()){
            return NextResponse.json({user:docSnap.data()},{status:200});
        }
        console.log("No such document exists");
        return NextResponse.json({result:"user not found"},{status:404});
    } catch (error) {
        return NextResponse.json({result:"failed to fetch user"},{status:404})
    }
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
    // console.log(id);
    try {
        const userDoc = doc(db, 'users', id);
        await deleteDoc(userDoc);
        return NextResponse.json({ result:"user data deleted successfully"},{status:200});
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({result:"user not found"},{status:404});
    }
}