import React from 'react'
import { CardWrapper } from '@/components/auth/card-wrapper';

// interface Props {}

function LoginForm() {
    // const {} = props

    return (
        <div>
            <CardWrapper headerLabel='Welcome Back' backButtonLabel="Don't have an account" 
            backButtonHref="/auth/register" showSocial = {true}>
                auth/login-forms.tsx
            </CardWrapper>
        </div>
    );
}

export {LoginForm}