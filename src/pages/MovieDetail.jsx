import { useParams } from 'react-router-dom'

function MovieDetail() {
  const params = useParams()
  
  return (
    <div>
      movie with id {params.id}
    </div>
  );
}

export default MovieDetail;