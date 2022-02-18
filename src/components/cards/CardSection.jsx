import CardLists from "./CardLists"
import { Link } from 'react-router-dom'

function CardSection({ sectionName, title, destination }) {
  return (
    <div className={`CardSection ${sectionName}`}>
      <div className="d-flex justify-content-between">
        <h3>{ title }</h3>
        <Link to={destination}>See more</Link>
      </div>
      <CardLists />
    </div>
  );
}

export default CardSection