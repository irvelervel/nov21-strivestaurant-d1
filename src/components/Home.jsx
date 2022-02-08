import { Container, Row, Col } from 'react-bootstrap'

const Home = () => (
  <Container>
    <Row className='justify-content-center mt-3'>
      {/* I want the column to get full-width on smartphones, half width on desktop */}
      <Col xs={12} md={6}>
        PLACE THE CAROUSEL HERE :)
      </Col>
    </Row>
  </Container>
)

export default Home
