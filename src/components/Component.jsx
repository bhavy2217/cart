// https://drive.google.com/file/d/1He0eKvW00CoimDgEkaLS8C-UpgAoGyDh/view
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function Component() {
    const [post, setpost] = useState([])
    // const param = useParams();
    console.log("post", post);

    const getAllPosts = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                console.log(response);
                setpost(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    };
    useEffect(() => {
        getAllPosts();
    }, [])

    return (
        <>
            {/* Component {param.id} */}
            {/* <div className="card container" style={{ width: "18rem", display: "grid" }}>
                <div className="card-body">
                            <h5 className="card-title">{p.id}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{p.title}</h6>
                            <p className="card-text">{p.body}</p>
                            <Link to={`/posts/${p.id}`}>See Details</Link>
                            <Link to={`/posts/${p.id}`} className="card-link">Link</Link>
                            </div>
                            </div>
                        </div> */}
            <h1 className='text-center '>Posts</h1>
            <div className="container-fluid row">
                {post.map((p) => (
                    <div key={p.id} className="col col-md-4" >
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title ">{p.id}</h5>
                                <h5 className="card-title ">{p.title}</h5>
                                <p className="card-text">{p.body}</p>
                                <Link to={`/posts/${p.id}`} className="btn btn-primary">Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* 
            {post.map((item) => (
                <div key={item.id}>
                    <div>UserId : {item.userId}</div>
                    <div>Id : {item.id}</div>
                    <div>Title : {item.title}</div>
                    <div>Body : {item.body}</div>
                    <Link to={`/posts/${item.id}`}>See Details</Link>

                    <hr />
                </div>
            ))} */}
        </>
    )
}
export default Component;

