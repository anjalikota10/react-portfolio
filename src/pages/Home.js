import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from "./Footer";
import Header from "./Header";



function Home() {
  return (
    <>
    <Header/>
     <Container className="main">
        <Row >
          <Col xs={6} md={4}>
            <Image
              src="/asset/images/Photo.jpeg"
              roundedCircle
              className="image"
            />
          </Col>
          <Col xs={6} md={4} className="data">
            {/* <Image src="holder.js/171x180" roundedCircle /> */}
            <h1>
               Leena Yemul
            </h1>
            <h4>Backend Developer</h4>
          </Col>
        </Row>
      </Container>

      <h1 className="page-heading">About us</h1>
      <Container className="aboutus">
        <Row>
          <Col>
            <img src="asset/images/about.jpg" />
          </Col>
          <Col className="aboutcontent">
            <h3 class="mb-4">Back End Developer</h3>
            <p>
              Back-end development means working on server-side software, which
              focuses on everything you can't see on a website. Back-end
              developers ensure the website performs correctly, focusing on
              databases, back-end logic, application programming interface
              (APIs), architecture, and servers.
            </p>
            <Row>
              <Col>
                <h6>
                  Name: <span class="text-secondary">Leena Yemul</span>
                </h6>
              </Col>
              <Col>
                <h6>
                  DOB: <span class="text-secondary">9 Octomber 2002</span>
                </h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>
                  Degree: <span class="text-secondary">B.Tech In IT</span>
                </h6>
              </Col>
              <Col>
                <h6>
                  Address:{" "}
                  <span class="text-secondary">Solapur, Maharashtra</span>
                </h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>
                  Working Status: <span class="text-secondary">Available</span>
                </h6>
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <h1 className="page-heading">Qualifications</h1>
      <Container style={{marginTop:"50px"}}>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  B.Tech{" "}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Shree Siddheshwar Women's College of Engineering,Solapur|2021-2024
                </Card.Subtitle>
                <Card.Text> SGPA : 8.10</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  Diploma{" "}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Shri Siddheshwar Women's Polytechnic,Solapur|2018-2021
                </Card.Subtitle>
                <Card.Text>Percentage:85.56</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  SSC{" "}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Valentine Circle English Medium School,Solapur|2021-2024
                </Card.Subtitle>
                <Card.Text>Percentage:60.40</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
       </Container>

     <h1 className="page-heading">Skills</h1>

<Container>
  <Row>
   <Col><h4>HTML</h4><br/><ProgressBar now={90} label="90%" /></Col> 
   <Col><h4>CSS</h4><br/><ProgressBar now={70} label="70%" /></Col> 
  </Row>
  <Row>
   <Col><h4>JS</h4><br/><ProgressBar now={60} label="60%" /></Col> 
   <Col><h4>PHP</h4><br/><ProgressBar now={90} label="90%" /></Col> 
  </Row>
  <Row>
   <Col><h4>JAVA</h4><br/><ProgressBar now={70} label="70%" /></Col> 
   <Col><h4>React</h4><br/><ProgressBar now={20} label="20%" /></Col> 
  </Row>
</Container>

    
<h1 className="page-heading">Projects</h1>

<Container style={{marginTop:"50px"}}>
  <Row>
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            Printing Press Web Application{" "}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Role:Team Leader
          </Card.Subtitle>
          <Card.Text>
            <li>
          Interactive : Printing Press Web Application: Developed a fully functional Printing Press Web Application using HTML, CSS, and JavaScript,MYSQL and PHP</li>
          <li>Logic implementation: Implemented the website logic to gather client information by adding size, color, and type of printing paper to the customer data list,setting the price by offering both online and offline payment methods, determining the delivery date, and notifying the customer.
            </li></Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            SiddhCamp{" "}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Role:Team Leader
          </Card.Subtitle>
          <Card.Text><li>The system enables students to securely register their information, which is stored in a database for real-time access by administrators, enhancing transparency and efficiency.</li>
          <li>TPOs can input job details, and the system automatically matches eligible students based on criteria like academic performance, ensuring qualified candidates receive notifications.</li>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            OCR{" "}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
           Role:Team Leader
          </Card.Subtitle>
          <Card.Text><li>Developed a OCR project using android</li><li>If we scan the any document it will convert into text.</li>
          <li>And Text file is saved in phone file manager with current date and time</li>
          <li>File save extension are .doc,.pdf,etc and also we can edit that file.</li></Card.Text>
        </Card.Body>
      </Card>
    </Col>
    
  </Row>
</Container>


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
  );
}

export default Home;




