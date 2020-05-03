import React, { Component } from 'react';

class TodoEdit extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
            todos: [],
            isEdit: false
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            todos: [...this.state.todos, this.state.todo]
        })
    }

    handleEdit = (data) => {
        let edittodo = this.state.todos.filter(item => item !== data)
        this.setState({
            isEdit: true
        })
    }

    handleDelete = (data) => {
        let deltodo = this.state.todos.filter(item => item !== data)
        this.setState({
            todos: deltodo
        })
    }

    render() {
        const { todos } = this.state;
        console.log(this.state.isEdit, 'isedit')
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='todo' value={this.state.todo} onChange={this.handleChange} />

                </form>
                <ul>
                    {
                        todos.map(data =>
                            <li key={data}>{this.state.isEdit === true ? <input type='text' name='todo' value={data} onChange={this.handleChange} /> : `${data}`} <button onClick={(e) => this.handleEdit(e,data)}>Edit</button> <button onClick={() => this.handleDelete(data)}>Delete</button></li>)

                    }
                </ul>

            </>
        )
    }
}

export default TodoEdit;