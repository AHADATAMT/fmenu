import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { Form, Card, CardBody, FormGroup, Label, Input, Container, Col, Row } from 'reactstrap';

export default class Restaurant extends Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
  }
  get_restaurants = () => {
    let token = sessionStorage.getItem('token');
    console.log(token)
    return fetch('http://localhost:5000/restaurant/', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`
      }
    }).then((response) => {
      console.log(response)
      response.json().then((body) => {
        if (body.restaurants.length > 0) {
          this.setState({
            restaurants: body.restaurants.length > 0 ? body.restaurants : ["Nothing found!"]
          })
        }
        console.log(body)
      });
    });
  }
  componentDidMount() {
    this.get_restaurants()
  }
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            <Col sm="9" md="7" lg="10" className="mx-auto">
              <Card className="card-signin my-5">
                <CardBody className="card-body">
                  <h5 className="card-title text-center">All Restaurant</h5>
                  <hr className="my-4" />
                  {this.state.restaurants.map((restaurant) =>
                    (<p><a href={'/restaurant/' + restaurant.id}>{restaurant.name} </a>| {restaurant.hotline} | {restaurant.address} | {restaurant.description}</p>)
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
