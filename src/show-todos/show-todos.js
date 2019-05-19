import React, { Component } from 'react';
import axios from 'axios';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/events/show/all',
            {headers: {
                'x-auth-token': localStorage.getItem('token'),
                'owner': localStorage.getItem('id')
                }
            })
            .then(ress => {
                this.setState({
                    data: ress.data.events,
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.data.map((element, i) => {
                            return (
                                <li key={i}>
                                    {element.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default TodoList;