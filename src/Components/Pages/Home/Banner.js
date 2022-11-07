import { Button } from 'bootstrap';
import React from 'react';
import { FaUmbrella, FaPlane, FaCar, FaBed } from 'react-icons/fa';


const Banner = () => {
    return (
        <section className='bg-dark py-5 text-white'>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <h1 className="text-white text-start fs-1 fw-bolder">Plan Your Travel Now!
                        </h1>
                        <p className="mb-0 text-start">
                            Experience the various exciting tour and travel packages and Make hotel reservations, find vacation packages, search cheap hotels and events
                        </p>
                        <div className="features  mt-4">
                            <div className="d-flex text-center">
                                <div className="mx-1 border border-1 border-light" style={{ width: '90px', height: '90px', borderRadius: '5px' }}>
                                    <FaUmbrella className='fs-2 mt-3'></FaUmbrella>
                                    <p>Tour</p>
                                </div>
                                <div className="mx-1 border border-1 border-light" style={{ width: '90px', height: '90px', borderRadius: '5px' }}>
                                    <FaPlane className='fs-2 mt-3'></FaPlane>
                                    <p>Flight</p>
                                </div>
                                <div className="mx-1 border border-1 border-light" style={{ width: '90px', height: '90px', borderRadius: '5px' }}>
                                    <FaCar className='fs-2 mt-3'></FaCar>
                                    <p>Car Rental</p>
                                </div>
                                <div className="mx-1 border border-1 border-light" style={{ width: '90px', height: '90px', borderRadius: '5px' }}>
                                    <FaBed className='fs-2 mt-3'></FaBed>
                                    <p>Hotel</p>
                                </div>
                            </div>
                            <div className=" mt-4">
                                <button className="bg-white btn py-2 px-3 fw-bolder mx-2">See Packages</button>
                                <button className="bg-white btn py-2 px-3 fw-bolder mx-2">Check Reviews</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src="banner.jpg" className='rounded img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;