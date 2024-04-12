import react from 'react'
import { FormLogin } from './components'
import "./styles/index.css"

export const Login = () => {
    return (
        <div className='login-section'>
            <div className='login-section__title'>Login</div>
            <div className='login-section__description'>Hi, Welcome back</div>
            <div className='login-section__br'>Login with Email</div>
            <FormLogin />
        </div>
    )
}