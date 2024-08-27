import { hash } from 'bcryptjs'
import { usersData } from '../utils/Data';

async function hashPasswords() {
    const saltRounds = 5;
    for (let user of usersData) {
        user.password = await hash(user.password, saltRounds);
    }
    const updatedUsersData = usersData;
    const updatedData = JSON.stringify(updatedUsersData, null, 2);
    fs.writeFileSync("./src/app/utils/Data.jsx", `export const usersData=${updatedData}`, "utf-8");
    return NextResponse.json({ result: "Data added successfully" }, { status: 200 });
}

(async()=>{
    hashPasswords();
})();