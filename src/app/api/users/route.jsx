import { NextResponse } from "next/server";
import { setDoc, doc, getDoc, updateDoc} from 'firebase/firestore'
import { db } from "../../firebase";
import { GenerateHash } from "@/app/functions/GenerateHash";
import { auth } from "@/auth";


export async function POST(req,res){
    const { id, name, userName, email, newPassword }=await req.json();
    if (!id || !name || !email || !userName || !newPassword){
        return NextResponse.json({result:"required all fields"},{status:404})
    }
    else{
        //adding data to firestore
        try {
            const usersCollection=doc(db,'users',id);
            await setDoc(usersCollection,{id,name,userName,email,newPassword});
            return NextResponse.json({result:"Data Added Successfully"},{status:200});
        } catch (error) {
            return NextResponse.json({result:"error adding data"},{status:404})
        }
    }
}

// updating the user data

export async function PUT(req,res){
    const session=await auth();
    if(session?.user?.email==="admin@gmail.com"){
    let {id,name,email,userName,password}=await req.json();
    // console.log(id,name,email,password);
    const userDocRef=doc(db,'users',id);
    const userdata=await getDoc(userDocRef);
    if(!userdata.exists()){
        return NextResponse.json({result:"User Id Doesn't Exist! Create One"},{status:404});
    }
    const userDoc=doc(db,'users',id);
    let updatedData={}
    updatedData.id=id || userdata.data().id;
    updatedData.name=name || userdata.data().name;
    updatedData.email=email || userdata.data().email;
    updatedData.userName=userName || userdata.data().userName;
    let hashedPassword=await GenerateHash(password || userdata.data().newPassword);
    updatedData.newPassword=hashedPassword;
    try {
        await updateDoc(userDoc, updatedData);
        return NextResponse.json({ result: "user data updated successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({result:"failed to update users data"},{status:404});
    }
    }
    else{
        return NextResponse.json({result:"access unavailable"},{status:500});
    }
}