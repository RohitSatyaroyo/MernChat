import React from 'react'
import {Container,Row,Col} from  'react-bootstrap'
import Sidebar from '../ChatComponents/sidebar'
import Messageform from '../ChatComponents/messageform'
export default function chat({data}) {
 
  return (
    <Container>
      <Row>
        <Col md={4}><Sidebar data={data}/></Col>
        <Col md={8}><Messageform/></Col>

      </Row>
    </Container>
  )
}
