import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RepairForm from '../repair/repairlist.js'


class RepairHome extends React.Component {

  constructor(props){
    super(props);
    this.state = {isSelected: false};
    this.handleClick = this.handleClick.bind(this)
    //this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('Hello')
    this.setState(state=>({
      isSelected :true
    }));

  }



  render(){
    if(this.state.isSelected){
      return(
      <RepairForm/>
      );
    }

    else{
      return (
        <Container>
        <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://i0.wp.com/www.houseclap.com/wp-content/uploads/2019/07/washer.jpg" />
        <Card.Body>
        <Card.Title>Washing Machine</Card.Title>
        <Card.Text>
        Find technicians realted to Washing Machine nearby your location. You will have to provide your name and phone number for ease of accessebility.
        </Card.Text>
        <Button variant="danger" onClick={this.handleClick}>Select</Button>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>

      );
    }


  }
}

export default RepairHome;
