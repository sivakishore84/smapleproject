import React from 'react';
import {UserConsumer} from './UserContext';
import ComponentB from './ComponentB'


const ComponentA = () => {
    return(
        <div>
            <UserConsumer>
                {
                    name => {
                        return <div> Hello {name} </div>
                        
                    }
                    
                }               
            </UserConsumer>
            <ComponentB />

        </div>
    )
}

export default ComponentA;