import Home from './pages/Home'
import HiringManagerHome from './pages/HiringManagerHome'
import DeveloperHome from './pages/DeveloperHome'
import HMDashboard from './pages/HMDashboard'
import DevDashboard from './pages/DevDashboard'
import HMOnboarding from './pages/HMOnboarding'
import DevOnboarding from './pages/DevOnboarding'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useCookies } from 'react-cookie'



const App = () => { //changed "function App()" to functional expression "const App = () => {}

  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const hiringManagerAuthToken = cookies.HiringManagerAuthToken
  const developerAuthToken = cookies.DeveloperAuthToken

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/hiringmanagerhome"} element={<HiringManagerHome/>} />
        <Route path={"/developerhome"} element={<DeveloperHome/>} />
        {hiringManagerAuthToken && <Route path="/hm-dashboard" element={<HMDashboard/>}/>}
        {developerAuthToken && <Route path="/dev-dashboard" element={<DevDashboard/>}/>}
        {developerAuthToken && <Route path={"/dev-onboarding"} element={<DevOnboarding/>}/>}
        {hiringManagerAuthToken && <Route path={"/hm-onboarding"} element={<HMOnboarding/>}/>}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
