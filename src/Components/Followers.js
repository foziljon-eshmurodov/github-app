import FollowerCard from "./FollowerCard"
import NoContent from "./NoContent"

const Followers = ({followers}) => {
    return (
        <div className='followers'>
            {followers.length > 0 ? (
            <div>
                {followers.map((follower) => (
                    <FollowerCard key={follower.id} follower={follower} />
                ))}
            </div>) : <NoContent />}
        </div>
    )
}

export default Followers
