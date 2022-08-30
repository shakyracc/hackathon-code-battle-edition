// This page includes a form that updates the developer information in the database

import Nav from '../components/Nav'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const OnBoarding = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [formData, setFormData] = useState({
        developer_id: cookies.DeveloperId,
        first_name: "",
        account_type: "developer",
        country: "",
        role: "",
        degree: "",
        availability: "",
        experience: "",
        available_from: "",
        skills: "",
        interest: "hiring-manager",
        url: "",
        about: "",
        matches: "",

    })

    let navigate = useNavigate()

    // When the submit button is clicked, the contents of the form are passed to the developers's row in the database table
    const handleSubmit = async (e) => {
        console.log('submitted')
        e.preventDefault()
        try {
            const response = await axios.post('https://gentle-dev-hire.herokuapp.com/update-developer', { formData })
            console.log(response)
            const success = response.status === 200
            if (success) navigate('/dev-dashboard')
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
                <h2>CREATE DEVELOPER ACCOUNT</h2>

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

                        <label>Country</label>
                        <div className="multiple-input-container">
                            <input
                                id="india-country"
                                type="radio"
                                name="country"
                                value="india"
                                onChange={handleChange}
                                checked={formData.country === "india"}
                            />
                            <label htmlFor="india-country">India</label>
                            <input
                                id="country-japan"
                                type="radio"
                                name="country"
                                value="japan"
                                onChange={handleChange}
                                checked={formData.country === "japan"}
                            />
                            <label htmlFor="country-japan">Japan</label>
                            <input
                                id="country-usa"
                                type="radio"
                                name="country"
                                value="usa"
                                onChange={handleChange}
                                checked={formData.country === "usa"}
                            />
                            <label htmlFor="country-usa">USA</label>
                        </div>

                        <label>Role</label>
                        <div className="multiple-input-container">
                            <input
                                id="front-role"
                                type="radio"
                                name="role"
                                value="front"
                                onChange={handleChange}
                                checked={formData.role === "front"}
                            />
                            <label htmlFor="front-role">Front</label>
                            <input
                                id="back-role"
                                type="radio"
                                name="role"
                                value="back"
                                onChange={handleChange}
                                checked={formData.role === "back"}
                            />
                            <label htmlFor="back-role">Back</label>
                            <input
                                id="ops-role"
                                type="radio"
                                name="role"
                                value="ops"
                                onChange={handleChange}
                                checked={formData.role === "ops"}
                            />
                            <label htmlFor="ops-role">Ops</label>
                        </div>

                        <label htmlFor="about">Your bio</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="Tell us about yourself..."
                            value={formData.about}
                            onChange={handleChange}
                        />

                        <label>Degree</label>
                        <div className="multiple-input-container">
                            <input
                                id="yes-degree"
                                type="radio"
                                name="degree"
                                value="yes"
                                onChange={handleChange}
                                checked={formData.degree === "yes"}
                            />
                            <label htmlFor="yes-degree">Yes</label>
                            <input
                                id="no-degree"
                                type="radio"
                                name="degree"
                                value="no"
                                onChange={handleChange}
                                checked={formData.degree === "no"}
                            />
                            <label htmlFor="no-degree">No</label>

                        </div>

                        <label>Availability</label>
                        <div className="multiple-input-container">
                            <input
                                id="full-availability"
                                type="radio"
                                name="availability"
                                value="full"
                                onChange={handleChange}
                                checked={formData.availability === "full"}
                            />
                            <label htmlFor="full-availability">Full Time</label>
                            <input
                                id="part-availability"
                                type="radio"
                                name="availability"
                                value="part"
                                onChange={handleChange}
                                checked={formData.availability === "part"}
                            />
                            <label htmlFor="part-availability">Part Time</label>
                        </div>

                        <label>Experience Level</label>
                        <div className="multiple-input-container">
                            <input
                                id="junior-experience"
                                type="radio"
                                name="experience"
                                value="junior"
                                onChange={handleChange}
                                checked={formData.experience === "junior"}
                            />
                            <label htmlFor="junior-experience">Junior</label>
                            <input
                                id="senior-experience"
                                type="radio"
                                name="experience"
                                value="senior"
                                onChange={handleChange}
                                checked={formData.experience === "senior"}
                            />
                            <label htmlFor="senior-experience">Senior</label>
                        </div>

                        <label>Can start working</label>
                        <div className="multiple-input-container">
                            <input
                                id="available-from-now"
                                type="radio"
                                name="available_from"
                                value="now"
                                onChange={handleChange}
                                checked={formData.available_from === "now"}
                            />
                            <label htmlFor="available-from-now">Now</label>
                            <input
                                id="available-from-week"
                                type="radio"
                                name="available_from"
                                value="week"
                                onChange={handleChange}
                                checked={formData.available_from === "week"}
                            />
                            <label htmlFor="available-from-week">One Week</label>
                        </div>

                        <label>Skills</label>
                        <div className="multiple-input-container">
                            <input
                                id="skills-react"
                                type="radio"
                                name="skills"
                                value="react"
                                onChange={handleChange}
                                checked={formData.skills === "react"}
                            />
                            <label htmlFor="skills-react">React</label>
                            <input
                                id="skills-python"
                                type="radio"
                                name="skills"
                                value="python"
                                onChange={handleChange}
                                checked={formData.skills === "python"}
                            />
                            <label htmlFor="skills-python">Python</label>

                            <input
                                id="skills-node"
                                type="radio"
                                name="skills"
                                value="node"
                                onChange={handleChange}
                                checked={formData.skills === "node"}
                            />
                            <label htmlFor="skills-node">Node.js</label>
                        </div>

                        <input type="submit" />
                    </section>

                    <section>

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

                    </section>

                </form>
            </div>
        </>
    )
}
export default OnBoarding