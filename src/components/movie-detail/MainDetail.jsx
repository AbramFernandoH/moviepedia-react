import MovieCardLists from "./MovieCardLists"
import './MainDetail.css'
import moment from "moment"

function MainDetail({ cast, status, language, budget, revenue, created_by, first_air_date }) {
  const englishName = language[0].english_name
  const casts = cast.filter(c => c.order < 11)
  return (
    <main className="MainDetail">
      <div className="infos d-flex justify-content-between">
        <div className="status">
          <h4>Status</h4>
          <p>{status}</p>
        </div>
        <div className="language">
          <h4>Language</h4>
          <p>{englishName}</p>
        </div>
        {
          budget !== undefined &&
          <div className="budget">
            <h4>Budget</h4>
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(budget)}</p>
          </div>
        }
        {
          revenue !== undefined &&
          <div className="revenue">
            <h4>Revenue</h4>
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(revenue)}</p>
          </div>
        }
        {
          created_by !== undefined &&
          <div className="created_by">
            <h4>Created By</h4>
            <p>{created_by[0].name}</p>
          </div>
        }
        {
          first_air_date !== undefined &&
          <div className="first_air_date">
            <h4>First Air Date</h4>
            <p>{moment(first_air_date).format('MMMM Do YYYY')}</p>
          </div>
        }
      </div>
      <div className="casts">
        <h3>Casts</h3>
        <MovieCardLists datas={casts} />
      </div>
    </main>
  );
}

export default MainDetail;