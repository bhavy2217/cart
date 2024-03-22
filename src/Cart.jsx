import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EmptyCart, RemoveCartItem } from './Redux/Action/CartAction';
import { Link } from 'react-router-dom';

function Cart() {
    const [showAlert, setShowAlert] = useState(false);
    const cart = useSelector((state) => state.CartReducer.cart);
    const dispatch = useDispatch();

    const handleEmptyCart = () => {
        dispatch(EmptyCart([]));
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }
    const handleRemoveItem = (id) => {
        const filterData = cart.filter((item) => item.id !== id)
        console.log(filterData);
        dispatch(RemoveCartItem(filterData))
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);

    }
    return (
        <>
            <div style={{ marginTop: "10px", }}>
                <Link to="/" style={{ marginLeft: "10px" }}>
                    <button type="button" className="btn btn-outline-primary">Previous</button>
                </Link>
                <button onClick={handleEmptyCart} type="button" style={{ marginLeft: "5px" }} className="btn btn-outline-danger">Empty Cart</button>
            </div>
            <hr />
            <hr />
            {/* {cart.map((e) => (
                <div key={e.id}>
                <h3>Id : {e.id}</h3>
                <h3>Title : {e.title}</h3>
                <p>Body : {e.body}</p>
                <button onClick={() => handleRemoveItem(e.id)}type="button" className="btn btn-outline-danger">Remove</button>
                <hr />
                </div>
            ))} */}
            <div className="container-fluid row " style={{ margin: "auto" }}>
                {cart.map((p) => (
                    <div key={p.id} className="col col-md-4 " style={{ marginTop: "10px" }}>
                        <div className="card" >
                            <div className="card-body" style={{ height: "300px", border: "1px solid gray" }}>
                                <h5 className="card-title ">{p.id}</h5>
                                <h5 className="card-title ">{p.title}</h5>
                                <p className="card-text ">{p.body}</p>
                                <Link to={`/posts/${p.id}`}>See Details</Link><br />
                                <button onClick={() => handleRemoveItem(p.id)} type="button" className="btn btn-outline-danger">Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
                {showAlert && (
                    <div className="alert alert-danger alert-dismissible fade show" style={{ position: "fixed", width: "100%", top: "0px" }} role="alert">
                        Product Removed from <strong>Cart</strong>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Cart;