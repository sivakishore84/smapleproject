import React,{ Component } from 'react';
import ChildUser from './ChildUser';

class User extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            color:'red'
        }
    }

    onCount = (item,display) => {
        var count = this.state.count;
        item === 'inc'?count++:count--
        this.setState({
         count,
         color:display
        })
    }

    render(){
        return(
            <div>
                <h3 style={{background:`${this.state.color}`}}>{this.state.count}</h3>
                <ChildUser onCount={this.onCount}/>
            </div>
        )
    }
}

export default User;