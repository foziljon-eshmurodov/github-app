import MainCard from "./MainCard"
import NoContent from "./NoContent"


const Repos = ({repos}) => {
    return (
        <div>
            {repos.length > 0 ? (
            <div className='repos'>
              {repos.map((repo) => (
                <div className='repo' key={repo.id}>
                    <MainCard
                    projectName={repo.name}
                    projectLanguage={repo.language}
                    projectLink={repo.html_url}
                    />
                </div>
              ))}
            </div>
          ) : <NoContent />}
        </div>
    )
}

export default Repos
