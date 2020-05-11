import React, {Component} from 'react'

class AddTodo extends Component {
    state = {
        content : ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.AddTodo(this.state.content)
        this.setState({
            content : ''
        })
        
    }
    handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
        console.log(this.state.content)
    }
    render() {
        return (
        <div>
            <form onSubmit = {this.handleSubmit}>
                <label>Add Todo :</label>
                <input type = "text" onChange = {this.handleChange} value = {this.state.content} ></input>
            </form>
        </div>
        ) }
}

export default AddTodo