// The pop up form that displays when the user clicks "create account" or "login"

// It includes a form that captures the email and password of the user to update the database

import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'


// If isSignUp is true the modal will display a create account form to insert a new row in the database
// If isSignup is false the modal will display a login form to retrieve their userId from the database to add to the browser cookies
const HiringManagerAuthModal = ({ setShowModal, isSignUp }) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(null)

    let navigate = useNavigate() 

    const handleClick = () => {
        setShowModal(false) //closes the authmodal
    }

    const handleSubmit = async (e) => {

        e.preventDefault() //prevent page from reloading

        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError('Passwords need to match!')
                return
            }

            //posts to the hiring manager signup and login operations in the backend
            const response = await axios.post(`http://localhost:8000/${isSignUp ? 'hm-signup' : 'hm-login'}`, { email, password })

            setCookie('HiringManagerAuthToken', response.data.token)
            setCookie('HiringManagerId', response.data.hiringManagerId)

            const success = response.status === 201

            //if success is truthy and isSignUp is true open the oboarding form 
            if (success && isSignUp) navigate('/hm-onboarding')

            //if success is truthy and isSignUp is false (i.e. if this is a login operation) open the dashboard
            if (success && !isSignUp) navigate('/hm-dashboard')

            window.location.reload()

        } catch (error) {
            console.log(error)
        }

    }

    // If isSignUp is true display create account form. If false, display login form. 
    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>ⓧ</div>

            <h2>{isSignUp ? 'CREATE HIRING MANAGER ACCOUNT' : 'LOG IN AS HIRING MANAGER'}</h2>
            <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="confirm password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input className="secondary-button" type="submit" />
                <p>{error}</p>
            </form>

        </div>
    )
}
export default HiringManagerAuthModal