import React from 'react'
import { CardWrapper } from './card-wrapper';

interface Props {}

function LoginForm(props: Props) {
    const {} = props

    return (
        <>
            <CardWrapper headerLabel='Welcome Back' backButtonLabel="Don't have an account" backButtonHref="/auth/register" showSocial>
                Ok wai
            </CardWrapper>
        </>
    );
}

export {LoginForm}


