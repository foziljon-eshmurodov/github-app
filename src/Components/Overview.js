import MainCard from "./MainCard";
import NoContent from "./NoContent";

const Overview = ({userOverview}) => {
  return (
    <div>
      {userOverview ? (
        <div className="overview">
          {userOverview.map((repo, idx) => (
            <div key={idx} >
              <MainCard
                key={repo.idx}
                projectName={repo.repo}
                projectLanguage={repo.language}
                projectLink={repo.link}
              />
            </div>
          ))}
        </div>
      ) : <NoContent />}
    </div>
  );
};

export default Overview;
