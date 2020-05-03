import React from 'react';
import {UserConsumer} from './component/UserContext';

const Main = () => {
    return(
        <div>
            <UserConsumer>
                {
                    name => {
                        return <div> Hello Main component {name} </div>
                    }
                }
            </UserConsumer>

        </div>
    )
}

export default Main;