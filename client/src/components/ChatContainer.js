// Contains the user profile name, image, search, favourites and messages

import ChatHeader from './ChatHeader'
import AdvancedSearch from './AdvancedSearch'
import Favourites from './Favourites'
import Messages from './Messages'
import ChatDisplay from './ChatDisplay'
import { useState } from 'react'

const ChatContainer = ({ hiringManager }) => {
    const [clickedUser, setClickedUser] = useState(null) //used to open messages
    const [advancedSearchWindow, setAdvancedSearchWindow] = useState(null) //used to open advances search window
    const [favouritesWindow, setFavouritesWindow] = useState(null) //used to open favourites window
    const [messagesWindow, setMessagesWindow] = useState(null) //used to open messages window


    const handleClick = (e) => {
        
        const value = e.target.value
        
        if (value === 'advanced-search') {
            setAdvancedSearchWindow(true)
            setFavouritesWindow(false)
            setMessagesWindow(false)
        }
        
         if  (value === 'favourites') {
            setAdvancedSearchWindow(false)
            setFavouritesWindow(true)
            setMessagesWindow(false)
        }
        
        if (value === 'messages') {
            setAdvancedSearchWindow(false)
            setFavouritesWindow(false)
            setMessagesWindow(true)
        }
    }

    return (
        <div className="chat-container">
            <ChatHeader hiringManager={hiringManager} />

            <div className='window'>
                <button
                    className="filter-button"
                    value='advanced-search'
                    onClick={handleClick}
                >
                    Advanced Search
                </button>
                <button
                    className="filter-button"
                    value="favourites"
                    onClick={handleClick}

                >
                    Favourites</button>
                <button
                    className="filter-button"
                    value="messages"
                    onClick={handleClick}
                >
                    Messages
                </button>


            </div>

            {advancedSearchWindow && <AdvancedSearch />}
            {favouritesWindow && <Favourites matches={hiringManager.matches}/>}
            {messagesWindow && <Messages />}

        </div>
    )
}

export default ChatContainer