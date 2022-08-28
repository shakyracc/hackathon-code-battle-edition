import Nav from '../components/Nav'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    let navigate = useNavigate()

    const hiringHome = () => {
        console.log('clicked hiring manager')
        navigate('/hiringmanagerhome')
    }

    const developerHome = () => {
        console.log('clicked developer')
        navigate('/developerhome')
    }

    return (
        <>
            <div className="overlay">
                <Nav
                    minimal={true}
                />
                <div className="home">
                    <h1 className="primary-title">Get hired or hire talents made easy</h1>
                    <button
                        className="primary-button"
                        value='hiring-manager'
                        onClick={hiringHome}>
                        I'm a hiring manager
                    </button>
                    <button
                        className="primary-button"
                        value='developer'
                        onClick={developerHome}>
                        I'm a developer
                    </button>
                </div>
            </div>
        </>
    )
}
export default Home