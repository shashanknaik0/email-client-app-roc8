import React, { useEffect, useState } from 'react';
import './Layout.css';
import EmailCard from '../emailCard/EmailCard';
import apiService from '../../helper/apiService';
import EmailBody from '../emailBody/EmailBody';

const Layout = () => {
    
    const [emails, setEmails] = useState([])
    const [emailBody, setEmailBody] = useState(null)

    const [read, setRead] = useState([]);
    const [favorite, setFavorite] = useState([]);
    const [active, setActive] = useState(-1);

    const getEmails= async()=>{
        var res = await apiService.getAll()
        return res
    }

    const getEmailById = async(data)=>{
        addRead(data.id)
        var res = await apiService.getById(data.id)
        setEmailBody({...data, ...res.data})
    }

    useEffect(()=>{
        var favorites = JSON.parse(localStorage.getItem('fav'))
        var readData = JSON.parse(localStorage.getItem('read'))
        if(favorites) setFavorite(favorites.data)
        if(readData) setFavorite(readData.data)
        getEmails().then((data)=>{
            setEmails(data.data.list)
        })
    },[])

    const addRead=(id)=>{
        var pre = JSON.parse(localStorage.getItem('read'))
        console.log(pre)
        if(pre){
            if(!pre.data.includes(id)){
                localStorage.setItem('read', JSON.stringify({data:[...pre.data, id]}));
                setRead([...pre.data, id])
            }
        }
        else{
            localStorage.setItem('read', JSON.stringify({data:[id]}));
            setRead([id])
        }
    }

    const listFilter=(index)=>{
        switch(index){
            case 0:
                var result = emails.filter(({id}) => favorite.includes(id));
                return (
                    result.map((data)=>(
                        <span onClick={()=>getEmailById(data)} key={data.id}>
                            <EmailCard data={data} 
                                isFavorite={1} 
                                isRead={read.includes(data.id)?1:0} />
                        </span>
                    ))
                );
            case 1:
                var result = emails.filter(({id}) => read.includes(id));
                return (
                    result.map((data)=>(
                        <span onClick={()=>getEmailById(data)} key={data.id}>
                            <EmailCard data={data} 
                                isFavorite={favorite.includes(data.id)?1:0} 
                                isRead={1}/>
                        </span>
                    ))
                );
            default:
                return(
                    emails.map((data)=>(
                        <span onClick={()=>getEmailById(data)} 
                            key={data.id}>
                                <EmailCard data={data} 
                                    isFavorite={favorite.includes(data.id)?1:0} 
                                    isRead={read.includes(data.id)?1:0}/>
                        </span>
                    ))
                )
        }
    }

    return (
        <div className='container'>
            <div className='header'>
                <ul>
                    <li>Filter By:</li>
                    <li><a className={(active==2)?'active':null} onClick={()=>{setActive(2); setEmailBody(null)}}>Unread</a></li>
                    <li><a className={(active==1)?'active':null} onClick={()=>{setActive(1); setEmailBody(null)}}>Read</a></li>
                    <li><a className={(active==0)?'active':null} onClick={()=>{setActive(0); setEmailBody(null)}}>Favorites</a></li>
                </ul>
            </div>
            <div className='body'>
                <div className='master'>
                    {
                        listFilter(active)
                    }
                </div>
                {
                    (emailBody)?(
                        <div className='slave'>
                            <EmailBody data={emailBody} setFavorite={setFavorite}/>
                        </div>
                    ):("")
                }
            </div>
        </div>
    );
}

export default Layout;