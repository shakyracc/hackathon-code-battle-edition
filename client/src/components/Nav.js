import logo from '../images/Frame.png'
import logo2 from '../images/Frame@2x.png'
import { useNavigate } from 'react-router-dom'

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {

    let navigate = useNavigate()
    
    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const goHome = () => {
        navigate('/')
    }

    const authToken = false
    return ( 
        <nav>
            <div className="logo-container" onClick={goHome}>
                <img className="logo" src={minimal ? logo : logo2} />
            </div>

            {!authToken && !minimal && <button
                className='nav-button'
                onClick={handleClick}
                disabled={showModal}
            >Log in</button>}

        </nav>
    )
}
export default Nav