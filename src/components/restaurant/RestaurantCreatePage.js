import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { Form, Card, CardBody, FormGroup, Label, Input, Container, Col, Row, FormText } from 'reactstrap';
import UploadImg from '../uploadimage/UploadImg'
export default class RestaurantCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        hotline: '',
        address: '',
        description: '',
      },
      img_logo: "",
      selectFile: false
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

  handleImageUpload = (imgData) => {
    this.setState({
      img_logo: imgData
    }, () => console.log(this.state.img_logo));
  }
  submitForm = () => {
    const data = new FormData();
    data.append('file', this.state.img_logo);
    data.append('form', JSON.stringify(this.state.form));
    let token = sessionStorage.getItem('token');
    console.log(this.state.form);
    // fetch('http://localhost:5000/restaurant/create', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Token ${token}`
    //   },
    //   body: data,
    // }).then((response) => {
    //   console.log(response)
    //   response.json().then((body) => {
    //     console.log(body)
    //   });
    // });
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
                    <UploadImg handleImageUpload={this.handleImageUpload} />
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
