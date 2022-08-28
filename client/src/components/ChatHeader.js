// import { useState } from 'react'
import { useCookies } from 'react-cookie'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'


const ChatHeader = ({ hiringManager }) => {
    const [cookies, setCookies, removeCookie] = useCookies(['hiringManager'])
    // const [error] = useState(null)

    // let navigate = useNavigate()

    const logout = () => {
        removeCookie('HiringManagerId', cookies.HiringManagerId)
        removeCookie('HiringManagerAuthToken', cookies.HiringManagerAuthToken)
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
                        <img src={hiringManager.url} alt={"photo of " + hiringManager.first_name} />
                    </div>
                    <h3>{hiringManager.first_name}</h3>
                </div>
                <div>
                    <i className="log-out-icon" onClick={logout}>⇦</i>
                </div>
            </div>
            {/* <div className='search'>
                <input
                    type="text"
                    placeholder=""
                    onChange={""}
                    value={""}
                />
            </div> */}
            
            {/* <div className='filter'>
                <button className="filter-button">Advanced Search</button>
                <button className="filter-button">Favourite</button>
                <button className="filter-button">Messages</button>
            </div> */}

        </div>
    )
}

export default ChatHeader
