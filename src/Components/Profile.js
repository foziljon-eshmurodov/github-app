import './Profile.css'

const Profile = ({ currentUser }) => {
    return (
        <div className='profile'>
            <div className='sub-profile'>
                <a href={currentUser.html_url} target='_blank' className='my-link'>
                <div className='image-container'>
                    <img 
                        src={currentUser.avatar_url} 
                        alt="Avatar" 
                        className='profile-img'
                        />
                </div>

                <div className='profile-infos'>
                    <div className='name-nickname'>
                        <h4 className='profile-name'>{currentUser.name}</h4>
                        <small className='profile-login'>{currentUser.login}</small>
                    </div>

                    <div className='summary'>
                        <p>{currentUser.bio}</p>
                    </div>

                    <div className='profile-footer'>
                        {currentUser.location ? <p><i class="fas fa-map-marker-alt"></i> {currentUser.location}</p> : null}
                    </div>
                </div>
                </a>
            </div>
        </div>
    )
}

export default Profile
