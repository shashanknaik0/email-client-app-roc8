import React from 'react';
import './EmailCard.css';

const EmailCard = ({data, isFavorite, isUnread}) => {

    const formatDate = (date) =>{
        date = new Date(date);
        const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
        const formattedDate = date.toLocaleString('en-US', options).toLowerCase();
        return formattedDate
    }

    return (
        (data)?(
            <div className='card'>
            <div className='logo'>
                <div><span>{data.from.name.toUpperCase()[0]}</span></div>
            </div>
            <div className='details'>
                <div>From: <span>{data.from.name} &lt;{data.from.email}&gt;</span></div>
                <div>Subject: <span>{data.subject}</span></div>
                <div>{data.short_description}</div>
                <div>{formatDate(data.date)} {(isFavorite)?(<span className='fav'>Favorite</span>):("")}</div>
            </div>
        </div>
        ):("")
    );
}

export default EmailCard;