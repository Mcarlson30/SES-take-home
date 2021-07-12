import React from 'react';
import './Navigation.css';

function Navigation() {



    return (
        <div className='navbar'>
            <div class="option-menu-bar">
                <ul class="navbar-nav">
                    <li><a className="link-tag" href="user-data">USER DATA</a>
                    </li>
                    <li><a className="link-tag" href="edit-user">EDIT USERS</a>
                    </li>
                    <li><a className="link-tag" href="contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;