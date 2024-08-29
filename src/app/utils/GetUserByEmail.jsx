import {usersData} from "./Data";
const getUserByEmail =(email) => {
    const newUserData = usersData;
    // console.log(newUsersData);
    const found=newUserData.find((eachUser)=>eachUser.email===email);
    return found;
}

export default getUserByEmail