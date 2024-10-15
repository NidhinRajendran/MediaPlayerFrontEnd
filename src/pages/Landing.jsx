import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
    <Container className='d-flex justify-content-center align-items-center my-5 mx-4'>
      <Row className='mt-5'>
        <Col md={6}>
        <h2>Welcome to <span className='text-warning'>Media Player</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloribus temporibus, necessitatibus nihil ipsam adipisci earum aliquid! Labore perferendis nostrum aliquam voluptate cupiditate culpa repellendus totam. Tempora explicabo similique molestiae!</p>
        <Link to={'/home'}><button className='btn btn-warning'>Get Started</button></Link>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className='d-flex justify-content-center align-items-center'>
        <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" className='w-75 rounded-circle' />
        
        </Col>

      </Row>
    </Container>

    <h2 className='text-center mt-5'>Features</h2>
    <Container className='mt-3 mb-5'>
        
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
        <Row>
        <Col md={4}>
        <Card style={{ width: '100%' }} className='mt-5 rounded-5'>
      <Card.Img variant="top" src="https://phoneky.co.uk/thumbs/screensavers/down/abstract/blueredslo_8ei58mfa.gif" style={{width:'100%',height:'300px'}} className='p-3 rounded-5'/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col md={4}>
        <Card style={{ width: '100%' }} className='mt-5 rounded-5'>
      <Card.Img variant="top" src="https://img.izismile.com/img/img4/20110201/1000/stunning_animated_gifs_29.gif" style={{width:'100%',height:'300px'}} className='p-3 rounded-5'/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col md={4}>
        <Card style={{ width: '100%' }} className='mt-5 rounded-5'>
      <Card.Img variant="top" src="http://img.izismile.com/img/img4/20110201/1000/stunning_animated_gifs_06.gif" style={{width:'100%',height:'300px'}} className='p-3 rounded-5'/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        

        </Row>
        
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>

    <div className='container'>
        <div className='row p-5'>
            <div className="col-md-1"></div>
            <div className="col-md-10 border border-secondary">
                <div className='row'>
                    <div className='col-md-6'>
                        <h4 className='text-warning my-3 mx-3'>Simple fast and Powerful</h4>
                        
                          
                            <p className='px-3'><span className='fs-5'>Play Everything : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <p className='px-3'><span className='fs-5'>Play Everything : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className='px-3'><span className='fs-5'>Play Everything : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                          
                          
                          
                    </div>
                    <div className='col-md-6'>
                    <iframe width="100%" height="328" src="https://www.youtube.com/embed/ZdMZ40GSVmc" title="Leo - Badass Video | Thalapathy Vijay | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </div>

            </div>
            <div className="col-md-1"></div>
        </div>
    </div>
    </>
  )
}

export default Landing