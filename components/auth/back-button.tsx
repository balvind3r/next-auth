"use client";

import React from 'react'
import { Button } from '../ui/button'; 
import Link from 'next/link';

interface Props {
    label: string,
    href: string,
}

function BackButton(props: Props) {
    const {label, href} = props

    return (
        <Button
            variant="link"
            className='font-normal w-full'
            size="sm"
            asChild
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}

export default BackButton
