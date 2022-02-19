import { useParams } from 'react-router-dom'

function TVShowDetail() {
  const params = useParams()
  return (
    <div>
      tv shows with id {params.id}
    </div>
  );
}

export default TVShowDetail;