import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { Form, Card, CardBody, FormGroup, Label, Input, Container, Col, Row, FormText } from 'reactstrap';
import UploadImg from '../uploadimage/UploadImg'
import QRCode from 'qrcode.react'

export default class OptionCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        showname: '',
      },
      options: [{ option_0: "", price_0: "" }],
      restaurant_id: ''
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
  handleOptionsChange = (event) => {
    console.log(event.target.id[event.target.id.length - 1])
    let idOption = event.target.id[event.target.id.length - 1]
    let name = event.target.name;
    let value = event.target.value;
    let current_options = [...this.state.options];
    current_options[idOption][name] = value;
    this.setState({
      options: [...current_options],

    }, () => console.log(this.state.options));
  }
  handleImageUpload_url = (imgData) => {
    this.setState({
      img_logo_url: imgData
    }, () => console.log(this.state.img_logo_url));
  }

  submitForm = () => {
    
    const data = new FormData();
    data.append('form', JSON.stringify(this.state.form));
    data.append('options', JSON.stringify(this.state.options));
    let token = sessionStorage.getItem('token');
    console.log(token);
    fetch('http://localhost:5000/restaurant/create_option', {
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

  addRow = () => {
    let current_options = [...this.state.options];
    let lenOption = this.state.options.length;
    const new_option = {};
    new_option['option_' + lenOption] = '';
    new_option['price_' + lenOption] = '';
    current_options.push(new_option);

    this.setState({
      options: [...current_options]
    }, () => console.log(this.state.options))
  }

  removeRow = (i) => {
    let current_options = [...this.state.options];
    delete current_options[i];

    this.setState({
      options: [...current_options]
    }) 
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
                  <h5 className="card-title text-center">Create Options</h5>
                  <Form mehtod="POST" className="form-signin">
                    <hr className="my-4" />
                    <div className="form-label-group">
                      <Input type="email" name="name" id="inputName" className="form-control" placeholder="Name" required autofocus onChange={this.handleChange} />
                      <Label for="inputName">Name</Label>
                    </div>

                    <div className="form-label-group">
                      <Input type="text" name="showname" id="inputShowName" className="form-control" placeholder="Show name" required onChange={this.handleChange} />
                      <Label for="inputShowName">Show name</Label>
                    </div>
                    <table>
                      <tr>
                        <th>Option value</th>
                        <th>Price</th>
                        <th></th>
                      </tr>
                      {this.state.options.map((row, index) => {
                        if (row !== undefined)
                          return (
                            <tr>
                              <td><Input type="text" name={"option_" + index} id={"option_" + index} className="form-control" placeholder={"option #" + (index + 1)} required onChange={this.handleOptionsChange} /></td>
                              <td><Input type="number" name={"price_" + index} id={"price_" + index} className="form-control" placeholder={"price #" + (index + 1)} required onChange={this.handleOptionsChange} /></td>
                              <td><a href="#" onClick={() => {
                                this.removeRow(index)
                              }}>Delete</a></td>
                            </tr>
                          )
                      })}
                      <tr>
                        <td colspan="3" className="text-center"> <a className="btn btn-md btn-primary" href="#" onClick={this.addRow}>add row</a></td>
                      </tr>
                    </table>

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
