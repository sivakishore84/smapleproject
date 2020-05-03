import React from 'react';
import { connect } from 'react-redux';


const Counter1 = (props) => {
    console.log(props.data, 'data')
    
    return(
        <>
    {props.data.username?<><div>Username: {props.data.username}</div>
    <div>Password: {props.data.password}</div>
    <div>Email: {props.data.email}</div></>:''
    }   
    </>
)
}

function mapStateToProps(state){
    return{
        data: state.data
    }
}


export default connect(mapStateToProps)(Counter1);