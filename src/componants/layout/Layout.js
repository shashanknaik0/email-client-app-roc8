import React from 'react';
import './Layout.css';
import EmailCard from '../emailCard/EmailCard';

const Layout = () => {
    var test = {
        id: "1",
        from: {
          email: "bounced@flipkart.com",
          name: "bounced"
        },
        date: 1582729505000,
        subject: "Lorem Ipsum",
        short_description: "Vestibulum sit amet ipsum aliquet, lacinia nulla malesuada, ullamcorper massa"
      }
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
                <div className='master'>
                    <EmailCard data={test} isFavorite={1} isUnread={0}/>
                </div>
            </div>
        </div>
    );
}

export default Layout;