import React from 'react';
import { render } from '@testing-library/react';

const ChildUser = (props) => {
    const onInc = (e) => props.onCount(e.target.name,'Blue')
    return(
        <div>
        <button name='inc' onClick={onInc}>Increment</button><br />
        <button name='dec' onClick={onInc}>Decrement</button>
        </div>
    )

}

export default ChildUser;