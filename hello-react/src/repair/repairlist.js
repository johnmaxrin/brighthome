import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class RepairForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {name:'none',phone:'phone',place:'place',machine:'machine'}
    this.handleClick = this.handleClick.bind(this)
    this.namehandle = this.namehandle.bind(this)
    this.phonehandle = this.phonehandle.bind(this)
  }

  handleClick(props){

    this.setState(state=>({
      place:'Adoor',
      machine:'Washing Machine'
    }));

    console.log({
      name: this.state.name,
      phone:this.state.phone,
      place:this.state.place,
      machine:this.state.machine


    });
  }

  namehandle(event){
    this.setState(state=>({
      name:event.target.value
    }));
  }

  phonehandle(event){
    this.setState(state=>({
      phone:event.target.value
    }))
  }


  render(){
    return(
      <Container>
      <Row>
      <Form>
   <Form.Group controlId="formBasicEmail">
     <Form.Label>Name</Form.Label>
     <Form.Control type="name" placeholder="Enter name" onChange={this.namehandle}/>
     <Form.Text className="text-muted">
       We'll share your name with anyone else.
     </Form.Text>
   </Form.Group>

   <Form.Group controlId="formBasicPassword">
     <Form.Label>Mobile Number</Form.Label>
     <Form.Control type="name" placeholder="Enter Number" onChange={this.phonehandle}/>
   </Form.Group>
   <Button variant="primary" onClick={this.handleClick}>
     Submit
   </Button>
 </Form>
 </Row>
 </Container>
    );
  }
}

export default RepairForm;
