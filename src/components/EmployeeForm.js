import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        const savedEmployees = localStorage.getItem('employees');
        this.state = {
            name: '',
            email: '',
            title: '',
            department: '',
            employees: savedEmployees ? JSON.parse(savedEmployees) : []
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const newEmployee = {
            name: this.state.name,
            email: this.state.email,
            title: this.state.title,
            department: this.state.department
        };

        const updatedEmployees = [...this.state.employees, newEmployee];

        this.setState({
            name: '',
            email: '',
            title: '',
            department: '',
            employees: updatedEmployees
        });

        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    };

    render() {
        return (
            <div>
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

                <div className="employee-list">
                    <h2>Saved Employees:</h2>
                    <ul>
                        {this.state.employees.map((emp, index) => (
                            <li key={index}>
                                <strong>{emp.name}</strong> – {emp.title}, {emp.department} ({emp.email})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default EmployeeForm;
