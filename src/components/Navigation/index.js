import React from 'react';
import './Navigation.css';

function Navigation() {



    return (
        <div className='navbar'>
            <div className="option-menu-bar">
                <ul className="navbar-nav">
                    <li><a className="link-tag" href="users">USERS</a>
                    </li>
                    <li><a className="link-tag" href="edit-users">EDIT USERS</a>
                    </li>
                    <li><a className="link-tag" href="contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;