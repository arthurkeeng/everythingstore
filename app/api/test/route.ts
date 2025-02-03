

import { dbConnect } from "@/lib/dbConnection";

export async function GET(){
    await dbConnect();
    return Response.json({
        "msg":  "connected successfully"
    } , {status : 200});
}