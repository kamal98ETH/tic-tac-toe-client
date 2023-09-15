import React from "react";

const SignIn: React.FC = () => {
    return (
        <div id="sign-in">
            <form action="http://localhost:4000/sign-in" method="post" id="sign-in-form">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input id="username" name="username" type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input id="password" className="form-control" name="password" type="password" required />
                </div>
                <input type="submit" value="Submit" className="btn btn-primary" />
            </form>
        </div>
    )
};

export default SignIn;