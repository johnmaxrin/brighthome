import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RepairHome from '../repair/repairhome.js'

class List extends  React.Component {
  constructor(props){
    super(props);
    this.state = {isPlaceClicked: false};
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    
    this.setState(state=>({
      isPlaceClicked :true
    }));

  }

  render(){

    if(!(this.state.isPlaceClicked)){

      return(
        <Container>
        <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/698275/pexels-photo-698275.jpeg" />
        <Card.Body>
        <Card.Title>Adoor</Card.Title>
        <Card.Text>
          Adoor is one of the fastest growing towns in Pathanamthitta district of Kerala, India. It is the headquarters of Adoor Thaluk and Adoor Revenue Division.
        </Card.Text>
        <Button variant="danger" onClick={this.handleClick}>Find Nearby</Button>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg" />
        <Card.Body>
        <Card.Title>Koovappaly</Card.Title>
        <Card.Text>
          Koovappaly is one of the fastest growing towns in Kottyam district of Kerala, India. It is the headquarters of Koovappaly Thaluk and Koovappaly Revenue Division.
        </Card.Text>
        <Button variant="danger">Find Nearby</Button>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/1683492/pexels-photo-1683492.jpeg" />
        <Card.Body>
        <Card.Title>Pala</Card.Title>
        <Card.Text>
          Pala is one of the fastest growing towns in Kottyam district of Kerala, India. It is the headquarters of Pala Thaluk and Pala Revenue Division.
        </Card.Text>
        <Button variant="danger">Find Nearby</Button>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>

      );
    }
else{
  return (<RepairHome/>);
}


  }
}

export default List;
