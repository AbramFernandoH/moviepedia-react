import './cardGrid.css'
import moment from 'moment'

function CardGrid({ imagePath = '', title, release_date }) {
  return (
    <div className='CardGrid d-flex flex-column'>
      <img src={`${process.env.REACT_APP_IMAGE_PREFIX_URL}${imagePath}`} alt={title} className='card-grid-img' />
      <div className="infos-card text-center text-white bottom-0">
        <p className='title'>{title}</p>
        <p>{moment(release_date).format('MMMM Do YYYY')}</p>
      </div>
    </div>
  );
}

export default CardGrid;