import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const MatchesDisplay = ({ matches, setClickedUser }) => {
    const [matchedProfiles, setMatchedProfiles] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(null);

    const matchedUserIds = matches.map(({ user_id }) => user_id);
    const userId = cookies.UserId;

    const getMatches = async () => {
        try {
            const response = await axios.get("http://localhost:8000/users", {
                params: { userIds: JSON.stringify(matchedUserIds) },
            });
            setMatchedProfiles(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMatches();
    }, [matches]);

    // const filteredMatchedProfiles = matchedProfiles?.filter(
    //     (setMatchedProfile) =>
    //         matchedProfile.matches.filter((profile) => profile.user_id == userId)
    //             .length > 0
    // );

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



            {/* {matchedProfiles?.map((match, _index) => (

                <div
                    key={match.user_id}
                    className="match-card"
                    onClick={() => setClickedUser(match)}
                >
                    <div className="img-container">
                        <img src={match?.url} alt={match?.first_name + " profile"} />
                    </div>
                    <h3>{match?.first_name}</h3>
                </div>
            ))} */}
        </div>
    );
};

export default MatchesDisplay;