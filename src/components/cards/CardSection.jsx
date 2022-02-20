import CardLists from "./CardLists"
import { Link } from 'react-router-dom'
import "./CardSection.css"

function CardSection({ sectionName, title, destination = '', data = [] }) {
  return (
    <div className={`CardSection ${sectionName}`}>
      <div className="d-flex justify-content-between card-section-header">
        <h3>{ title }</h3>
        <Link to={destination} className="see-more">See more</Link>
      </div>
      <CardLists data={data} sectionName={sectionName} />
    </div>
  );
}

export default CardSection