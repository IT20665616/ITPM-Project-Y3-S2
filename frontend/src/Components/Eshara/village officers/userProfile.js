import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

function UserProfile() {
  const [officer, setOfficer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    console.log('Fetching officer data');
    axios.get(`http://localhost:8070/officers/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          setOfficer(res.data.officer);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  console.log('Rendering user profile component');

  if (!officer) {
    return <div>No officer found.</div>;
  }

  return (
    <Container className="mt-4">
      <Card className="bg-light">
        <Card.Header className="bg-primary text-white text-center"><h2>Grama Sevaka - User Profile</h2></Card.Header>
        <Card.Body>
          <Row>
            <Col md={4}>
              <Image src={officer.registrationCertificate} className="w-100 mb-3" />
            </Col>
            <Col md={8}>
              <h3>{officer.name}</h3>
              <hr />
              <Row>
                <Col xs={6}>
                  <p><strong>NIC:</strong></p>
                  <p>{officer.NIC}</p>
                  <p><strong>Address:</strong></p>
                  <p>{officer.address}</p>
                  <p><strong>Mobile No:</strong></p>
                  <p>{officer.mobileNo}</p>  
                </Col>
                <Col xs={6}>
                  <p><strong>Email:</strong></p>
                  <p>{officer.email}</p>
                  <p><strong>Registration No:</strong></p>
                  <p>{officer.registrationNo}</p>
                  <p><strong>Working Area:</strong></p>
                  <p>{officer.workingArea}</p>     
                </Col>
              </Row>
              <hr />
             
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserProfile;
