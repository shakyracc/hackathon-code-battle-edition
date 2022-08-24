// import { useState } from 'react'
import { useCookies } from 'react-cookie'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'


const ChatHeader = ({ user }) => {
    const [cookies, setCookies, removeCookie] = useCookies(['user'])
    // const [error] = useState(null)

    // let navigate = useNavigate()

    const logout = () => {
        removeCookie('UserId', cookies.UserId)
        removeCookie('AuthToken', cookies.AuthToken)
        window.location.reload()
        // navigate('/')

        // console.log('logout')
        // e.preventDefault()
        // try {
        //     const response = await axios.post('http://localhost:8000/logout')
        //     const success = response.status === 200
        //     if (success) navigate('/')

        //     window.location.reload()


        // } catch (error) {
        //     console.log(error)
        // }

    }

    return (
        <div className="chat-container-header">
            <div className='profile-logout'>
                <div className="profile">
                    <div className="img-container">
                        <img src={user.url} alt={"photo of " + user.first_name} />
                    </div>
                    <h3>{user.first_name}</h3>
                </div>
                <div>
                    <i className="log-out-icon" onClick={logout}>⇦</i>
                </div>
            </div>
            <div className='search'>
                <input
                    type="text"
                    placeholder=""
                    onChange={""}
                    value={""}
                />
            </div>
            <div className='filter'>
                <button className="filter-button">Advanced Search</button>
                <button className="filter-button">Favourite</button>
                <button className="filter-button">Messages</button>
            </div>

        </div>
    )
}

export default ChatHeader
