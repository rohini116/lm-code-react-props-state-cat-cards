const DogCard: React.FC<DogCardProps> = (props) => (
  <div className="card">
    <h3 className="card__text card__header">{props.name}</h3>
    <p className="card__text">Species: {props.species}</p>
    <p className="card__text">Favourite Food(s): {props.favFoods}</p>
    <p className="card__text">Birth Year: {props.birthYear}</p>
  </div>
);

export default DogCard;

interface DogCardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
}
