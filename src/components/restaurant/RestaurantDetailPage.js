import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { Form, Card, CardBody, FormGroup, Label, Input, Container, Col, Row } from 'reactstrap';

export default class RestaurantDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
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
          restaurants: body.restaurants.length > 0 ? body.restaurants : ["Nothing found!"]
        })
        console.log(body)
      });
    });
  }
  componentDidMount() {
    console.log()
    let res_id = this.props.match.params.id;
    this.get_restaurants(res_id)
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
                    (<p>{restaurant.name} | {restaurant.hotline} | {restaurant.address} | {restaurant.description}</p>)
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
