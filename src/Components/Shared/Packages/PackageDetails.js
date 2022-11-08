import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaBinoculars,FaStar, FaStarHalf, FaHotel, FaBus, FaLuggageCart, FaCalendar } from 'react-icons/fa';


const PackageDetails = () => {
    const packageData = useLoaderData();
    const [allpackages, setpackages] = useState([])
    const { _id, name, img, description, price, ratings } = packageData
    useEffect(()=> {
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data =>setpackages(data) )
    },[])
    return (
        <section className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 rounded  bg-black">
                        <div className="position-sticky py-4 px-2 rounded text-white top-0">
                            <h3 className="text-white">
                                All Packages
                            </h3>
                            {allpackages.map(sp => <h5><Link className='text-decoration-none' to={`/packages/${sp._id}`}>{sp.name}</Link></h5>)}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="fw-bolder text-white bg-black px-2 py-3 rounded mb-3 fs-1">
                            {name}
                        </h2>
                        <img src={img} alt="" className='img-fluid' />
                        <div className="d-flex mt-3 gap-4">
                            <span style={{ width: '60px', height: '60px' }} className='justify-content-center d-flex align-items-center text-center border border-2 rounded'>
                                <FaBinoculars></FaBinoculars>
                            </span>
                            <span style={{ width: '60px', height: '60px' }} className='justify-content-center d-flex align-items-center text-center border border-2 rounded'>
                                <FaHotel></FaHotel>
                            </span>
                            <span style={{ width: '60px', height: '60px' }} className='justify-content-center d-flex align-items-center text-center border border-2 rounded'>
                                <FaBus></FaBus>
                            </span>
                            <span style={{ width: '60px', height: '60px' }} className='justify-content-center d-flex align-items-center text-center border border-2 rounded'>
                                <FaLuggageCart></FaLuggageCart>
                            </span>
                            <span style={{ width: '60px', height: '60px' }} className='justify-content-center d-flex align-items-center text-center border border-2 rounded'>
                                <FaCalendar></FaCalendar>
                            </span>
                        </div>
                        <div className="tour-details mt-2">
                            <p> {description}</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-white rounded  bg-black">
                       <div className="position-sticky py-4 top-0">
                       <img src={img} className="img-fluid" alt="" />
                       <h4 className="fw-bolder mt-2">
                        {name}
                       </h4>
                       <h5 className="mt-3">
                        Price: {price}
                       </h5>
                        <div className="review"> Review :
                            <FaStar className='text-danger ms-1'></FaStar>
                            <FaStar className='text-danger'></FaStar>
                            <FaStar className='text-danger'></FaStar>
                            <FaStar className='text-danger'></FaStar>
                            <FaStarHalf className='text-danger me-1'></FaStarHalf>
                            {ratings}
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackageDetails;