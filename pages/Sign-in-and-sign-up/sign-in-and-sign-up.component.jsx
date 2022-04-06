import React from 'react'
import './sign-in-and-sign-up.style.scss'
import SignIn from '../../component/sign-in/sign-in.component'
import SignUp from '../../component/sign-up/sign-up.component'
const SignINAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)
export default SignINAndSignUp;