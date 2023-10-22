import React from 'react';

const EmailCard = ({data, isFavorite, isUnread}) => {

    const formatDate = (date) =>{
        date = new Date(date);
        const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
        const formattedDate = date.toLocaleString('en-US', options).toLowerCase();
        return formattedDate
    }

    return (
        <div className='card'>
            <div className='logo'>
                <span>{data.from.name.toUpperCase()[0]}</span>
            </div>
            <div className='details'>
                <p><span>From:</span> {data.from.name} &lt;{data.from.email}&gt;</p>
                <p><span>Subject:</span> {data.subject}</p>
                <p>{data.short_description}</p>
                <p>{formatDate(data.date)} {(isFavorite)?(<span>Favorite</span>):("")}</p>
            </div>
        </div>
    );
}

export default EmailCard;