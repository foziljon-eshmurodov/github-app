import './Navbar.css'

const Navbar = ({username, setUsername, searchUser}) => {
    return (
        <nav className='my-search-navbar navbar'>
            <div className='search-container container'>
                <form className='form-group my-form'>
                <div>
                <input 
                    className='search input form-control' 
                    type='text' 
                    placeholder='Username...'
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <button className='btn btn-danger' disabled={!username} onClick={(e) => searchUser(e)}>Search</button>
                </div>
                
                </form>
            </div>
        </nav>
    )
}

export default Navbar
