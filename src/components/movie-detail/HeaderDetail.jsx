import './HeaderDetail.css'

function HeaderDetail({ poster_path = '', title, genres = [], description = '', runtime = '', score = '', tagline = '' }) {
  const genresNames = genres.map(genre => genre.name)
  return (
    <header className='HeaderDetail d-flex'>
      <div className="header-detail-poster">
        <img src={`${process.env.REACT_APP_IMAGE_PREFIX_URL}${poster_path}`} alt={title} />
      </div>
      <div className="header-detail-main d-flex flex-column flex-grow-1">
        <h1>{title}</h1>
        <div className="genres-runtime d-flex flex-row">
          <p>{genresNames.join(', ')}</p>
          <p>{runtime}</p>
        </div>
        <div className="score">
          <h4>{score}</h4>
        </div>
        <p className="tagline">{tagline}</p>
        <div className="description">
          <h4>Desctiption</h4>
          <p>{description}</p>
        </div>
      </div>
    </header>
  );
}

export default HeaderDetail;