import React from 'react';
import {UserConsumer} from './UserContext';
import ComponentC from './ComponentC';

const ComponentB = () => {
    return(
        <div>
            <ComponentC />
        </div>
    )
}

export default ComponentB;