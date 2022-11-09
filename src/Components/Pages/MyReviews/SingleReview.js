import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../UserContext/AuthProvicer';


const SingleReview = ({ activityData }) => {
    const {serviceItems} = useContext(AuthContext)
    const { _id, packageId, comments } = activityData;
    const findServices = serviceItems?.find(s => s._id === packageId);
   
    return (

        <tr>
            <td className='ps-3'>
                <Link className='text-decoration-none fs-4 fw-bolder' to={`/services/${packageId}`}>{findServices?.name}</Link>
                <br />
                <PhotoProvider>
                    <PhotoView src={findServices?.img}>
                        <img src={findServices?.img} alt="" className='mt-2 rounded' width="100" />
                    </PhotoView>
                </PhotoProvider> 
                <p className="fw-bolder mb-0 fs-4">
                {findServices?.price}
                </p>
                

            </td>
            <td>{comments}</td>
            <td>Private Time</td>
        </tr>
    );
};

export default SingleReview;