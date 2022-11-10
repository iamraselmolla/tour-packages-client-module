import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/Usetitle';
import { AuthContext } from '../../UserContext/AuthProvicer';
import SingleReview from './SingleReview';
import Table from 'react-bootstrap/Table';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Myreviews = () => {

    const { user,logOut } = useContext(AuthContext)
    const [activity, setActivity] = useState([])
    useTitle('My Reviews')
    useEffect(() => {
        fetch(`http://localhost:5000/my-review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('tour-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                setActivity(data)
            })
            .catch(err => console.log(err.message))
    }, [user?.email]);
    const deleteComment = (id) => {
        if (window.confirm('Are you want to delete this comment')) {
            fetch(`http://localhost:5000/post-review/${id}`, {
                method: 'DELETE',
                headers: {

                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = activity.filter(s => s._id !== id);
                        setActivity(remaining);
                        toast.success('Comment deleted', {
                            position: toast.POSITION.TOP_CENTER
                        });
                    }
                })
        }
    }
    return (
        <section className="container py-3">
            <div className="row">
                <h1 className="fw-bolder text-center">
                    Total Activity {activity?.length}
                </h1>
            </div>
           {activity?.length >0 ? <div className="row">
                <div className="col">
                    <Table striped bordered hover variant="dark">

                        <thead>
                            <tr>
                                <th>Service Information</th>
                                <th>Review</th>
                                <th>Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activity?.map(single => <SingleReview key={single?._id} deleteComment={deleteComment} activityData={single}></SingleReview>)}
                        </tbody>
                    </Table>
                </div>
            </div> : <h2 className='text-white bg-danger text-center py-3 px-2 rounded'>You have no activity to show </h2>}
        </section>
    );
};

export default Myreviews;