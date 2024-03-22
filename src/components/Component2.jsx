import React, { useContext } from 'react'
import { UserContext } from '../App'

function Component2() {
    
    const user = useContext(UserContext);
    return (
        <div>
            Component 2<br/>
            {/* For value='ABC' */}
            {user}

            {/* for object value ='name : "abc"'*/}
            {user.name}
        </div>
    )
}

export default Component2
