// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }
import React, { createContext } from 'react'
import Component1 from './components/Component1'
import { useDispatch, useSelector } from 'react-redux'
import { CountIncrement, CountDecrement, CountZero, CountDividebytwo } from './Redux/Action/CountAction'
import { addToCart } from './Redux/Action/CartAction'

//-----Cart-----
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
//-----Cart-----

export const UserContext = createContext();

function App() {
    const [showAlert, setShowAlert] = useState(false);

    const dispatch = useDispatch();

    const handleValuePlus = () => {
        dispatch(CountIncrement(count + 1));
    }
    const handleValueMinus = () => {
        dispatch(CountDecrement(count == 0 ? 0 : count - 1));
    }
    const handleValueZero = () => {
        dispatch(CountZero(0));
    }
    const Divide = () => {
        if (count % 2 == 0) {
            dispatch(CountDividebytwo(count / 2));
        }
    }

    const count = useSelector((state) => state.CountReducer.counter);
    const cart = useSelector((state) => state.CartReducer.cart);
    console.log("cartcart", cart);
    // const numbers = [1, 2, 3, 4, 5];

    //---------Cart-------------
    const [post, setpost] = useState([])
    // const param = useParams();
    // console.log("post", post);
    const getAllPosts = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            // .get('https://fakestoreapi.com/products')

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

    const handleAddToCart = (data) => {
        console.log("data", data)
        dispatch(addToCart([...cart, data]));
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }
    
    //---------Cart-------------
    // Hide the alert after a certain duration (e.g., 3 seconds)
    return (
        <>
            <div className="App" >
                <UserContext.Provider value=": value from UseContext ABC" >
                    {/* <UserContext.Provider value={{numbers}} > */}
                    {/* <Link to='/footer'>Home</Link> */}
                    <div>Value : {count}</div>
                    <button onClick={handleValuePlus}>Count ++</button>
                    <button onClick={handleValueMinus}>Count --</button>
                    <button onClick={handleValueZero}>Zero</button>
                    <button onClick={Divide}>Divide By 2</button>
                    <Component1 name=': Name by Props' />
                    <hr />
                    <hr />

                    {/*------------Cart----------------*/}
                    {/* {post.map((item) => (
                        <div key={item.id}>
                            <div>UserId : {item.userId}</div>
                            <div>Id : {item.id}</div>
                            <div>Title : {item.title}</div>
                            <div>Body : {item.body}</div>
                            <Link to={`/posts/${item.id}`}>See Details</Link><br />
                            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                            <hr />
                        </div>
                    ))} */}
                    {/*------------Cart----------------*/}

                    {/* ==========Cart===========  */}
                    <div style={{}}>
                        <div className='d-flex justify-content-between'>
                            <h1 className='text-center'>Posts</h1>
                            <div style={{ position: 'fixed', top: '0px', right: '0px', zIndex: '1', marginRight: "10px", marginTop: "10px" }}>
                                <Link className="" style={{}} to='/cart'><button type="button" style={{ paddingLeft: "20px", paddingRight: "20px" }} className="btn btn-outline-danger">Cart</button></Link>
                               </div>
                        </div>
                        <div className="container-fluid row " style={{ margin: "auto" }}>
                            {post.map((p) => (
                                <div key={p.id} className="col col-md-4" style={{ marginTop: "10px" }}>
                                    <div className="card" >
                                        <div className="card-body" style={{ height: "320px", border: "1px solid black", boxShadow: " 0px 0px 9px 1px grey" }}>
                                            <h5 className="card-title ">Id : {p.id}</h5>
                                            <h5 className="card-title ">Title : {p.title}</h5>
                                            <p className="card-text ">{p.body}</p>
                                            <Link to={`/posts/${p.id}`}>See Details</Link><br />
                                            <button onClick={() => handleAddToCart(p)} type="button" className="btn btn-outline-primary" style={{}}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                    {/* ===========Cart=========== */}
                </UserContext.Provider >
            </div >
        </>
    )
}
export default App


//In this Project i use useContext, basic Example of Redux of Count

//-->UseContext helps to share details from one component to another component
//that component must be in the main file
// in App.jsx to component1 

// Steps to use useContext : 
// 1. in main file from where
// const ContextName = createContext(); 
// const UserContext = createContext();

//2. Wrap the code of <></> of return() of function in below tag 
//<ContextName.Provider value='Any'>
//<UserContext.Provider value="raj">

//3. Use below code in the file where data is required
// import { UserContext } from '../App'
// const user = useContext(UserContext);
