import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Footer from './Footer';
const Contactus = () => {
  return (
    <>
    <Header/>
      <h1 className="page-heading">Contact Me</h1>
      <Form>
        <Container className="custom-container">
      <Row>
       <Col><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter First Name</Form.Label>
        <Form.Control type="text"  />
      </Form.Group></Col>

      <Col><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Last Name</Form.Label>
        <Form.Control type="email"/>
      </Form.Group></Col>

      </Row>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" placeholder="Message" rows={3} />
      </Form.Group>

      <Button variant="outline-primary btn">Send Message</Button>
      </Container>
    </Form>
    <Footer/>
    </>
  )
}

export default Contactus