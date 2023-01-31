import Cat from "../data/cat";

const CatCard: React.FC<Cat> = (prop) => (
  <div className="card">
    <h3 className="card__text card__header">{prop.name}</h3>
    <p className="card__text">Species: {prop.species}</p>
    <p className="card__text">Favourite Food(s): {prop.favFoods}</p>
    <p className="card__text">Birth Year: {prop.birthYear}</p>
  </div>
);

export default CatCard;
