import "./style.css";

function CharCard({ character }) {
  return (
    <div>
      <div className="card">
        {character.status === "Alive" ? (
          <div className="alive">
            <span>
              <h2>{character.name} </h2>
              <img src={character.image} alt="" />
            </span>
          </div>
        ) : (
          <div className="dead">
            <span>
              <h2>{character.name} </h2>
              <img src={character.image} alt="" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default CharCard;
