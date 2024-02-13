"use client";
// For Client side rendering

import { useRouter } from "next/navigation"; 

interface LoginButtonProps{
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean;
};

export const LoginButton = ({
    children,
    mode= "redirect",
    asChild
}: LoginButtonProps) => {

    const router = useRouter();

    const onClick = () => {
        // console.log("LOGIN BUTTON CLICKED");
        router.push('/auth/login');
    }

    if(mode === 'modal'){
        return(
            <span>
                ToDo: Implement modal functionality
            </span>
        )
    }

    return(
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
};