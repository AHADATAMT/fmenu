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
  remove_restaurant = (restaurant) => {
    let token = sessionStorage.getItem('token');
    return fetch('http://localhost:5000/restaurant/delete/' + restaurant.id, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`
      }
    }).then((response) => {
      console.log(response)
      response.json().then((body) => {
        console.log(body)
        if (body.success) {
          let current_restaurants = [...this.state.restaurants];
          let index = current_restaurants.indexOf(restaurant)
          delete current_restaurants[index];
          this.setState({
            restaurants: [...current_restaurants]
          })
        }
      });
    });
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
                  {this.state.restaurants.map((restaurant) => {
                    if (restaurant !== undefined)
                      return (<p><a href={'/restaurant/' + restaurant.id}>{restaurant.name} </a>|
                     {restaurant.hotline} |
                     {restaurant.address} |
                     {restaurant.description}|-
                     <a href="#" onClick={() => this.remove_restaurant(restaurant)}>remove </a></p>)
                  }
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
