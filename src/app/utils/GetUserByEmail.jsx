import { usersData } from "./Data";
const getUserByEmail =(email) => {
    const newUsersData =usersData;
    const found=newUsersData.find((eachUser)=>eachUser.email===email);
    return found;
}

export default getUserByEmail