import { useState } from 'react';
import { motion } from 'framer-motion'

export default function Login() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = () => {
        setFormData((prevFormData:any) => ({
            ...prevFormData,
            [event.target.name]:event.target.value
        }))
    }

    const handleSubmit = () => {
        return null;
    }

    return (
    <div className="loginBox">
        <form className="login"
            onSubmit={handleSubmit}>
            <label>e-class username</label>
            <input className="credsBox"
                type="text"
                placeholder='sdi...'
                name='username'
                onChange={handleChange}
                />
            <label>e-class password</label>
            <input className="credsBox"
                type="password"
                placeholder='Password'
                name='password'
                onChange={handleChange}
                /><br></br>
            <motion.button 
            type='button'
            className="loginButton"
            whileHover={{
                scale: 1.01,
                boxShadow: "0px 0px 10px green",
                textShadow: "0px 0px 12px red"
            }}>Login</motion.button>
            <div className="test">
                <a text-align="left">Forgot Password?</a>
                <a text-align="right">Terms & Conditions</a>
            </div>
        </form>
    </div>
    )
}