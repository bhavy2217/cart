import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Component from './components/Component.jsx'
import './index.css'
import Details from './components/Details.jsx'
import Cart from './Cart.jsx'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './Redux/Store/Store.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path='/posts' element={<Component />} />
            <Route path='/posts/:id' element={<Details />} />
            {/* <Route path='/component/:id' element={<Component />} /> */}
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<div> 404 page not Found </div>} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)








//1. Initial / before routing
//-----------------------------
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


// 2. After Routing
//-----------------
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Component from './components/Component.jsx'
// import './index.css'
// import Details from './components/Details.jsx'

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
{/* <Route path='/component/:id' element={<Component />} /> */ }
//         <Route path='/posts' element={<Component />} />
//         <Route path='/posts/:id' element={<Details />} />
//         <Route path='*' element={<div> 404 page not Found </div>} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// )
