import React, { Component } from 'react';
import axios from 'axios';

class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/events/show/' + this.props.match.params.id, {
            headers:{'x-auth-token': localStorage.getItem('token')}
        })
            .then(res => {
                this.setState({
                    name: res.data.name,
                    date: res.data.date
                })
            })
            .catch(err => console.log(err));
    }

    onNameChange = ( e ) => this.setState({name: e.target.value});
    onDateChange = ( e ) => this.setState({date: e.target.date});
    onSubmit = ( e ) => {
        e.preventDefault();
        const updatedEvent = {
            name: this.state.name,
            date: this.state.date,
        };
        axios.put('http://localhost:3001/events/edit/' + this.props.match.params.id, updatedEvent, {
            headers:{'x-auth-token': localStorage.getItem('token')}
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type='text'
                    placeholder='Enter name of event here...'
                    onChange={this.onNameChange}
                    defaultValue={this.state.name}
                />
                <input
                    type='text'
                    placeholder='Enter date for event here...'
                    onChange={this.onDateChange}
                    defaultValue={this.state.date}
                />
                <button type='submit'>
                    Edit
                </button>
            </form>
        )
    }
}
export default EditTodo;