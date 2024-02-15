"use server"
import * as z from "zod";
import { RegisterSchema } from "@/schemas"; 


export const register = async (values: z.infer<typeof RegisterSchema>) => {
    // console.log(values);

    // Have validations
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success){
        return{error: "Invalid Fields!"};

        // // If this were an API route:
        // return Response.json()....
    }

    return { success: "Email sent!"};
};

