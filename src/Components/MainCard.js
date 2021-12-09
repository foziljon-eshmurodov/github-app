import "./MainCard.css";

const MainCard = ({ projectLink, projectName, projectLanguage, id }) => {
  return (
    <a href={projectLink} target="_blank" rel="noreferrer" className='main-card-link my-link'>
      <div key={id} className="main-card card">
        <h4>{projectName}</h4>
        <div className="technology">
          <div className="bulletpoint"></div>
          <p>{projectLanguage ? projectLanguage : "Not Known"}</p>
        </div>
      </div>
    </a>
  );
};

export default MainCard;
