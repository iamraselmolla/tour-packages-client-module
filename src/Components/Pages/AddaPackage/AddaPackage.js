import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const AddaPackage = () => {
    return (
        <section className='container py-5'>
            <div className="row">
                <div className="col">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Tourist Place name</Form.Label>
                            <Form.Control type="text" placeholder="Tourist Place" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" placeholder="Tourist Place Description" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="$" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Review</Form.Label>
                            <Form.Control type="text" placeholder="Review" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="url" placeholder="Review" />
                        </Form.Group>
                        <Button className='bg-black fw-bolder text-white px-5 py-3' type="submit">
                            Upload This Package
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default AddaPackage;