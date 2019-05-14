import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap';

export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <Row>
            <Col>
            <a href={'/login'}>Login</a>
            <a href="#">Register</a>
            </Col>
        </Row>
      </Container>
    )
  }
}
