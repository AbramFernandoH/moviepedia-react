import './topJumbotron.css'

function TopJumbotron() {
  return (
    <header className="top-jumbotron p-5 mb-4 text-white vh-100" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg)` }}>
      <div className="container-fluid py-5 h-100">
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="display-5 fw-bold brand-moviepedia">Moviepedia</h1>
          <p className="col-md-8 text-center jumbotron-txt">Watch anywhere, anytime</p>
        </div>
      </div>
    </header>
  );
}

export default TopJumbotron