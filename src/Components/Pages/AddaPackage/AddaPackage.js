import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../UserContext/AuthProvicer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddaPackage = () => {
    const { user } = useContext(AuthContext)
    const hanldepackageSaveToDB = (e) => {
        e.preventDefault();
        const name = e.target.place.value;
        const description = e.target.description.value;
        const price = '$' + e.target.price.value;
        const ratings = e.target.review.value;
        const img = e.target.url.value;
        const email = user?.email;
        const packageInfo = { email, name, img, description, price, ratings };
        // const insertTime = new TimeSt
        fetch('http://localhost:5000/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(packageInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Package added successfully')
                    e.target.reset()
                }
            })
            .catch(err => console.log(err.message))
    }
    return (
        <section className='container py-5'>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="bg-black rounded text-white px-4 py-5">
                        <h2 className="fw-bolder text-center">
                            Add Package
                        </h2>
                        <Form onSubmit={hanldepackageSaveToDB}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Tourist Place name</Form.Label>
                                <Form.Control name="place" type="text" placeholder="Tourist Place" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Description</Form.Label>
                                <Form.Control name="description" as="textarea" placeholder="Tourist Place Description" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Price</Form.Label>
                                <Form.Control name="price" type="number" placeholder="$" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Review</Form.Label>
                                <Form.Control name="review" type="text" placeholder="Review" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Photo URL</Form.Label>
                                <Form.Control name="url" type="url" placeholder="Review" />
                            </Form.Group>
                            <Button className='bg-white border-0 fw-bolder text-black fw-bolder px-5 py-3' type="submit">
                                Upload This Package
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddaPackage;