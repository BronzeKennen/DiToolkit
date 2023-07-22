export default function Login() {
    return (
    <div className="loginBox">
        <form className="login">
            <label>Username</label>
            <input className="credsBox"
                type="text"
                />
            <label>Password</label>
            <input className="credsBox"
                type="text"
            />
        </form>
    </div>
    )
}