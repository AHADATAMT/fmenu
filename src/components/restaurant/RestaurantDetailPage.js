import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import Menu from './Menu'
import { Form, Card, CardBody, FormGroup, Label, Input, Container, Col, Row } from 'reactstrap';

export default class RestaurantDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurant: null,
      menu: null
    }
    let res_id = this.props.match.params.id_restaurant;
    this.get_restaurants(res_id)
  }
  get_restaurants = (res_id) => {
    let token = sessionStorage.getItem('token');
    console.log(token)
    return fetch('http://localhost:5000/restaurant/' + res_id, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`
      }
    }).then((response) => {
      console.log(response)
      response.json().then((body) => {
        this.setState({
          restaurant: body.restaurant.length > 0 ? body.restaurant[0] : ["Nothing found!"],
          menu: body.menu.length > 0 ? body.menu : ["Nothing found!"]
        }, () => console.log(this.state))

      });
    });
  }
  render() {
    let restaurant = this.state.restaurant;

    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            <Col sm="9" md="7" lg="10" className="mx-auto">
              <Card className="card-signin">
                {restaurant !== null ?
                  <CardBody className="card-body">

                    <img src={restaurant.image_url} />
                    <h5 className="card-title text-center">{restaurant.name}</h5>
                    <hr className="my-4" />
                    <p>Hotline: {restaurant.hotline}</p>
                    <p>Address: {restaurant.address}</p>
                    <p>Description: {restaurant.description}</p>
                    <Menu menu={this.state.menu}/>
                  </CardBody>
                  :
                  <CardBody className="card-body">
                    <p>Loading. . .</p>
                  </CardBody>
                }
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
}
}
