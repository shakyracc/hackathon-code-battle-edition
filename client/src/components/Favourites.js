// Contains a display of the hiring managers matches 

// This only displays a single match for now as I haven't figured out how make and query
// ...an array field in a row in a harperdb database table. 

// It contains dummy data for prototyping 

import axios from "axios"
import { useEffect, useState } from "react"

const Favourites = ({ matches }) => {

    const [matchedProfile, setMatchedProfile] = useState(null)

    const matchedDeveloperId = matches

    // gets the developer with the corresponding developer Id from the database 
    const getMatchedDevelopers = async () => {
        try {
            const response = await axios.post("http://localhost:8000/get-matched-developers", {
                matchedDeveloperId
            })

            setMatchedProfile(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMatchedDevelopers()
    }, [matches])

    return (
        <div className="matches-display">

            {matchedProfile?.map((profile) => (

                <div className="favourites-display">
                    <div
                        key={profile.first_name}
                        className="favourites-display-card">
                        <div className='dev-sum'>
                            <h3>{profile?.first_name}</h3>
                            <h2>Full Stack Developer</h2>
                        </div>

                        <div className='dev-tech'>
                            <button className='tech-tag'>JavaScript 🌈</button>
                            <button className='tech-tag'>HTML ☀️</button>
                            <button className='tech-tag'>CSS 🚀</button>

                        </div>
                        <div className='dev-info'>
                            <p>Experience: 4yrs+</p>
                            <p>Salary: $100K/Yr</p>

                            <button className='dev-availability'>Available now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Favourites