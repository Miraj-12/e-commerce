import React from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-up.style.scss'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase-utils/firebase-utlis'



class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, password, confirmPassword, email } = this.state
        if (password != confirmPassword) {
            alert('password do not match')
            return;
        } else if (password.length < 6) {
            alert('Must must be 6 Character Long')
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        } catch (error) {
            console.log(error)
        }
    }
    handleChangge = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        const { displayName, password, confirmPassword, email } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>SignUp with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChangge}
                        label='Display Name'
                        required />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChangge}
                        label='Email'
                        required />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChangge}
                        label='password'
                        required />

                    <FormInput
                        type='confirmPassword'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChangge}
                        label='confirm Password'
                        required />
                    <CustomButton type='submit'>Sign Up</CustomButton>





                </form>
            </div>
        )
    }
}
export default SignUp;