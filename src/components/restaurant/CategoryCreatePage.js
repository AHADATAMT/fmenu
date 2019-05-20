import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { Form, Card, CardBody, FormGroup, Label, Input, Container, Col, Row, FormText } from 'reactstrap';
import UploadImg from '../uploadimage/UploadImg'
import QRCode from 'qrcode.react'

export default class CategoryCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        showname: '',
      },
    }
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    }, () => console.log(this.state.form));
  }

  submitForm = () => {

    const data = new FormData();
    data.append('form', JSON.stringify(this.state.form));
    let token = sessionStorage.getItem('token');

    fetch('http://localhost:5000/restaurant/create_category', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`
      },
      body: data,
    }).then((response) => {
      console.log(response)
      response.json().then((result) => {
        this.setState({
          restaurant_id: result.restaurant
        })
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
                  <h5 className="card-title text-center">Create Category</h5>
                  <Form mehtod="POST" className="form-signin">
                    <hr className="my-4" />
                    <div className="form-label-group">
                      <Input type="text" name="name" id="inputName" className="form-control" placeholder="Name" required autofocus onChange={this.handleChange} />
                      <Label for="inputName">Name</Label>
                    </div>

                    <div className="form-label-group">
                      <Input type="text" name="showname" id="inputShowName" className="form-control" placeholder="Show name" required onChange={this.handleChange} />
                      <Label for="inputShowName">Show name</Label>
                    </div>
                    <a className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.submitForm}>Create</a>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div >
    )
  }
}
