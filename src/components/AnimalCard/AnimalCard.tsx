import "./styles.css";
import {AnimalData} from './type'
import {AnimalCardProps} from './type'

function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <div className="animal-card-wrapper">
      <h2>{animalData.name}</h2>
      <p>{animalData.species}</p>
      <p>{animalData.role}</p>
      <img src={animalData.image} />
    </div>
  );
}

export default AnimalCard;