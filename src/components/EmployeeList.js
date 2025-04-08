import React from 'react';
import './EmployeeForm.css';

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        const savedEmployees = localStorage.getItem('employees');
        this.state = {
            employees: savedEmployees ? JSON.parse(savedEmployees) : []
        };
    }

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

                <div className="employee-list">
                    <h1>Employee List</h1>
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

export default EmployeeList;
