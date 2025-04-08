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

        // Mock: This simulates sending employee data to a future Python backend
        // The backend will be based on the "Employee Management System Functionality" project built in a previous course CPT 200 Fundamentals of Programming Languages
        this.submitToBackend(newEmployee);
    };

    submitToBackend = (employee) => {
        console.log("Mock: Would send employee to Python backend API →", employee);
    };

    render() {
        return (
            <div style={{
                margin: 0,
                padding: 0,
                paddingTop: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#fafafa',
                minHeight: '100vh'
            }}>
                <img
                    src="/mylogo.png"
                    alt="My Logo"
                    style={{
                        width: '200px',
                        maxWidth: '80%',
                        height: 'auto',
                        margin: '0 0 1rem 0',
                        display: 'block'
                    }}
                />

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
                                <span style={{ whiteSpace: 'nowrap' }}>
                                    <strong>{emp.name}</strong> – {emp.title}, {emp.department}, {emp.email}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default EmployeeForm;
