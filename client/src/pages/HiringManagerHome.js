// This page displays a button that says "sign out" if the hiring manager is logged in
// and "create account" if the hiring manager is not logged in. 

// It uses the hiringManagerAuthToken which is stored in the browser cookies to determine if 
// the hiring manager is logged in or not. 

// Clicking "sign out" clears the browser cookies and reloads the page. 

// Clicking "create account" opens the create account form modal. 


import Nav from '../components/Nav'
import HiringManagerAuthModal from "../components/HiringManagerAuthModal"
import { useState } from 'react'
import { useCookies } from "react-cookie" //for storing authToken and userId

const HiringManagerHome = () => {
    
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const hiringManagerAuthToken = cookies.HiringManagerAuthToken


    // This function state what should happen when the hiring manager clicks the button.
    // If authToken is detected (i.e if logged in) clicking the button signs out the user (i.e removes browser cookies)
    // If authTocken is not detect (i.e if logged out) clicking button opens the create account form
    const handleClick = () => {
        if (hiringManagerAuthToken) {
            removeCookie('HiringManagerId', cookies.HiringManagerId)
            removeCookie('HiringManagerAuthToken', cookies.HiringManagerAuthToken)
            window.location.reload()
            return
        }
        setShowModal(true)
        setIsSignUp(true) // setting isSignUp to true allows us to disable the login button in the nav bar

    }

    // <Nav> Pass through authToken, setShowModal, showModal and setIsSignup to Nav for the login button in he Nav bar
    // if showModal is true, pass open hiring manager auth modal 
    return (
        <div className="overlay">
            <Nav
                hiringManagerAuthToken={hiringManagerAuthToken}
                minimal={false}
                setShowModal={setShowModal} 
                showModal={showModal}
                setIsSignUp={setIsSignUp}
            />
            <div className="home">
                <h1 className="primary-title">Hiring talents made easy</h1>
                <button className="primary-button" onClick={handleClick}>
                    {hiringManagerAuthToken ? 'Signout' : 'Create Account'}
                </button>


                {showModal && (
                    <HiringManagerAuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
                )}
            </div>
        </div>
    )
}

export default HiringManagerHome