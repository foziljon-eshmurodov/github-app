import { useEffect, useState } from "react";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import UserNotFound from "../Components/UserNotFound";
import "./Github.css";

const Github = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [userOverview, setUserOverview] = useState("");
  const [repos, setRepos] = useState("");
  const [followers, setFollowers] = useState("");

  const [username, setUsername] = useState("foziljon02");

  const [userFound, setUserFound] = useState(true);

  const [pageChanged, setPageChanged] = useState(Math.random());

  const searchUser = (e) => {
    e.preventDefault()
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setCurrentUser(data))
      .catch(err => setCurrentUser([{}]));

    fetch(
      `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${username}`
    )
      .then((response) => response.json())
      .then((data) => setUserOverview(data))
      .catch((error) => setUserOverview([{}]));

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => setRepos([{}]));

    fetch(`https://api.github.com/users/${username}/followers`)
      .then((response) => response.json())
      .then((data) => setFollowers(data))
      .catch((error) => setFollowers([{}]));

    console.log(userFound)
  };

  useEffect(() => {
    const getUser = async () => {
      await fetch(`https://api.github.com/users/foziljon02`)
        .then((response) => response.json())
        .then((data) => setCurrentUser(data))
        .catch((error) => console.log(console.error(error)));

      await fetch(
        `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=foziljon02`
      )
        .then((response) => response.json())
        .then((data) => setUserOverview(data))
        .catch((error) => console.log(console.error(error)));

      await fetch(`https://api.github.com/users/foziljon02/repos`)
        .then((response) => response.json())
        .then((data) => setRepos(data))
        .catch((error) => console.log(console.error(error)));

      await fetch(`https://api.github.com/users/foziljon02/followers`)
        .then((response) => response.json())
        .then((data) => setFollowers(data))
        .catch((error) => console.log(console.error(error)));
    };
    getUser(username);
    console.log(followers);
  }, [pageChanged]);

  return (
    <div classrepo="github">
      <div className='github-nav'>
        <Navbar
            username={username}
            setUsername={setUsername}
            searchUser={searchUser}
            />
      </div>
      {currentUser.hasOwnProperty('avatar_url') ? (
        <div>

          <div className="github-body-container container">
            <div className="row">
              <div className="col-md-3 col-12 col-sm-12 col-sm-12">
                <Profile currentUser={currentUser} />
              </div>

              <div className="col-md-8 col-12 col-sm-12">
                <Main
                  userOverview={userOverview}
                  repos={repos}
                  followers={followers}
                />
              </div>
            </div>
          </div>
        </div>
      ) : <UserNotFound />}
    </div>
  );
};

export default Github;
