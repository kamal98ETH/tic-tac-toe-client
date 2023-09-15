import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    let cookie = document.cookie;

    const [is_loggedin, set_loggin] = useState(false)

    const deleteCookie = (name: string) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    };

    useEffect(() => {
        if (cookie) {
            set_loggin(true)
        } else {
            set_loggin(false)
        }
    }, [cookie])

    function disconnect() {
        deleteCookie('username')
        set_loggin(false)
        console.log('clicked')
    }

    let account: React.ReactNode;
    if (is_loggedin) {
        account = <div id='username'>
            {cookie.split("=")[1]}
            <button onClick={disconnect}>disconnect</button>
        </div>
    } else {
        account =
            <div id='sign-in-up'>
                <Link to="/sign-in">sign-in</Link>
                <Link to="/sign-up">sign-up</Link>
            </div>
    }
    return (
        <nav id="navbar">
            <div id="account">
                {account}
            </div>
        </nav>
    )
}

export default Navbar;