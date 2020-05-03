import React from 'react';
import {UserConsumer} from './UserContext';

const ComponentC = () => {
    return(
        <div>
            <UserConsumer>
                {
                    name => {
                        return <div> Hello C component {name} </div>
                    }
                }
            </UserConsumer>

        </div>
    )
}

export default ComponentC;