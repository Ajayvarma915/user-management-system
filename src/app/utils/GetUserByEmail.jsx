import {collection, getDocs, query,where} from 'firebase/firestore'
import { db } from "../firebase";

const getUserByEmail =async (email) => {

    //getting data from firestore
    console.log(email);
    
    try {
        const usersCollection=collection(db,'users');
        // console.log("user Collections",usersCollection);
        const q=query(usersCollection,where('email','==',email));
        // console.log("q data: ",q);
        
        const querySnapshot=await getDocs(q);
        if(querySnapshot.empty){
            return null;
        }
        const userDoc=querySnapshot.docs[0];
        // console.log("userDoc Data: ",userDoc);
        
        return userDoc.data();
    } catch (error) {
        console.log(error.message);
        
        console.log("error fetching email data");
    }
}

export default getUserByEmail