import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="px-4 py-5 rounded bg-black">
                        <h3 className="text-white mb-4 text-center fw-bolder">
                            Create an account!
                        </h3>
                        <Form className='text-white fw-bold text-start'>
                            <Form.Group className="mb-3" controlId="formBasicusername">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Full Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmailForSignUp">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPasswordforsignup">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check className='d-inline-block' type="checkbox" label="Accept Our" /> <Link className='text-decoration-none' to="/terms-conditions">Terms and Conditions</Link>
                            </Form.Group>
                            <Button className='bg-white mt-2 w-100 fw-bolder text-black' type="submit">
                                Register
                            </Button>
                        </Form>
                        <div className="d-flex mt-2 justify-content-between">
                            <span className='text-white fw-bolder'>
                                Already Registered?
                                <Link className='text-decoration-none fw-bolder' to="/login"> Login!</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;