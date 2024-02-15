import { CheckCircledIcon } from "@radix-ui/react-icons";

import React from 'react'

interface FormSuccessProps {
    message?: string,
}

function FormSuccess(props: FormSuccessProps) {
    const {message} = props

    if(!message) return null;

    return (
        <div className="bg-emerald-500/15 p-3 gap-x-2 rounded-md flex items-center text-sm text-emerald-500">
            <CheckCircledIcon className="h-4 w-4"/>
            <p>{message}</p>
        </div>

            
    )
}

export {FormSuccess}

