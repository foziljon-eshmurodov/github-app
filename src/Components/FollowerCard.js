import React from 'react'

const FollowerCard = ({follower}) => {
    return (
        <a href={follower.html_url} target='_blank' rel="noreferrer" className='my-link'>
        <div className='follower-card'>
            <div>
                <img className='follower-img' src={follower.avatar_url} alt='avatar' />
            </div>
            <div>
                <p className='follower-login'>{follower.login}</p>
            </div>
        </div>
        </a>
    )
}

export default FollowerCard
