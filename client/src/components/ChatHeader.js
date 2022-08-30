// Contains user profile and logout button 

import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const ChatHeader = ({ hiringManager }) => {
    const [cookies, setCookies, removeCookie] = useCookies(['hiringManager'])

    //log out button clears cookies 
    const logout = () => {
        removeCookie('HiringManagerId', cookies.HiringManagerId)
        removeCookie('HiringManagerAuthToken', cookies.HiringManagerAuthToken)
        window.location.reload()
    }

    return (
        <div className="chat-container-header">
            <div className='profile-logout'>
                <div className="profile">
                    <div className="img-container">
                        <img src={hiringManager.url} alt={"photo of " + hiringManager.first_name} />
                    </div>
                    <h3>{hiringManager.first_name}</h3>
                </div>
                <div>
                    <i className="log-out-icon" onClick={logout}>⇦</i>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader
