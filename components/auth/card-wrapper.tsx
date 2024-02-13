"use client";

import React from 'react'
import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '../ui/card';
import { Header } from './header';

interface CardWrapperProps{
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

function CardWrapper(props: CardWrapperProps) {
    const {children, headerLabel, backButtonLabel, backButtonHref, showSocial} = props;

    return (
        <>
            <Card className='w-[400px] shadow-md'>
                <CardHeader>
                    <Header label={headerLabel}/>
                </CardHeader>
                {children}
            </Card>
        </>
    )
}

export {CardWrapper}
