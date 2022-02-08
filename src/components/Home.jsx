import { Container, Row, Col, Carousel } from 'react-bootstrap'
import dishes from '../data/menu.json'
// dishes is the array of pastas!

const Home = () => (
  <Container>
    <Row className='justify-content-center mt-3'>
      {/* I want the column to get full-width on smartphones, half width on desktop */}
      <Col xs={12} md={6}>
        <Carousel>
          {dishes
            // .filter((dish) => dish.id < 3)
            .map((dish) => (
              <Carousel.Item key={dish.id}>
                <img
                  className='d-block w-100'
                  src={dish.image}
                  alt='First slide'
                />
                <Carousel.Caption>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      </Col>
    </Row>
  </Container>
)

export default Home
