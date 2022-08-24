import logo from '../images/Frame.png'
import logo2 from '../images/Frame@2x.png'

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = false
    return ( 
        <nav>
            <div className="logo-container">
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