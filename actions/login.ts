"use server"
import * as z from "zod";
import { LoginSchema } from "@/schemas"; 

export const login = async (values: z.infer<typeof LoginSchema>) => {
    // console.log(values);

    // Have validations
    const validatedFields = LoginSchema.safeParse(values);

    if(!validatedFields.success){
        return{error: "Invalid Fields!"};

        // // If this were an API route:
        // return Response.json()....
    }

    return { success: "Email sent!"};
};

