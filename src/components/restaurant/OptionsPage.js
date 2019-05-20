import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { Card, CardBody, Container, Col, Row } from 'reactstrap';

export default class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
    this.get_options()
  }
  get_options = () => {
    let token = sessionStorage.getItem('token');
    console.log(token)
    return fetch('http://localhost:5000/restaurant/options', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`
      }
    }).then((response) => {
      console.log(response)
      response.json().then((body) => {
        console.log(body)
        this.setState({
          options: body.options.length > 0 ? body.options : ["Nothing found!"]
        })
      });
    });
  }

  remove_options = (options) => {
    let token = sessionStorage.getItem('token');
    return fetch('http://localhost:5000/restaurant/delete/option/' + options.id, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`
      }
    }).then((response) => {
      console.log(response)
      response.json().then((body) => {
        console.log(body)
        if (body.success) {
          let current_options = [...this.state.options];
          let index = current_options.indexOf(options)
          delete current_options[index];
          this.setState({
            options: [...current_options]
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
                  <h5 className="card-title text-center">options</h5>
                  {this.state.options.map((options) => {
                    if (options !== undefined)
                      return (<p>
                        <a href={'options/' + options.id}>{options.name} </a>|
                        <a href="#" onClick={() => this.remove_options(options)}>remove</a>
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
