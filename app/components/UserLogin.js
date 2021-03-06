import React from 'react';
import { NavDropdown, MenuItem, Input, ButtonInput } from 'react-bootstrap';

class UserLogin extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            fields: {
                username: '',
                password: ''
            }
        };

    }

    componentDidMount() {

    }

    onInputChange(field, e) {
        this.state.fields[field] = e.target.value;
        this.setState(this.state);
    }

    onFormSubmit(event) {

        event.preventDefault();

        this.state.open = false;
        this.setState(this.state);
        this.props.doFn(this.state.fields);

    }

    render() {

        let classes = 'form-control';
        if (this.props.appState.failedLogin) {
            classes += ' has-error';
        }

        return (

            <form id='login-form' onSubmit={this.onFormSubmit.bind(this)} >
              <input onChange={this.onInputChange.bind(this, 'username')} bsSize='small' type='text' placeholder='username' className={classes} />
              <input onChange={this.onInputChange.bind(this, 'password')} bsSize='small' type='password' placeholder='password' className={classes} />
              <input bsSize='small' type='submit' value='Login' className='btn btn-primary' />
            </form>

        );


    }

}

export default UserLogin;