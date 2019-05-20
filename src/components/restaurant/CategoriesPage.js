import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { Form, Card, CardBody, FormGroup, Label, Input, Container, Col, Row, FormText } from 'reactstrap';
import UploadImg from '../uploadimage/UploadImg'
import QRCode from 'qrcode.react'

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        showname: '',
        restaurant_id: this.props.match.params.id_restaurant,
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

  handleImageUpload_url = (imgData) => {
    this.setState({
      img_logo_url: imgData
    }, () => console.log(this.state.img_logo_url));
  }

  submitForm = () => {
    if (!this.state.img_logo_url)
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
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            <Col sm="9" md="7" lg="10" className="mx-auto">
              <Card className="card-signin my-5">
                <CardBody className="card-body">
                  <h5 className="card-title text-center">Create Dish</h5>
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

                    <div className="form-label-group">
                      <Input type="text" name="description" id="inputDescription" className="form-control" placeholder="description" required onChange={this.handleChange} />
                      <Label for="inputDescription">Price</Label>
                    </div>
                    <UploadImg handleImageUpload_={this.handleImageUpload_url} />
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
