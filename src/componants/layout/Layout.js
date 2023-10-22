import React, { useEffect, useState } from 'react';
import './Layout.css';
import EmailCard from '../emailCard/EmailCard';
import apiService from '../../helper/apiService';
import EmailBody from '../emailBody/EmailBody';

const Layout = () => {
    
    const [emalis, setEmails] = useState([])
    const [emailBody, setEmailBody] = useState(null)

    const getEmails= async()=>{
        var res = await apiService.getAll()
        return res
    }

    const getEmailById = async(data)=>{
        var res = await apiService.getById(data.id)
        console.log('ss')
        setEmailBody({...data, ...res.data})
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
                            <span onClick={()=>getEmailById(data)} key={data.id}><EmailCard data={data} isFavorite={1} isUnread={0}/></span>
                        ))
                    }
                </div>
                {
                    (emailBody)?(
                        <div className='slave'>
                            <EmailBody data={emailBody}/>
                        </div>
                    ):("")
                }
            </div>
        </div>
    );
}

export default Layout;