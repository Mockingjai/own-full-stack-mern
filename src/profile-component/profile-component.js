import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('http://localhost:3001/users/me', {headers: {'x-auth-token': localStorage.getItem('token')}})
            .then(ress => console.log(ress.data))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
export default Profile;