import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { Form, Card, CardBody, FormGroup, Label, Input, Container, Col, Row, FormText } from 'reactstrap';
import UploadImg from '../uploadimage/UploadImg'
import QRCode from 'qrcode.react'

export default class RestaurantCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        hotline: '',
        address: '',
        description: '',
        img_logo_url: ""
      },
      restaurant_id: ""
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

  handleImageUpload_url = (imgData) => {
    this.setState({
      form: {
        ...this.state.form,
        img_logo_url: imgData
      }
    }, () => console.log(this.state.form.img_logo_url));
  }

  submitForm = () => {
    if (!this.state.form.img_logo_url)
      return false

    const data = new FormData();
    data.append('form', JSON.stringify(this.state.form));
    let token = sessionStorage.getItem('token');

    fetch('http://localhost:5000/restaurant/create', {
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
    console.log("submitnow: " + this.state.isSubmitNow)
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            <Col sm="9" md="7" lg="10" className="mx-auto">
              <Card className="card-signin my-5">
                <CardBody className="card-body">
                  <h5 className="card-title text-center">New Restaurant</h5>
                  <Form mehtod="POST" className="form-signin">
                    <hr className="my-4" />
                    <div className="form-label-group">
                      <Input type="email" name="name" id="inputName" className="form-control" placeholder="Name" required autofocus onChange={this.handleChange} />
                      <Label for="inputName">Name</Label>
                    </div>

                    <div className="form-label-group">
                      <Input type="text" name="hotline" id="inputHotline" className="form-control" placeholder="Hotline" required onChange={this.handleChange} />
                      <Label for="inputHotline">Hotline</Label>
                    </div>

                    <div className="form-label-group">
                      <Input type="text" name="address" id="inputAddress" className="form-control" placeholder="Address" required onChange={this.handleChange} />
                      <Label for="inputAddress">Address</Label>
                    </div>

                    <div className="form-label-group">
                      <Input type="textarea" name="description" id="inputDescription" className="form-control" placeholder="description" required onChange={this.handleChange} />
                      <Label for="inputDescription">Description</Label>
                    </div>

                    <UploadImg handleImageUpload_={this.handleImageUpload_url} />
                    <a className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.submitForm}>Create</a>
                  </Form>
                  {this.state.restaurant_id === '' ? null : <QRCode value={"http://localhost:3000/restaurant/"+this.state.restaurant_id} />}
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div >
    )
  }
}
