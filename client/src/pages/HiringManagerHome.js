import Nav from '../components/Nav'
import HiringManagerAuthModal from "../components/HiringManagerAuthModal"
import { useState } from 'react'
import { useCookies } from "react-cookie"

const HiringManagerHome = () => {
    
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const hiringManagerAuthToken = cookies.HiringManagerAuthToken


    const handleClick = () => {
        if (hiringManagerAuthToken) {
            removeCookie('HiringManagerId', cookies.HiringManagerId)
            removeCookie('HiringManagerAuthToken', cookies.HiringManagerAuthToken)
            window.location.reload()
            return
        }
        setShowModal(true)
        setIsSignUp(true)

    }

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