"use client"

import * as z from "zod";
import React from 'react';
import { CardWrapper } from '@/components/auth/card-wrapper';
import{ useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas"; 

import{
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "../ui/input";
import { Button } from "../ui/button"; 
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "@/actions/login";
import { useTransition } from "react"; 

// interface Props {}

function LoginForm() {
    // const {} = props

    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "abc@gmail.com",
            password: "password",
        },
    });

    // This wil forward the 
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        // console.log(values);
        // Can use axios here...
        startTransition(() => {
            login(values);
        })
    }

    return (
        <div>
            <CardWrapper headerLabel='Welcome Back' backButtonLabel="Don't have an account" 
            backButtonHref="/auth/register" showSocial = {true}>
                <Form {...form}>
                    <form 
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
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
                        <FormError message=""/>
                        <FormSuccess message=""/>
                        <Button disabled={isPending} // Disables input while isPending
                                type="submit" 
                                className="w-full" 
                                variant="default">
                            Login
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    );
}

export {LoginForm}