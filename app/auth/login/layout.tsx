// const Auth = ({children} : React.ReactNode) => {
//     return(
//         <>

//         </>
//     );
// }

// export default Auth;


import React from 'react'

interface Props {
    children: React.ReactNode;
}

function Auth(props: Props) {
    const {children} = props

    return (
        <>
            <div className="h-full flex justify-center items-center
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
                {children}
            </div>
        </>
    );
}

export default Auth;
