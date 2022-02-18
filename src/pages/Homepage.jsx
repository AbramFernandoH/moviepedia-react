import CardSection from "../components/cards/CardSection"
import TopJumbotron from "../components/jumbotron/TopJumbotron"
import { Container } from 'react-bootstrap'

function Homepage() {
  return (
    <div className="Homepage">
      <TopJumbotron />
      <Container>
        <div className="now-playing mt-5">
          <h1>Now Playing</h1>
          <CardSection sectionName='movies' title='Movies' destination='' />
          <CardSection sectionName='tv-shows' title='TV Shows' destination='' />
        </div>
        <div className="top-rated mt-5">
          <h1>Top Rated</h1>
          <CardSection sectionName='movies' title='Movies' destination='' />
          <CardSection sectionName='tv-shows' title='TV Shows' destination='' />
        </div>
        <div className="popular mt-5">
          <h1>Popular</h1>
          <CardSection sectionName='movies' title='Movies' destination='' />
          <CardSection sectionName='tv-shows' title='TV Shows' destination='' />
        </div>
        <div className="upcoming mt-5">
          <h1>Upcoming</h1>
          <CardSection sectionName='movies' title='Movies' destination='' />
        </div>
      </Container>
    </div>
  );
}

export default Homepage;