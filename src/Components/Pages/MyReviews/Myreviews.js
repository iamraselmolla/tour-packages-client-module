import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/Usetitle';
import { AuthContext } from '../../UserContext/AuthProvicer';
import SingleReview from './SingleReview';
import Table from 'react-bootstrap/Table';
const Myreviews = () => {

    const { user } = useContext(AuthContext)
    const [activity, setActivity] = useState([])
    useTitle('My Reviews')
    useEffect(() => {
        fetch(`http://localhost:5000/my-review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setActivity(data))
            .catch(err => console.log(err.message))
    }, [user?.email])
    return (
        <section className="container py-3">
            <div className="row">
            <h1 className="fw-bolder text-center">
                           Total Activity {activity.length}
                        </h1>
            </div>
            <div className="row">
                <div className="col">
                    <Table striped bordered hover variant="dark">
                        
                        <thead>
                            <tr>
                                <th>Service Information</th>
                                <th>Review</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activity.map(single => <SingleReview key={single._id} activityData={single}></SingleReview>)}
                        </tbody>
                    </Table>
                </div>
            </div>
        </section>
    );
};

export default Myreviews;