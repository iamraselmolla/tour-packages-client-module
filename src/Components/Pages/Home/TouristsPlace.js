import React from 'react';
import TouristsIconPack from './TouristsIconPack';

const TouristsPlace = () => {
    return (
        <section className='py-5 container'>
            <div className="row text-center">
                <div className="px-2 d-inline-block py-2 text-white rounded bg-black">
                <h2 className="fs-1 fw-bold">
                    Top Tour Places in The World
                </h2>
                <p>
                    World's leading tour and travels Places in short scenario.
                </p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-6 col-lg-4 my-3">
                    <img src="1.png" className='img-fluid rounded-top' alt="" srcset="" />
                    <div className="bg-black rounded-bottom text-white py-3 px-2 d-flex justify-content-between">
                       <span> <b>RIO DE JANEIRO</b> (Brazil) </span>
                       <TouristsIconPack></TouristsIconPack>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-3">
                    <img src="2.png" className='img-fluid rounded-top' alt="" srcset="" />
                    <div className="bg-black rounded-bottom text-white py-3 px-2 d-flex justify-content-between">
                       <span> <b>RIO DE JANEIRO</b> (Brazil) </span>
                       <TouristsIconPack></TouristsIconPack>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-3">
                    <img src="3.png" className='img-fluid rounded-top' alt="" srcset="" />
                    <div className="bg-black rounded-bottom text-white py-3 px-2 d-flex justify-content-between">
                       <span> <b>RIO DE JANEIRO</b> (Brazil) </span>
                       <TouristsIconPack></TouristsIconPack>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-3">
                    <img src="4.png" className='img-fluid rounded-top' alt="" srcset="" />
                    <div className="bg-black rounded-bottom text-white py-3 px-2 d-flex justify-content-between">
                       <span> <b>RIO DE JANEIRO</b> (Brazil) </span>
                       <TouristsIconPack></TouristsIconPack>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-3">
                    <img src="5.png" className='img-fluid rounded-top' alt="" srcset="" />
                    <div className="bg-black rounded-bottom text-white py-3 px-2 d-flex justify-content-between">
                       <span> <b>RIO DE JANEIRO</b> (Brazil) </span>
                       <TouristsIconPack></TouristsIconPack>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-3">
                    <img src="6.png" className='img-fluid rounded-top' alt="" srcset="" />
                    <div className="bg-black rounded-bottom text-white py-3 px-2 d-flex justify-content-between">
                       <span> <b>RIO DE JANEIRO</b> (Brazil) </span>
                       <TouristsIconPack></TouristsIconPack>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TouristsPlace;