import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import {
    Button,
    FormFeedback,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import data from "../../data";

class ContactForm extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };
    handleSubmit(e) {
        e.preventDefault();
        const { name, email, subject, message } = this.state;
        let templateParams = {
            from_name: email,
            to_name: "gabrielserignoleba@gmail.com",
            subject: subject,
            message_html: message
        };
        emailjs.send(
            "gmail",
            "template_S6NL4tQn",
            templateParams,
            "user_UTwc4VWHkQWJXlpJs9unH"
        );
        this.resetForm();
    }
    resetForm() {
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value });
    };
    render() {
        return (
            <>
                <div className="container-fluid contactcon" id="contact">
                    <div className="container">
                        <h1 className="p-heading1 mt-5 pt-5 pb-3 text-white">
                            Get in Touch
                        </h1>
                        <p className="text-center pb-5 col-sm-8 offset-sm-2 text-white">
                            If you would like to work together on a project, or
                            you have an opening for a job opportunity, contact
                            me and I'll be sure to respond as soon as possible
                        </p>
                        <div className="row">
                            <div className="col-md-6 mb-5 pb-5">
                                <Form onSubmit={this.handleSubmit.bind(this)}>
                                    <FormGroup controlId="formBasicEmail">
                                        <Input
                                            type="email"
                                            name="email"
                                            bsSize="lg"
                                            value={this.state.email}
                                            className="text-success"
                                            onChange={this.handleChange.bind(
                                                this,
                                                "email"
                                            )}
                                            placeholder="Enter email"
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="formBasicName">
                                        <Input
                                            type="text"
                                            name="name"
                                            bsSize="lg"
                                            value={this.state.name}
                                            className="text-success"
                                            onChange={this.handleChange.bind(
                                                this,
                                                "name"
                                            )}
                                            placeholder="Name"
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="formBasicSubject">
                                        <Input
                                            type="text"
                                            name="subject"
                                            bsSize="lg"
                                            className="text-success"
                                            value={this.state.subject}
                                            onChange={this.handleChange.bind(
                                                this,
                                                "subject"
                                            )}
                                            placeholder="Subject"
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="formBasicMessage">
                                        <Input
                                            type="textarea"
                                            rows="4"
                                            name="message"
                                            bsSize="lg"
                                            className="text-success"
                                            value={this.state.message}
                                            onChange={this.handleChange.bind(
                                                this,
                                                "message"
                                            )}
                                            placeholder="Message"
                                        />
                                    </FormGroup>
                                    <Button
                                        className="btn-success px-5 py-3"
                                        variant="primary"
                                        type="submit"
                                    >
                                        SUBMIT
                                    </Button>
                                </Form>
                            </div>

                            <div className="col-sm-6 mb-5 pb-5">
                                {data.Profiles.map(function(profile) {
                                    return (
                                        <div>
                                            <h2 className="subtopic text-sm-right">
                                                Contact Details
                                            </h2>
                                            <h4 className="text-sm-right text-white mb-2">
                                                {profile.name}
                                            </h4>
                                            <h4 className="text-sm-right text-white mb-2">
                                                {profile.email}
                                            </h4>
                                            <h4 className="text-sm-right text-white mb-2">
                                                {profile.address}
                                            </h4>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default ContactForm;
