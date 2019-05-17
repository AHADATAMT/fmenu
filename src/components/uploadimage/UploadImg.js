import React, { Component } from 'react'
import { Label, Input } from 'reactstrap';


export default class UploadImg extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imageURL: '',
        };
    }

    // handleUploadImage(ev) {
    //     ev.preventDefault();
    //     // handle size file
    //     const data = new FormData();
    //     data.append('file', this.uploadInput.files[0]);
    //     data.append('filename', this.fileName.value);

    //     fetch('http://localhost:5000/upload', {
    //         method: 'POST',
    //         body: data,
    //     }).then((response) => {
    //         response.json().then((body) => {
    //             this.setState({ imageURL: `http://localhost:8000/${body.file}` });
    //         });
    //     });
    // }

    handleImageChange = (event) => {
        let file = "";
        console.log(event.target.files[0])
        if (event.target.files[0] !== undefined) {
            file = event.target.files[0]
        } else
            return

        this.setState({
            imageObject: URL.createObjectURL(file)
        })
        
        this.props.handleImageUpload(file)
    }
    // return image data to form
    render() {
        return (
            <div>
                <div className="form-label-group">
                    <Input type="file" name="imglogo" id="logo" required className="form-control" onChange={this.handleImageChange} />
                    <Label for="logo">Logo</Label>
                </div>
                <p>Preview image</p>
                <img src={this.state.imageObject} alt="img" width={150} height={150} />
            </div>
        );
    }
}