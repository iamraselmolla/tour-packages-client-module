import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/AuthProvicer';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/Usetitle';

const Register = () => {
    const {createUser,updateInfo, user} = useContext(AuthContext);
    const navigate = useNavigate()
    const [accept, setAccept] = useState(false);
    useTitle('Register')
    const handleBtn = e => {
        setAccept(e.target.checked)
    }
const handleCreateUser = (e) => {
    e.preventDefault()
    createUser(e.target.email.value, e.target.password.value)
    // const profileData = {displayName: e.target.fullname.value, photoURL: e.target.photourl.value}
    .then(res => {
       toast.success('Registration Completed! Please Login Here', {
        position: toast.POSITION.TOP_CENTER
      })
       e.target.reset();
       return;
    })
    .catch(err => toast(err.message))
}

    return (
        <div className="container py-4">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                    <div className="px-4 py-5 rounded bg-black">
                        <h3 className="text-white mb-4 text-center fw-bolder">
                            {!user ? 'Create an account!' : 'You are currently Logged in here. Please logout first to register'}
                        </h3>
                        {!user && 
                        <Form onSubmit={handleCreateUser} className='text-white fw-bold text-start'>
                            <Form.Group className="mb-3" controlId="formBasicusername">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control name="fullname" type="text" placeholder="Full Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmailForSignUp">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email"  type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPasswordforsignup">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPicforsignup">
                                <Form.Label>Profile Photo Image  LInk</Form.Label>
                                <Form.Control name="photourl" type="url" placeholder="URL" />
                            </Form.Group>
                            <Form.Group className="mb-3" onClick={handleBtn} controlId="formBasicCheckbox">
                                <Form.Check className='d-inline-block' type="checkbox" label="Accept Our" /> <Link className='text-decoration-none' to="/terms-conditions">Terms and Conditions</Link>
                            </Form.Group>
                            <Button disabled={!accept} className='bg-white mt-2 w-100 fw-bolder text-black' type="submit">
                                Register
                            </Button>
                        </Form>}
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