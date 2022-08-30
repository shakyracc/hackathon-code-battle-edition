// This page includes a form that updates the hiring manager information in the database

import Nav from '../components/Nav'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const HMOnboarding = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null) //for retrieving the hiringManagerId
    const [formData, setFormData] = useState({
        hiring_manager_id: cookies.HiringManagerId,
        first_name: "",
        account_type: "hiring-manager",
        country: "",
        role: "a",
        degree: "",
        availability: "",
        experience: "",
        available_from: "",
        skills: "",
        interest: "developer",
        url: "",
        matches: "",

    }) // sets interests to developer which means that they will only see developers on their dashboard

    let navigate = useNavigate()

    // When the submit button is clicked, the contents of the form are passed to the hiring manager's row in the database table
    const handleSubmit = async (e) => {
        console.log('submitted')
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/update-hiring-manager', {
                formData
            }) //use axios.post because harperdb always expects post requests. 

            const success = response.status === 200
            if (success) navigate('/hm-dashboard')
            
        } catch (err) {
            console.log(err)
        }
    }

    // when data is inputed into the form, the formData value is updated.
    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <>
            <Nav
                minimal={true}
                setShowModal={() => {
                }}
                showModal={false}
            />

            <div className="onboarding">
                <h2>CREATE HIRING MANAGER ACCOUNT</h2>

                <form onSubmit={handleSubmit}>

                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            type='text'
                            name="first_name"
                            placeholder="First Name"
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                        <label htmlFor="url">Profile Photo</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                            {formData.url && <img src={formData.url} alt="profile pic preview" />}
                        </div>

                        <input type="submit" />
                    </section>

                </form>
            </div>
        </>
    )
}
export default HMOnboarding