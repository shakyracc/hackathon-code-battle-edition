// This page displays a button that says "sign out" if the developer is logged in
// and "create account" if the developer is not logged in. 

// It uses the developerAuthToken which is stored in the browser cookies to determine if 
// the develoepr is logged in or not. 

// Clicking "sign out" clears the browser cookies and reloads the page. 

// Clicking "create account" opens the create account form modal. 

import Nav from '../components/Nav'
import DeveloperAuthModal from "../components/DeveloperAuthModal"
import { useState } from 'react'
import { useCookies } from "react-cookie"

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const authToken = cookies.AuthToken

    // This function state what should happen when the developer clicks the button.
    // If authToken is detected (i.e if logged in) clicking the button signs out the user (i.e removes browser cookies)
    // If authTocken is not detect (i.e if logged out) clicking button opens the create account form
    const handleClick = () => {
        if (authToken) {
            removeCookie('DeveloperId', cookies.DeveloperId)
            removeCookie('AuthToken', cookies.AuthToken)
            window.location.reload()
            return
        }
        setShowModal(true)
        setIsSignUp(true)
    }

    // <Nav> Pass through authToken, setShowModal, showModal and setIsSignup to Nav for the login button in he Nav bar
    // if showModal is true, pass open hiring manager auth modal 
    return (
        <div className="overlay">
            <Nav
                authToken={authToken}
                minimal={false}
                setShowModal={setShowModal}
                showModal={showModal}
                setIsSignUp={setIsSignUp}
            />
            <div className="home">
                <h1 className="primary-title">Getting hired made easy</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>


                {showModal && (
                    <DeveloperAuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
                )}
            </div>
        </div>
    )
}
export default Home