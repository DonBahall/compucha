import "./CreateCard.scss";

const CreateCard = ({ role, name, link, photo }) => {
  return (
    <div className="CreateCard">
      <div className="CreateCard_photo">
        <img src={photo} alt="Profile" />
      </div>
      <div className="CreateCard_info">
        <h4 className="CreateCard_info__role">{role}</h4>
        <h5 className="CreateCard_info__name">{name}</h5>
        <div className="CreateCard_info__click">
          <a href={link}>Contact me</a>
          <button>
            <a href={link}>
              <img src="./img/linkedin.svg" alt="LinkedIn" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
