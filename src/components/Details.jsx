//https://drive.google.com/file/d/1TROmpCRFsy9hdkHGkGhHHttJzFiSpKX5/view
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/Action/CartAction'


function details() {
    const [showAlert, setShowAlert] = useState(false);
    const cart = useSelector((state) => state.CartReducer.cart);
    const dispatch = useDispatch();

    const param = useParams();
    // console.log("params", param);

    const [detail, setdetail] = useState({})

    const getAllPosts = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${param.id}`)
            .then(function (response) {
                console.log(response);
                setdetail(response.data)
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

    const handleAddToCart = (data) => {
        // console.log("data", data)
        dispatch(addToCart([...cart, data]));
        setShowAlert(true);

        // Hide the alert after a certain duration (e.g., 3 seconds)
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }


    return (
        <>
            <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                <Link to="/" style={{ marginTop: "10px", marginLeft: "10px" }}>
                    <button type="button" className="btn btn-outline-primary">Previous</button>
                </Link>
            </div>
            <div className="card container" >
                <div className="card-body">
                    <h5 className="card-title">User id : {detail.id}</h5>
                    <h5 className="card-title">Title : {detail.title}</h5>
                    <p className="card-text">{detail.body}</p>
                    {/* <Link to=""><button className='button'>Add to Cart</button></Link> */}
                    <button onClick={() => handleAddToCart(detail)} type="button" className="btn btn-outline-primary" style={{}}>Add to Cart</button>
                </div>
            </div>
            {showAlert && (
                <div className="alert alert-success alert-dismissible fade show" style={{ position: "fixed", width: "100%", top: "0px" }} role="alert">
                    Product Added to <strong>Cart</strong>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )}
        </>
    )
}

export default details


