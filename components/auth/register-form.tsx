"use client"

import * as z from "zod";
import React from 'react';
import { CardWrapper } from '@/components/auth/card-wrapper';
import{ useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas"; 

import{
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "../ui/input";
import { Button } from "../ui/button"; 
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { register } from "@/actions/register"; 
import { useState, useTransition } from "react"; 

// interface Props {}

function RegisterForm() {
    // const {} = props

    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "abc@gmail.com",
            password: "password",
            name: "abc",
        },
    });

    // This wil forward the 
    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        
        // console.log(values);
        // Can use axios here...
        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                });
        })
    }

    return (
        <div>
            <CardWrapper 
                headerLabel="Create an account" 
                backButtonLabel="Already have an account" 
                backButtonHref="/auth/login" 
                showSocial = {true}>
                <Form {...form}>
                    <form 
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <FormField
                                control={form.control}   
                                name="name" 
                                render = {({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                // Disables input while isPending
                                                placeholder="john.doe"
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}   
                                name="email" 
                                render = {({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                // Disables input while isPending
                                                placeholder="john.doe@example.com"
                                                type="email"
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}   
                                name="password" 
                                render = {({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                // Disables input while isPending
                                                placeholder="********"
                                                type="password"
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormError message= {error}/>
                        <FormSuccess message={success}/>
                        <Button disabled={isPending} // Disables input while isPending
                                type="submit" 
                                className="w-full" 
                                variant="default">
                            Register
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    );
}

export {RegisterForm}