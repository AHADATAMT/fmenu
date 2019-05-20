import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { Card, CardBody, Container, Col, Row } from 'reactstrap';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
    this.get_categories()
  }
  get_categories = () => {
    let token = sessionStorage.getItem('token');
    console.log(token)
    return fetch('http://localhost:5000/restaurant/categories', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`
      }
    }).then((response) => {
      console.log(response)
      response.json().then((body) => {
        console.log(body)
        this.setState({
          categories: body.categories.length > 0 ? body.categories : ["Nothing found!"]
        })
      });
    });
  }

  remove_category = (category) => {
    let token = sessionStorage.getItem('token');
    return fetch('http://localhost:5000/restaurant/delete/' + category.id, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`
      }
    }).then((response) => {
      console.log(response)
      response.json().then((body) => {
        console.log(body)
        if (body.success) {
          let current_categories = [...this.state.categories];
          let index = current_categories.indexOf(category)
          delete current_categories[index];
          this.setState({
            categories: [...current_categories]
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
                  <h5 className="card-title text-center">Categories</h5>
                  {this.state.categories.map((category) => {
                    if (category !== undefined)
                      return (<p>
                        <a href={'category/' + category.id}>{category.name} </a>|
                        <a href="#" onClick={() => this.remove_category(category)}>remove </a>
                      </p>)
                  }
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div >
    )
  }
}
