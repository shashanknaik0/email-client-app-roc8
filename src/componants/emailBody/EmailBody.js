import React, { useEffect } from 'react';
import './EmailBody.css';

const EmailBody = ({ data }) => {
    console.log(data.body)

    const formatDate = (date) => {
        date = new Date(date);
        const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
        const formattedDate = date.toLocaleString('en-US', options).toLowerCase();
        return formattedDate
    }

    useEffect(()=>{
        if (document.getElementById("email") && data.body) {
            document.getElementById("email").innerHTML = data.body;
        }
    })

    return (
        (data) ? (
            <div className='outer'>
                <div className='email-body'>
                    <div className='logo'>
                        <div><span>{data.from.name.toUpperCase()[0]}</span></div>
                    </div>
                    <div className='details'>
                        <div><span className='name'>{data.from.name}</span></div>
                        <div>{formatDate(data.date)}</div>
                    </div>
                    <button>Mark as favorite</button>
                </div>
                <div id='email'>

                </div>
            </div>
        ) : ("")
    );
}

export default EmailBody;