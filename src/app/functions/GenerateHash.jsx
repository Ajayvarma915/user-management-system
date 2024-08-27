import {hash} from 'bcryptjs'

export async function GenerateHash(password) {
    let Hashpassword=await hash(password,5);
    
    return Hashpassword;
}