import { motion } from 'framer-motion'

export default function Login() {
    return (
    <div className="loginBox">
        <form className="login">
            <label>e-class username</label>
            <input className="credsBox"
                type="text"
                />
            <label>e-class password</label>
            <input className="credsBox"
                type="password"
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