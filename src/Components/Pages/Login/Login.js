import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../UserContext/AuthProvicer';
import {GoogleAuthProvider} from 'firebase/auth'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const { loginWithGoogle, login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
const googleLogin = () => {
    loginWithGoogle(googleProvider)
    .then(res => {
        toast.success("Login With Google Successfully!", {
            position: toast.POSITION.TOP_CENTER
          })
        navigate(from, { replace: true });
    })
    .catch(err => console.log(err.message))
}
    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="px-4 py-5 rounded bg-black">
                        <h3 className="text-white mb-4 text-center fw-bolder">
                            Login Here!
                        </h3>
                        <Form className='text-white fw-bold text-start'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className='bg-white mt-2 w-100 fw-bolder text-black' type="submit">
                                Login
                            </Button>
                        </Form>
                        <div className="login-with-googlke">
                            <h4 className="text-white mt-3 fw-bolder">
                                Sign in using
                            </h4>
                            <Button onClick={googleLogin} className='w-100 fw-bolder btn-danger'><FaGoogle></FaGoogle> Google</Button>


                        </div>
                        <div className="d-flex mt-2 justify-content-between">
                            <Link className='text-decoration-none fw-bolder' to="/forget-password">Forget Password?</Link>
                            <span className='text-white fw-bolder'>
                                New Here?
                                <Link className='text-decoration-none fw-bolder' to="/register"> Register!</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;