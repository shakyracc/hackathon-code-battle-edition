import { useState } from "react"
import { useCookies } from 'react-cookie'
import axios from 'axios'

const AdvancedSearch = () => {
const [email, setEmail] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [formData, setformData] = useState({
        hiring_manager_id: cookies.HiringManagerId,
        country: "all",
        role: "all",
        degree: "all",
        availability: "all",
        experience: "all",
        available_from: "all",
        skills: "",
    })

    const [country, setCountry] = useState(null)
    const [role, setRole] = useState(null)
    const [degree, setDegree] = useState(null)
    const [availability, setAvailability] = useState(null)
    const [experience, setExperience] = useState(null)
    const [available_from, setAvailable_from] = useState(null)
    const [skills, setSkills] = useState(null)

    const handleSubmit = async (e) => {
        console.log('submitted')
        e.preventDefault()
        try {
            const response = await axios.put('http://localhost:8000/hiring-manager-search', { formData })
   
            const success = response.status === 200
            if (success ) {window.location.reload()}
        
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setformData((prevState) => ({
            ...prevState,
            [name]: value
        }))


    }

    return (
        <>

            <form onSubmit={handleSubmit}>

                <section>

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

            </form>

        </>



    )
}

export default AdvancedSearch