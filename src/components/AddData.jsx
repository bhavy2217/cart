import React, { useState, useEffect } from 'react'

function AddData() {
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [mydetails, setmydetails] = useState({
    name: "meet",
    age: 20,
    address: "delhi",
  });
  const [mydata, setmydata] = useState([])
  // console.log(mydata, "mydata")
  // console.log(mydetails, "mydetails")
  const handleNewData = () => {
    console.log("Clicked");
    setmydata([...mydata, mydetails])
    console.log(mydetails);
    // For Previous item 
    // console.log(mydata, "mydata")
  }
  return (
    <div className='App'>
      <input
        name='name'
        type="text"
        value={name}
        placeholder='Name'
        onChange={(e) => setname(e.target.value)}
      />
      <input
        name='firstname'
        type="text"
        placeholder='FistName'
        value={firstname}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        name='lastname'
        type="text"
        placeholder='LastName'
        value={lastname}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        name='age'
        type="text"
        value={mydetails.age}
        onChange={(e) => setmydetails({ ...mydetails, age: e.target.value })}
      />
      <input
        name='address'
        type="text"
        value={mydetails.address}
        onChange={(e) => setmydetails({ ...mydetails, address: e.target.value })}
      />
      <button onClick={handleNewData}>Add New Data</button>
      {mydata
        // .filter((item) => item.age > 10)
        .map((item, index) => {
          if (item.age > 10) {
            return (
              <div key={index}>
                <div>
                  Age : {item.age}  |  Address : {item.address}
                </div>
              </div>
            );
          }
        })
      }
      <form onSubmit={(e) => { e.preventDefault() }}>
        <input
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
          type="text"
          name='lastname'
          placeholder='lastname'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddData

