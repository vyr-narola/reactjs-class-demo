import React, { Component } from 'react';
import { Col, Container, Form, InputGroup, Row, Table, Button } from 'react-bootstrap';
import Data from '../Data.json';

export default class Task extends Component {
    state = {
        data: [],
        id: 0,
        title: "",
        description: "",
        message: "",
    }
    componentDidMount() {
        this.setState({ data: [...Data] });
    }

    handleOnChange(key, value) {
        this.setState({ [key]: value });
    }

    handlesubmitBtn() {
        var newid = Math.max.apply(Math, this.state.data.map(function (o) { return o.id; })) + 1;
        console.log(newid);
        this.state.data.push({
            id: newid,
            title: this.state.title,
            description: this.state.description,
        });
        this.setState({
            //message : "Added Successfully", 
            id: 0,
            title: "",
            description: "",
        });
    }

    render() {
        return (
            <div>
                <Container >
                    <Form>
                        <Row>
                            <Col md="4">
                                <Form.Group className="mb-3" controlId="formTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" onChange={(e) => this.handleOnChange("title", e.target.value)} value={this.state.title} placeholder="Title" />
                                </Form.Group>
                            </Col>
                            <Col md="4">
                                <Form.Group className="mb-3" controlId="formTitle">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="textarea" onChange={(e) => this.handleOnChange("description", e.target.value)} value={this.state.description} placeholder="Description" />
                                </Form.Group>
                            </Col>
                            <Col md="6">
                                <Form.Label>{this.state.message}</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Button variant="primary" className="float-right col-4" onClick={() => this.handlesubmitBtn()} type="button">
                                Submit
                            </Button>
                        </Row>
                    </Form>
                    <Table striped bordered hover borderless={false}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}
