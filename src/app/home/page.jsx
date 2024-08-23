import { auth } from "@/auth";
import Options from "../../components/Options";
import { redirect } from "next/navigation";
export default async function Home() {

    const session=await auth();
    
    if(!session?.user) redirect('/');
    
    return (
        <div className="h-screen w-screen overflow-hidden">
            <Options/>
        </div>
    );
}
