import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter1 extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            email:''
        }
    }

    onhandleChange = (e) => {
        const {name,value} = e.target;
        this.setState({[name]: value})
    }

    formSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('data', JSON.stringify(this.state));
        const {username,password,email} = this.state;
        const userdata = {username,password,email}
        
        this.props.dispatch({type:'FORM_DATA', data: userdata})
        //this.props.history.push('/')
    }

render(){
    return(
        <>
        <h1>Login Form</h1>
            <form className='app' onSubmit={this.formSubmit}>
            <div><label>Username: </label> <input type='text' name='username' value={this.state.username} onChange={this.onhandleChange}/></div>
            <div><label>Password: </label> <input type='password' name='password' value={this.state.password} onChange={this.onhandleChange}/></div>
            <div><label>Email: </label> <input type='email' name='email' value={this.state.email} onChange={this.onhandleChange}/></div>
            <div><button>Submit</button></div>
            </form>
        </>
    )
}
}

export default connect()(Counter1);