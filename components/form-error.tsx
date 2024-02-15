import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import React from 'react'

interface FormErrorProps {
    message?: string,
}

function FormError(props: FormErrorProps) {
    const {message} = props

    if(!message) return null;

    return (
        <div className="bg-destructive/15 p-3 gap-x-2 rounded-md flex items-center text-sm text-destructive">
            <ExclamationTriangleIcon className="h-4 w-4"/>
            <p>{message}</p>
        </div>

            
    )
}

export {FormError}

