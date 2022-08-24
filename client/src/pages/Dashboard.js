import TinderCard from 'react-tinder-card'
import { useEffect, useState } from 'react'
import ChatContainer from '../components/ChatContainer'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import logo from '../images/Frame.png'
import Nav from '../components/Nav'

const Dashboard = () => {
    const [user, setUser] = useState(null)
    const [genderedUsers, setGenderedUsers] = useState(null)
    const [lastDirection, setLastDirection] = useState()
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const userId = cookies.UserId


    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:8000/user', {
                params: { userId }
            })
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    const getGenderedUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/gendered-users', {
                params: { gender: user?.gender_interest }
            })
            setGenderedUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser()

    }, [])

    useEffect(() => {
        if (user) {
            getGenderedUsers()
        }
    }, [user])

    const updateMatches = async (matchedUserId) => {
        try {
            await axios.put('http://localhost:8000/addmatch', {
                userId,
                matchedUserId
            })
            getUser()
        } catch (err) {
            console.log(err)
        }
    }


    const swiped = (direction, swipedUserId) => {
        if (direction === 'right') {
            updateMatches(swipedUserId)
        }
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    const matchedUserIds = user?.matches.map(({ user_id }) => user_id).concat(userId)

    const filteredGenderedUsers = genderedUsers?.filter(genderedUser => !matchedUserIds.includes(genderedUser.user_id))


    console.log('filteredGenderedUsers ', filteredGenderedUsers)
    return (
        <>
            {user &&
                <div className="try">
                    {/* <nav>
                        <div className="logo-container">
                            <img className="logo" src={logo} />
                        </div>
                    </nav> */}
                    <div className="dashboard">
                        <ChatContainer user={user} />
                        <div className="swipe-container">
                            <div className="card-container">


                                <div className='search-results'>
                                    <p className='text-container'>Search results:</p>
                                    <p className='result-number'>1/50 talents</p>
                                </div>


                                {filteredGenderedUsers?.map((genderedUser) =>


                                    <TinderCard
                                        // className="swipe"
                                        // key={genderedUser.user_id}
                                        // onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
                                        // onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}>
                                        // <div
                                        //     style={{ backgroundImage: "url(" + genderedUser.url + ")" }}
                                        //     className="card">
                                        //     <h3>{genderedUser.first_name}</h3>
                                        // </div>

                                        // className="swipe"
                                        // key={genderedUser.user_id}
                                        // onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
                                        // onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}>
                                        // <div
                                        //     style={{ backgroundImage: "url(" + genderedUser.url + ")" }}
                                        //     className="card">
                                        //     <h3>{genderedUser.first_name}</h3>
                                        // </div>

                                        className='swipe'>
                                        <div className='dev-card'>
                                            <div className='dev-card-info'>
                                                <div className='profile-photo'>
                                                    <div className="profile-photo-container">
                                                        <img src={user.url} alt={"photo of " + user.first_name} />
                                                    </div>
                                                </div>
                                                <div className='dev-sum'>
                                                    <h3>Jack</h3>
                                                    <h2>Full-Stack Developer</h2>
                                                    <p> Hello, I'm Jack, and I'm a Software Engineer. I have 5 years of experience in software development, hands-on experience creating and imple...
                                                    </p>
                                                </div>

                                                <div className='dev-tech'>
                                                    <button className='tech-tag'>JavaScript 🌈</button>
                                                    <button className='tech-tag'>HTML ☀️</button>
                                                    <button className='tech-tag'>CSS 🚀</button>
                                                    <button className='tech-tag'>React 🌈</button>
                                                    <button className='tech-tag'>Python ☀️</button>
                                                    <button className='tech-tag'>Node 🚀</button>
                                                    <button className='tech-tag'>PHP 🚀</button>
                                                </div>
                                                <div className='dev-more'>
                                                    <div className='dev-info'>
                                                        <p>Experience: 4yrs+</p>
                                                        <p>Salary: $100K/Yr</p>
                                                        <p>Job type: Remote, Contract, Full - time, On -site</p>
                                                        <button className='dev-availability'>Available now</button>
                                                    </div>

                                                </div>
                                                <button className='view-profile'>View profile</button>
                                                <div className='last-seen'>
                                                    <p>Seen 5 months ago . Joined 5 months ago</p>

                                                </div>

                                            </div>

                                        </div>
                                    </TinderCard>
                                )}
                                <div className="swipe-info">
                                    {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
                                </div>
                            </div>
                        </div>
                        <div className='dev-details-container'> {/*chat-container*/}

                            <div className='dev-details-container-header'> {/*chat-container-header*/}
                                <div className='dev-details-profile'>
                                    <div className='dev-details-profile-sum'>
                                        <div className="dev-img-container">
                                            <img src={user.url} alt={"photo of " + user.first_name} />
                                        </div>
                                        <h3>Jack</h3>
                                        <h4>Full Stack Developer</h4>
                                        <h5>5yrs plus working experience</h5>
                                        <p>Seen 5 months ago . Joined 5 months ago</p>
                                        <button className='dev-availability'>Available now</button>
                                    </div>
                                    <div className='dev-details-profile-socials'>
                                        more stuff
                                    </div>
                                </div>
                            </div>

                            <div className='dev-details-display'>
                                <h3>About</h3>
                                <p>Hello, I'm Jack, and I'm a Software Engineer. I have 5 years of experience in software development, hands-on experience creating and implementing software applications, and the ability to troubleshoot and solve problems in a timely and accurate manner, I have experience working in several industries like Banking, Government, Logistics, Telecom, and etc.</p>
                                <h3>Location</h3>
                                <p>San fransisco, USA</p>
                                <h3>Work</h3>
                                <p>2022 - present: Full Stack Software Engineer @ Growsari PH<br />
                                    2021 - present: Full Stack Software Engineer @ Elemet7<br />
                                    2018 - 2021: Full Stack Software Engineer @ ING BANK (IBSS)<br />
                                    2017 - 2018: Full Stack Software Engineer @ Globe Telecom<br />
                                    2016 - 2020: Senior Software Engineer @ Pahrsek INC.<br />
                                    2015 - 2016: Full Stack Software Engineer @ Telcom Live Content INC.<br />
                                    2014 - 2015: Junior Software Engineer @ UCPB</p>
                                <h3>Education</h3>
                                <p>ESIC Business and Marketing School<br />
                                    2018 - 2018<br />
                                    Harvard Business School<br />
                                    (Entrepreneurial Studies, Entrepreneurship)<br />
                                    2018 - 2018<br />
                                    Universidad Autónoma de Madrid<br />
                                    (Business Management)<br />
                                    2014 - 2015<br />
                                    Universidad Nacional Autónoma de México<br />
                                    (Design)<br />
                                    2014 - 2014<br />
                                    Universidad Complutense de Madrid<br />
                                    (Journalism)<br />
                                    2010 - 2014<br />
                                    Universidad Internacional Menéndez Pelayo<br />
                                    2013 - 2013<br />
                                    (Communication, Journalism)<br />
                                    2012 - 2012</p>
                                <h3>Skills</h3>
                                <div className='dev-tech'>
                                    <button className='tech-tag'>JavaScript 🌈</button>
                                    <button className='tech-tag'>HTML ☀️</button>
                                    <button className='tech-tag'>CSS 🚀</button>
                                    <button className='tech-tag'>React 🌈</button>
                                    <button className='tech-tag'>Python ☀️</button>
                                    <button className='tech-tag'>Node 🚀</button>
                                    <button className='tech-tag'>PHP 🚀</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default Dashboard