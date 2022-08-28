import axios from "axios"
import { userState } from 'react'
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"

const Favourites = ({ matches }) => {

    const [matchedProfiles, setMatchedProfiles] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(null)

    const matchedDeveloperIds = matches.map(({ developer_id }) => developer_id)

    console.log('mdi', matchedDeveloperIds)

    const hiringManagerId = cookies.HiringManagerId

    console.log('developerIds', JSON.stringify(matchedDeveloperIds))
    console.log('developerIds nostringiify', (matchedDeveloperIds))

    const getMatches = async () => {
        try {
            const response = await axios.get("http://localhost:8000/favourites", {
                params: { developerIds: (matchedDeveloperIds) },
            })
            setMatchedProfiles(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMatches()
    }, [matches])

    // const filteredMatchedProfiles = matchedProfiles?.filter(
    //     (setMatchedProfile) =>
    //         matchedProfile.matches.filter((profile) => profile.hiringManagerId == hiringManagerId)
    //             .length > 0
    // )



    return (
        <div className="matches-display">

            <div className="favourites-display">
                <div className="favourites-display-card">
                    <div className='dev-sum'>
                        <h3>Jack</h3>
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
                <div className="favourites-display-card">
                    <div className='dev-sum'>
                        <h3>Jack</h3>
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
                <div className="favourites-display-card">
                    <div className='dev-sum'>
                        <h3>Jack</h3>
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
                <div className="favourites-display-card">
                    <div className='dev-sum'>
                        <h3>Jack</h3>
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
        </div>

    )

}

export default Favourites