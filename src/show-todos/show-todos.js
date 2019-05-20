import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Todo = ( props ) => {
   const onDelete = e => {
        axios.delete('http://localhost:3001/events/delete/'+ props.todo._id, {headers:
                {'x-auth-token': localStorage.getItem('token')}
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };
  return (
      <div>
          <li onClick={onDelete}>
              {props.todo.name}
              <Link to={'/events/edit/' + props.todo._id }> Edit</Link>
          </li>
      </div>
  )
};

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
                this.setState({data: ress.data.events});
                console.log(this.state.data)
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
                                <Todo
                                    todo={element}
                                    key={i}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default TodoList;