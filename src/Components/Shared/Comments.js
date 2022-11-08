import React from 'react';

const Comments = ({commentData}) => {
    console.log(commentData)
    const {author, comments, img} = commentData;
    return (
        <div className="d-flex p-2 rounded border my-4">
            <div className='me-3'>
                <img src={img} width="50px" className='rounded-circle' height="50px" alt=""/>
                <p className="fw-bolder mb-0">{author}</p>
            </div>
            <div className=''>
                {comments}
            </div>
        </div>
    );
};

export default Comments;