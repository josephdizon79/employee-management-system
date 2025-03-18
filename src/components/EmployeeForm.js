import React from 'react';
import './EmployeeForm.css';  // ✅ Removed duplicate import

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            title: '',
            department: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted Employee Data:', this.state);
        this.setState({
            name: '',
            email: '',
            title: '',
            department: ''
        });
    };

    render() {
        return (
            <form className="employee-form" onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                />

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                />

                <label>Job Title:</label>
                <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    required
                />

                <label>Department:</label>
                <input
                    type="text"
                    name="department"
                    value={this.state.department}
                    onChange={this.handleChange}
                    required
                />

                <button type="submit">Add Employee</button>
            </form>
        );
    }
}

export default EmployeeForm;
