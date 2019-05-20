import React, { Component } from 'react'
import { Label, Input } from 'reactstrap';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'fmenu_bmt';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/bmthang94/upload';


export default class UploadImg extends Component {

    constructor(props) {
        super(props);

        this.state = {
            uploadedFileCloudinaryUrl: '',
            loading: false
        };
    }
    handleImageUpload(file) {
        this.setState({ loading: true })
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            this.setState({ loading: false })
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
                this.props.handleImageUpload_(response.body.secure_url)
            }
        });
    }
    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    render() {
        return (
            <div>
                <div className="FileUpload">
                    <Dropzone
                        onDrop={this.onImageDrop.bind(this)}
                        accept="image/png, image/jpeg"
                        multiple={false}>
                        {({ getRootProps, getInputProps }) => {
                            return (
                                <div
                                    {...getRootProps()}
                                >
                                    <input {...getInputProps()} />
                                    {
                                        <p>Try dropping some files here, or click to select files to upload.</p>
                                    }
                                </div>
                            )
                        }}
                    </Dropzone>
                    <div>
                        <p>Preview Image here:</p>
                        {!this.state.loading ? null : <p>Loading...</p>}

                        {this.state.uploadedFileCloudinaryUrl === '' ? null :
                            <div>
                                <p>{this.state.uploadedFile.name}</p>
                                <img src={this.state.uploadedFileCloudinaryUrl} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}