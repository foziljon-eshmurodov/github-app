import "./Main.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Overview from "./Overview";
import Repos from "./Repos";
import Followers from "./Followers";
import { useState } from "react";

const Main = ({ userOverview, repos, followers }) => {
    const [inOverview, setInOverview] = useState(false)
    const [inRepos, setInRepos] = useState(false)
    const [inFollowers, setInFollowers] = useState(false)
    
    const overviewLink = () => {
        setInOverview(true)
        setInRepos(false)
        setInFollowers(false)
    }

    const reposLink = () => {
        setInOverview(false)
        setInRepos(true)
        setInFollowers(false)
    }

    const followersLink = () => {
        setInOverview(false)
        setInRepos(false)
        setInFollowers(true)
    }

    return (
    <Router>
        
      <div className="main">
        <div className="my-navbar">
          <Link to="/overview" onClick={overviewLink}>
              {inOverview ? <p className="main_link underline">Overview</p> : <p className='main_link'>Overview</p> }
          </Link>
          <Link to="/repos" onClick={reposLink}>
            {inRepos ? <p className="main_link underline">Repos</p> : <p className="main_link">Repos</p>}
          </Link>
          <Link to='/followers' onClick={followersLink}>
            {inFollowers ? <p className='main_link underline'>Followers</p> : <p className='main_link'>Followers</p>}
          </Link>
        </div>

        <div>

          <Routes>
            <Route
              path="/overview"
              element={<Overview userOverview={userOverview} />}
            />
            
            <Route 
              path="/repos" 
              element={<Repos repos={repos} />} 
            />

            <Route 
              path='/followers'
              element={<Followers followers={followers} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Main;
