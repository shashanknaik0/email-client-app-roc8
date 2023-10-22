import React from 'react';
import './Layout.css';

const Layout = () => {
    return (
        <div className='container'>
            <div className='header'>
                <ul>
                    <li>Filter By:</li>
                    <li><a>Unread</a></li>
                    <li><a>Read</a></li>
                    <li><a>Favorites</a></li>
                </ul>
            </div>
            <div className='body'>

            </div>
        </div>
    );
}

export default Layout;