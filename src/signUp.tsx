import React from "react";

const SignUp: React.FC = () => {

    return (
        <div id="sign-up">
            <form action="http://localhost:4000/sign-up" method="post" id="sign-up-form">
                <label htmlFor="username">Username</label>
                <input id="username" name="username" type="text" required />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" required />
                <label htmlFor="confirm-password">Confirm Password</label>
                <input id="confirm-password" name="confirm-password" type="password" required />
                <input type="submit" id="submit" value="Submit" />
            </form>
        </div>
    )
};

export default SignUp;