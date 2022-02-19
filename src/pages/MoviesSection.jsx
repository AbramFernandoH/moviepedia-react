import { useState } from 'react'

function MoviesSection({ title = '', data = [] }) {
  const [moviesData, setMoviesData] = useState(data)

  return (
    <div className={`movies ${title}`}>
      
    </div>
  );
}

export default MoviesSection;