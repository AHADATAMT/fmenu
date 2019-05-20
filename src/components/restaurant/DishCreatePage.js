import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { Form, Card, CardBody, FormGroup, Label, Input, Container, Col, Row, FormText } from 'reactstrap';
import UploadImg from '../uploadimage/UploadImg'
import QRCode from 'qrcode.react'

export default class DishCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        showname: '',
        description: '',
        price: '',
        restaurant_id: this.props.match.params.id_restaurant,
        category: '',
        img_logo_url: '',
        optionsSeleted: []
      },
      options: [],
      categories: []
    }
    this.get_categories();
    this.get_options();
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

    fetch('http://localhost:5000/restaurant/create_dish', {
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
        if (body.categories.length > 0) {
          this.setState({
            categories: body.categories.length > 0 ? body.categories : ["Nothing found!"]
          })
        }
        console.log(body)
      });
    });
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
        if (body.options.length > 0) {
          this.setState({
            options: body.options.length > 0 ? body.options : ["Nothing found!"]
          })
        }
        console.log(body)
      });
    });
  }
  handleChangeOptionsMulti = (event) => {
    let opts = []
    for (let i = 0, len = event.target.options.length; i < len; i++) {
      let opt = event.target.options[i];

      if (opt.selected) {
        opts.push(opt.value);
      }
    }
    this.setState({
      form: {
        ...this.state.form,
        optionsSeleted: [...opts]
      }
    },()=>console.log(this.state.form))

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
                      <Input type="email" name="name" id="inputName" className="form-control" placeholder="Name" required autofocus onChange={this.handleChange} />
                      <Label for="inputName">Name</Label>
                    </div>

                    <div className="form-label-group">
                      <Input type="text" name="showname" id="inputShowName" className="form-control" placeholder="Show name" required onChange={this.handleChange} />
                      <Label for="inputShowName">Show name</Label>
                    </div>

                    <div className="form-label-group">
                      <Input type="text" name="price" id="inputPrice" className="form-control" placeholder="price" required onChange={this.handleChange} />
                      <Label for="inputPrice">Price</Label>
                    </div>

                    <div className="form-label-group">
                      <Input type="textarea" name="description" id="inputDescription" className="form-control" placeholder="Address" required onChange={this.handleChange} />
                      <Label for="inputDescription">Description</Label>
                    </div>

                    <div className="form-label-group">
                      <Input type="select" name="category" id="inputCategory" className="form-control" placeholder="category" required onChange={this.handleChange} >
                        <option hidden>Category</option>
                        {this.state.categories.map(category => (<option value={category.id}>{category.name}</option>))}
                      </Input>
                    </div>
                    <div className="form-group mt-3">
                      <Label for="optionsMulti">Options</Label>
                      <Input type="select" name="optionsMulti" id="optionsMulti" multiple onChange={this.handleChangeOptionsMulti}>
                        {this.state.options.map(option => (<option value={option.id}>{option.name}</option>))}
                      </Input>
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
