import React, { useEffect, useState } from 'react';
import './Layout.css';
import EmailCard from '../emailCard/EmailCard';
import apiService from '../../helper/apiService';

const Layout = () => {
    
    const [emalis, setEmails] = useState([])

    const getEmails= async()=>{
        var res = await apiService.getAll()
        return res
    }

    useEffect(()=>{
        getEmails().then((data)=>{
            setEmails(data.data.list)
        })
    },[])

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
                    {
                        emalis.map((data)=>(
                            <EmailCard key={data.id} data={data} isFavorite={1} isUnread={0}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Layout;