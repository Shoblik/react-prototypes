import React, {Component} from 'react';
import Field from './field';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
        }
    }

    handleInputChange(event) {

        switch(event.target.name) {
            case 'firstName':
                this.setState({firstName: event.target.value});
                break;
            case 'lastName':
                this.setState({lastName: event.target.value});
                break;
            case 'phone':
                this.setState({phone: event.target.value});
                break;
            case 'email':
                this.setState({email: event.target.value});
                break;
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit called, form values are:', this.state);
        this.props.add(this.state);

        this.setState({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
        })
    }

    render() {
        var {firstName, lastName, phone, email} = this.state;
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <Field name='firstName' label='First Name' type='text' value={firstName} onChange={(event) => this.handleInputChange(event)}/>
                <Field name='lastName' label='Last Name' type='text' value={lastName} onChange={(event) => this.handleInputChange(event)}/>
                <Field name='phone' label='phone' type='text' value={phone} onChange={(event) => this.handleInputChange(event)}/>
                <Field name='email' label='email' type='text' value={email} onChange={(event) => this.handleInputChange(event)}/>


                <button className='btn btn-outline-success'>Add Contact</button>
            </form>
            )
    }
}
export default ContactForm;