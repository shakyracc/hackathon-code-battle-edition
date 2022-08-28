import { useState } from "react"
import { useCookies } from 'react-cookie'
import axios from 'axios'

const AdvancedSearch = () => {
const [email, setEmail] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [searchFormData, setSearchFormData] = useState({
        country: "",
        role: "",
        degree: "",
        availability: "",
        experience: "",
        available_from: "",
        skills: "",
    })

    const [country, setCountry] = useState(null)
    const [role, setRole] = useState(null)
    const [degree, setDegree] = useState(null)
    const [availability, setAvailability] = useState(null)
    const [experience, setExperience] = useState(null)
    const [available_from, setAvailable_from] = useState(null)
    const [skills, setSkills] = useState(null)

    const handleClick = (e) => {
        console.log('clear search')
        try {
            removeCookie('Country', searchFormData.country)
            removeCookie('Role', searchFormData.role)
            removeCookie('Degree', searchFormData.degree)
            removeCookie('Availability', searchFormData.availability)
            removeCookie('Experience', searchFormData.experience)
            removeCookie('Available_From', searchFormData.available_from)
            removeCookie('Skills', searchFormData.skills)
            return
        } catch(err){
            console.log(err)
        }    
    
    }

    const handleSubmit = (e) => {
        console.log('submitted')
        e.preventDefault()
        try {
            console.log(searchFormData)

            // const response = await axios.post(`http://localhost:8000/search`, {
            //     country, role, degree, availability, experience, available_from, skills
            // })

            // setCookie('Country', formData.country)
            // setCookie('Role', response.data.role)
            // setCookie('Degree', response.data.degree)
            // setCookie('Availability', response.data.availability)
            // setCookie('Experience', response.data.experience)
            // setCookie('Available_From', response.data.available_from)
            // setCookie('Skills', response.data.skills)

            setCookie('Country', searchFormData.country)
            setCookie('Role', searchFormData.role)
            setCookie('Degree', searchFormData.degree)
            setCookie('Availability', searchFormData.availability)
            setCookie('Experience', searchFormData.experience)
            setCookie('Available_From', searchFormData.available_from)
            setCookie('Skills', searchFormData.skills)

        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setSearchFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))


    }

    return (
        <>
            <div className="clear-filter">
                <button className='' onClick={handleClick}>Clear Filter</button>
            </div>

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
                            checked={searchFormData.country === "india"}
                        />
                        <label htmlFor="india-country">India</label>
                        <input
                            id="country-japan"
                            type="radio"
                            name="country"
                            value="japan"
                            onChange={handleChange}
                            checked={searchFormData.country === "japan"}
                        />
                        <label htmlFor="country-japan">Japan</label>
                        <input
                            id="country-usa"
                            type="radio"
                            name="country"
                            value="usa"
                            onChange={handleChange}
                            checked={searchFormData.country === "usa"}
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
                            checked={searchFormData.role === "front"}
                        />
                        <label htmlFor="front-role">Front</label>
                        <input
                            id="back-role"
                            type="radio"
                            name="role"
                            value="back"
                            onChange={handleChange}
                            checked={searchFormData.role === "back"}
                        />
                        <label htmlFor="back-role">Back</label>
                        <input
                            id="ops-role"
                            type="radio"
                            name="role"
                            value="ops"
                            onChange={handleChange}
                            checked={searchFormData.role === "ops"}
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
                            checked={searchFormData.degree === "yes"}
                        />
                        <label htmlFor="yes-degree">Yes</label>
                        <input
                            id="no-degree"
                            type="radio"
                            name="degree"
                            value="no"
                            onChange={handleChange}
                            checked={searchFormData.degree === "no"}
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
                            checked={searchFormData.availability === "full"}
                        />
                        <label htmlFor="full-availability">Full Time</label>
                        <input
                            id="part-availability"
                            type="radio"
                            name="availability"
                            value="part"
                            onChange={handleChange}
                            checked={searchFormData.availability === "part"}
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
                            checked={searchFormData.experience === "junior"}
                        />
                        <label htmlFor="junior-experience">Junior</label>
                        <input
                            id="senior-experience"
                            type="radio"
                            name="experience"
                            value="senior"
                            onChange={handleChange}
                            checked={searchFormData.experience === "senior"}
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
                            checked={searchFormData.available_from === "now"}
                        />
                        <label htmlFor="available-from-now">Now</label>
                        <input
                            id="available-from-week"
                            type="radio"
                            name="available_from"
                            value="week"
                            onChange={handleChange}
                            checked={searchFormData.available_from === "week"}
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
                            checked={searchFormData.skills === "react"}
                        />
                        <label htmlFor="skills-react">React</label>
                        <input
                            id="skills-python"
                            type="radio"
                            name="skills"
                            value="python"
                            onChange={handleChange}
                            checked={searchFormData.skills === "python"}
                        />
                        <label htmlFor="skills-python">Python</label>

                        <input
                            id="skills-node"
                            type="radio"
                            name="skills"
                            value="node"
                            onChange={handleChange}
                            checked={searchFormData.skills === "node"}
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